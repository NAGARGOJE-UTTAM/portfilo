import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    // Validate form fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["nagargojeuttam143@gmail.com"],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 650px;
          margin: 0 auto;
          padding: 30px;
          background-color: #f8fafc;
          border-radius: 12px;
        ">

          <h1 style="
            color: #0f172a;
            margin-bottom: 25px;
          ">
            New Portfolio Message
          </h1>

          <div style="
            background-color: white;
            padding: 25px;
            border-radius: 10px;
          ">

            <p>
              <strong>Name:</strong>
              ${name}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Subject:</strong>
              ${subject}
            </p>

            <hr style="
              border: none;
              border-top: 1px solid #e2e8f0;
              margin: 20px 0;
            " />

            <p>
              <strong>Message:</strong>
            </p>

            <p style="
              white-space: pre-line;
              line-height: 1.6;
              color: #334155;
            ">
              ${message}
            </p>

          </div>

          <p style="
            margin-top: 20px;
            font-size: 13px;
            color: #64748b;
          ">
            This message was sent from your portfolio contact form.
          </p>

        </div>
      `,
    });

    // Handle Resend error
    if (error) {
      console.error("Resend Error:", error);

      return NextResponse.json(
        {
          success: false,
          error: "Failed to send the message.",
        },
        {
          status: 500,
        }
      );
    }

    // Successful response
    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
        data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while sending the message.",
      },
      {
        status: 500,
      }
    );
  }
}