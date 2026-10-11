import { NextResponse } from "next/server";

interface ContactSubmission {
  name: string;
  email: string;
  organization?: string;
  enquiryType: string;
  productOfInterest: string;
  message: string;
  consent: boolean;
  hp_website?: string; // Honeypot field
}

const VALID_ENQUIRY_TYPES = [
  "general",
  "prism",
  "gravitas",
  "pilot",
  "research",
  "partnership",
];

const VALID_PRODUCTS = ["prism", "gravitas", "both", "general"];

export async function POST(request: Request) {
  try {
    const body: ContactSubmission = await request.json();

    // 1. Honeypot Spam Verification
    if (body.hp_website && body.hp_website.trim().length > 0) {
      // Bot trapped: return innocuous success response without processing
      console.warn("[SECURITY] Bot submission detected via honeypot field. Discarded.");
      return NextResponse.json(
        { success: true, message: "Enquiry submitted successfully." },
        { status: 200 }
      );
    }

    // 2. Strict Input Validation
    const errors: Record<string, string> = {};

    if (!body.name || typeof body.name !== "string" || body.name.trim().length < 2) {
      errors.name = "Full name is required (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !body.email ||
      typeof body.email !== "string" ||
      !emailRegex.test(body.email.trim())
    ) {
      errors.email = "A valid work email address is required.";
    }

    if (
      !body.enquiryType ||
      !VALID_ENQUIRY_TYPES.includes(body.enquiryType.toLowerCase())
    ) {
      errors.enquiryType = "Please select a valid enquiry classification.";
    }

    if (
      !body.productOfInterest ||
      !VALID_PRODUCTS.includes(body.productOfInterest.toLowerCase())
    ) {
      errors.productOfInterest = "Please select a product or general interest option.";
    }

    if (
      !body.message ||
      typeof body.message !== "string" ||
      body.message.trim().length < 10
    ) {
      errors.message = "Message must be at least 10 characters long.";
    }

    if (body.consent !== true) {
      errors.consent = "You must agree to the data handling terms to submit an enquiry.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation error: Please review the highlighted fields.",
          errors,
        },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      organization: body.organization ? body.organization.trim() : "Not specified",
      enquiryType: body.enquiryType.trim(),
      productOfInterest: body.productOfInterest.trim(),
      message: body.message.trim(),
      submittedAt: new Date().toISOString(),
    };

    // 3. Email Dispatch Integration
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL || "enquiries@vyokalabs.com";

    if (resendApiKey) {
      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Vyoka Labs Website <notifications@vyokalabs.com>",
            to: recipientEmail,
            subject: `[Vyoka Labs Enquiry] ${sanitizedData.enquiryType.toUpperCase()} from ${sanitizedData.name}`,
            html: `
              <h2>New Technical Enquiry — Vyoka Labs Private Limited</h2>
              <p><strong>Name:</strong> ${sanitizedData.name}</p>
              <p><strong>Work Email:</strong> ${sanitizedData.email}</p>
              <p><strong>Organization:</strong> ${sanitizedData.organization}</p>
              <p><strong>Enquiry Type:</strong> ${sanitizedData.enquiryType}</p>
              <p><strong>Product of Interest:</strong> ${sanitizedData.productOfInterest}</p>
              <p><strong>Timestamp:</strong> ${sanitizedData.submittedAt}</p>
              <hr />
              <h3>Message Content:</h3>
              <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
            `,
          }),
        });

        if (!resendResponse.ok) {
          const resendErr = await resendResponse.text();
          console.error("[EMAIL_DISPATCH_ERROR] Resend API returned error:", resendErr);
        } else {
          console.log("[EMAIL_DISPATCH_SUCCESS] Email dispatched via Resend to", recipientEmail);
        }
      } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        console.error("[EMAIL_DISPATCH_EXCEPTION] Failed to deliver via Resend:", errorMsg);
      }
    } else {
      // Development or unconfigured provider mode:
      console.log("=======================================================");
      console.log("[VYOKA LABS DEV_MODE CONTACT SUBMISSION RECEIVED]");
      console.log("Timestamp:", sanitizedData.submittedAt);
      console.log("Name:", sanitizedData.name);
      console.log("Email:", sanitizedData.email);
      console.log("Organization:", sanitizedData.organization);
      console.log("Enquiry Type:", sanitizedData.enquiryType);
      console.log("Product:", sanitizedData.productOfInterest);
      console.log("Message:", sanitizedData.message);
      console.log("NOTE: RESEND_API_KEY is not configured in .env.local.");
      console.log("This enquiry has been validated and recorded locally.");
      console.log("=======================================================");
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out to Vyoka Labs Private Limited. Your enquiry has been received by our engineering team.",
        isDevMode: !resendApiKey,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("[CONTACT_API_ERROR]", errorMsg);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred while processing your request. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}
