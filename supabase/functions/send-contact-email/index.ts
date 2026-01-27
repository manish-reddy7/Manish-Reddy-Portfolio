import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, subject, message }: ContactEmailRequest = await req.json();

    // Validate input
    if (!firstName || !lastName || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Initialize Supabase client with service role for database access
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store the submission in the database
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: email,
        subject: subject,
        message: message,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      // Continue with email sending even if DB fails
    } else {
      console.log("Contact submission saved to database");
    }

    // Send notification to Manish
    const notificationEmail = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["kmanishreddy1215@gmail.com"],
      subject: `New Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8B5CF6, #06B6D4); padding: 30px; border-radius: 12px 12px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
            .value { color: #1e293b; font-size: 16px; margin-top: 4px; }
            .message-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #8B5CF6; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">From</div>
                <div class="value">${firstName} ${lastName}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Send confirmation to the sender
    const confirmationEmail = await resend.emails.send({
      from: "Manish Reddy <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks for reaching out! 🚀",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8B5CF6, #06B6D4); padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
            .header h1 { color: white; margin: 0; font-size: 28px; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; }
            .emoji { font-size: 48px; text-align: center; margin-bottom: 20px; }
            p { color: #475569; line-height: 1.6; }
            .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; }
            .links { margin-top: 20px; }
            .links a { color: #8B5CF6; text-decoration: none; margin-right: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Message Received!</h1>
            </div>
            <div class="content">
              <div class="emoji">🎉</div>
              <p>Hey ${firstName}!</p>
              <p>Thank you for reaching out through my portfolio. I've received your message about "<strong>${subject}</strong>" and I'm excited to connect with you!</p>
              <p>I typically respond within 24-48 hours. In the meantime, feel free to check out my latest projects on GitHub or connect with me on LinkedIn.</p>
              <div class="signature">
                <p><strong>Best regards,</strong><br>Manish Reddy</p>
                <p style="color: #64748b; font-size: 14px;">AI/ML Engineer • Cloud Enthusiast • Tech Leader</p>
                <div class="links">
                  <a href="https://linkedin.com/in/manishreddy1215">LinkedIn</a>
                  <a href="https://github.com/manishreddy1215">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Emails sent successfully:", { notificationEmail, confirmationEmail });

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);