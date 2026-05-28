import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const resume = formData.get("resume") as File;

    if (!resume) {
      return NextResponse.json(
        {
          success: false,
          message: "Resume is required",
        },
        {
          status: 400,
        }
      );
    }

    // Convert file to buffer
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send Mail
    await transporter.sendMail({
      from: `"Techsaga Careers" <${process.env.SMTP_USER}>`,

      // Multiple emails
      to: [
        "hr@techsaga.in",
        // "careers@techsaga.co.in",
      ],

      // Candidate email for direct reply
      replyTo: email,

      subject: `New Career Application - ${firstName} ${lastName}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden;">
          
          <div style="background: #0f172a; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">
              New Career Application
            </h1>
          </div>

          <div style="padding: 30px; background: #ffffff;">
            
            <p style="font-size: 15px; color: #374151; line-height: 1.7;">
              Dear HR Team,
            </p>

            <p style="font-size: 15px; color: #374151; line-height: 1.7;">
              A new career application has been submitted through the Techsaga website.
              Candidate details are provided below.
            </p>

            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              
              <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: 600; background: #f9fafb;">
                  First Name
                </td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">
                  ${firstName}
                </td>
              </tr>

              <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: 600; background: #f9fafb;">
                  Last Name
                </td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">
                  ${lastName}
                </td>
              </tr>

              <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: 600; background: #f9fafb;">
                  Email Address
                </td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">
                    ${email}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: 600; background: #f9fafb;">
                  Phone Number
                </td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">
                  ${phone}
                </td>
              </tr>

              <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: 600; background: #f9fafb; vertical-align: top;">
                  Message
                </td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; line-height: 1.7;">
                  ${message || "N/A"}
                </td>
              </tr>

            </table>

            <p style="margin-top: 25px; font-size: 15px; color: #374151; line-height: 1.7;">
              The candidate's resume is attached with this email for your review.
            </p>

          </div>

          <div style="background: #f9fafb; padding: 18px; text-align: center; font-size: 13px; color: #6b7280;">
            © ${new Date().getFullYear()} Techsaga. All rights reserved.
          </div>

        </div>
      `,

      attachments: [
        {
          filename: resume.name,
          content: buffer,
          contentType: resume.type || "application/pdf",
        },
      ],
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
    });

  } catch (error) {
    console.error("Career Form Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}