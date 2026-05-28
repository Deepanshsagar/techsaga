import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      message,
      subject,
    } = body;

    // Validation
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    // Email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address",
        },
        {
          status: 400,
        }
      );
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send mail
    await transporter.sendMail({
      from: `"Techsaga Website" <${process.env.SMTP_USER}>`,

      // Multiple recipients
      to: [
        process.env.MAIL_TO || "",
      ],

      // User email for direct reply
      replyTo: email,

      subject: `New Enquiry from ${firstName} ${lastName}`,

      html: `
        <div style="font-family: Arial, sans-serif; background: #f4f7fb; padding: 40px 20px;">
          
          <div style="max-width: 700px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
            
            <!-- Header -->
            <div style="background: #4291CE; padding: 24px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 26px;">
                New Contact Form Submission
              </h1>
            </div>

            <!-- Body -->
            <div style="padding: 32px;">

              <p style="font-size: 15px; color: #374151; line-height: 1.7;">
                Dear Team,
              </p>

              <p style="font-size: 15px; color: #374151; line-height: 1.7;">
                A new enquiry has been submitted through the Techsaga website.
                The customer details are listed below.
              </p>

              <!-- User Details -->
              <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">

                <tr>
                  <td style="padding: 14px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: 600; width: 180px;">
                    First Name
                  </td>

                  <td style="padding: 14px; border: 1px solid #e5e7eb;">
                    ${firstName}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 14px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: 600;">
                    Last Name
                  </td>

                  <td style="padding: 14px; border: 1px solid #e5e7eb;">
                    ${lastName}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 14px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: 600;">
                    Email Address
                  </td>

                  <td style="padding: 14px; border: 1px solid #e5e7eb;">
                    <a 
                      href="mailto:${email}" 
                      style="color: #2563eb; text-decoration: none;"
                    >
                      ${email}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 14px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: 600;">
                    Phone Number
                  </td>

                  <td style="padding: 14px; border: 1px solid #e5e7eb;">
                    ${phone}
                  </td>
                </tr>
                ${subject ? `
                    <tr>
                    <td style="padding: 14px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: 600;">
                        Subject
                    </td>

                    <td style="padding: 14px; border: 1px solid #e5e7eb;">
                        ${subject}
                    </td>
                    </tr>
                ` : ""}

              </table>

              <!-- Message -->
              <div style="margin-top: 28px;">
                
                <h3 style="margin-bottom: 12px; color: #111827;">
                  User Message
                </h3>

                <div style="padding: 18px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; color: #374151; line-height: 1.8;">
                  ${message.replace(/\n/g, "<br />")}
                </div>

              </div>

            </div>

            <!-- Footer -->
            <div style="background: #f9fafb; padding: 18px; text-align: center; font-size: 13px; color: #6b7280;">
              © ${new Date().getFullYear()} Techsaga. All rights reserved.
            </div>

          </div>

        </div>
      `,
    });

    await transporter.sendMail({
      from: `"Techsaga" <${process.env.SMTP_USER}>`,

      to: email,

      subject:
        "We received your enquiry | Techsaga",

      html: `
            <div style="font-family: Arial, sans-serif; background: #f4f7fb; padding: 40px 20px;">

              <div style="max-width: 650px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">

                <!-- Header -->
                <div
                  style="
                    background: #4291CE;
                    padding: 30px 24px;
                    text-align: center;
                  "
                >

                  <a
                    href="https://www.techsaga.co.in"
                    target="_blank"
                    style="display: inline-block;"
                  >
                    <img
                      src="https://www.techsaga.co.in/assets/img/logo-w.png"
                      alt="Techsaga Logo"
                      style="
                        max-width: 180px;
                        
                        margin-bottom: 0px;
                        height: auto;
                        display: inline-block;
                      "
                    />
                  </a>


                </div>

                <!-- Body -->
                <div style="padding: 32px;">

                  <p style="font-size: 15px; color: #374151; line-height: 1.8;">
                    Hi ${firstName},
                  </p>

                  <p style="font-size: 15px; color: #374151; line-height: 1.8;">
                    Thank you for reaching out to us.
                    We have successfully received your enquiry.
                  </p>

                  <p style="font-size: 15px; color: #374151; line-height: 1.8;">
                    Our team will review your message
                    and get back to you as soon as possible.
                  </p>

                  <!-- Submitted Details -->
                  <div style="margin-top: 28px;">

                    <h3 style="margin-bottom: 12px; color: #111827;">
                      Submitted Details
                    </h3>

                    <table style="width: 100%; border-collapse: collapse;">

                      <tr>
                        <td style="padding: 12px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: 600;">
                          Name
                        </td>

                        <td style="padding: 12px; border: 1px solid #e5e7eb;">
                          ${firstName} ${lastName}
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 12px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: 600;">
                          Email
                        </td>

                        <td style="padding: 12px; border: 1px solid #e5e7eb;">
                          ${email}
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 12px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: 600;">
                          Phone
                        </td>

                        <td style="padding: 12px; border: 1px solid #e5e7eb;">
                          ${phone}
                        </td>
                      </tr>

                      ${subject
          ? `
                      <tr>
                        <td style="padding: 12px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: 600;">
                          Subject
                        </td>

                        <td style="padding: 12px; border: 1px solid #e5e7eb;">
                          ${subject}
                        </td>
                      </tr>
                      `
          : ""
        }

                    </table>

                  </div>

                  <!-- Message -->
                  <div style="margin-top: 28px;">

                    <h3 style="margin-bottom: 12px; color: #111827;">
                      Your Message
                    </h3>

                    <div style="padding: 18px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; color: #374151; line-height: 1.8;">
                      ${message.replace(/\n/g, "<br />")}
                    </div>

                  </div>

                  <p style="margin-top: 32px; font-size: 15px; color: #374151; line-height: 1.8;">
                    Regards,<br />
                    Techsaga Team
                  </p>

                </div>

                <!-- Footer -->
                <div style="background: #f9fafb; padding: 18px; text-align: center; font-size: 13px; color: #6b7280;">
                  © ${new Date().getFullYear()} Techsaga. All rights reserved.
                </div>

              </div>

            </div>
            `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("Contact Form Error:", error);

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