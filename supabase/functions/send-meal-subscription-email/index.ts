import { serve } from "https://deno.land/std@0.214.0/http/server.ts";

const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY")!;
const SENDGRID_FROM_EMAIL = Deno.env.get("SENDGRID_FROM_EMAIL")!;
const SENDGRID_TO_EMAIL = Deno.env.get("SENDGRID_TO_EMAIL")!;

const COLORS = {
  cream: "#FDFBF7",
  dark: "#2D2420",
  orange: "#F27D42",
  orangeLight: "#FF9F6D",
};

type WaitlistPayload = {
  name: string;
  email: string;
  phone?: string;
  plan?: string;
  meals_per_week?: string;
  delivery_days?: string;
  message?: string;
};

const adminEmailHtml = (data: WaitlistPayload) => `
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 20px; }
  .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
  .header { background: linear-gradient(135deg, ${COLORS.orange} 0%, ${COLORS.orangeLight} 100%); color: #fff; padding: 30px; text-align: center; }
  .content { padding: 30px; }
  .detail-row { padding: 10px 0; border-bottom: 1px solid #eee; }
  .label { font-weight: bold; color: ${COLORS.dark}; display: inline-block; width: 160px; }
  .value { color: #555; }
  .footer { background: ${COLORS.dark}; color: #999; padding: 20px; text-align: center; font-size: 12px; }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 26px;">New Waitlist Request</h1>
      <p style="margin: 8px 0 0 0;">Homemade</p>
    </div>
    <div class="content">
      <div class="detail-row"><span class="label">Name:</span><span class="value">${data.name}</span></div>
      <div class="detail-row"><span class="label">Email:</span><span class="value">${data.email}</span></div>
      <div class="detail-row"><span class="label">Phone:</span><span class="value">${data.phone || "Not provided"}</span></div>
      <div class="detail-row"><span class="label">Plan:</span><span class="value">${data.plan || "Not selected"}</span></div>
      <div class="detail-row"><span class="label">Meals / week:</span><span class="value">${data.meals_per_week || "Not selected"}</span></div>
      <div class="detail-row"><span class="label">Delivery days:</span><span class="value">${data.delivery_days || "Not selected"}</span></div>
      ${data.message ? `<div style="margin-top: 16px; padding: 12px; background: #f9f9f9; border-left: 4px solid ${COLORS.orange};">${data.message}</div>` : ""}
      <p style="margin-top: 24px; font-size: 12px; color: #999;">
        Submitted: ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
      </p>
    </div>
    <div class="footer">
      <p style="margin: 0;">&copy; ${new Date().getFullYear()} Homemade. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

const clientEmailHtml = (data: WaitlistPayload) => `
<!DOCTYPE html>
<html>
<head>
<style>
  body { margin: 0; padding: 0; background: ${COLORS.cream}; font-family: Arial, sans-serif; }
  .container { max-width: 600px; margin: 0 auto; background: #fff; }
  .header { background: ${COLORS.dark}; color: #fff; padding: 40px 30px; text-align: center; }
  .content { padding: 30px; color: #555; }
  .details { background: #faf7f2; padding: 20px; border-radius: 12px; border-left: 4px solid ${COLORS.orange}; }
  .footer { background: ${COLORS.dark}; color: #999; padding: 20px; text-align: center; font-size: 12px; }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">Homemade</h1>
      <p style="margin: 8px 0 0 0;">Meal Subscriptions</p>
    </div>
    <div class="content">
      <h2 style="color: ${COLORS.dark};">Hi ${data.name.split(" ")[0]}!</h2>
      <p>Thanks for joining the waitlist. We’ve saved your spot and will email you as soon as new subscriptions open.</p>
      <div class="details">
        <p><strong>Plan:</strong> ${data.plan || "Not selected"}</p>
        <p><strong>Meals per week:</strong> ${data.meals_per_week || "Not selected"}</p>
        <p><strong>Delivery days:</strong> ${data.delivery_days || "Not selected"}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
      </div>
      <p style="margin-top: 20px;">You can reply to this email if you want to adjust anything.</p>
    </div>
    <div class="footer">
      <p style="margin: 0;">&copy; ${new Date().getFullYear()} Homemade. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  try {
    const bodyText = await req.text();
    if (!bodyText) throw new Error("Request body is empty");
    const data: WaitlistPayload = JSON.parse(bodyText);

    if (!data.name || !data.email) {
      return new Response(JSON.stringify({ success: false, error: "Name and email are required" }), {
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        status: 400,
      });
    }

    const sendEmail = async (payload: Record<string, unknown>) => {
      const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`SendGrid error: ${res.status} ${text}`);
      }
    };

    await sendEmail({
      personalizations: [{ to: [{ email: SENDGRID_TO_EMAIL }] }],
      from: { email: SENDGRID_FROM_EMAIL, name: "Homemade" },
      subject: `🧑‍🍳 New Waitlist Request: ${data.name}`,
      content: [{ type: "text/html", value: adminEmailHtml(data) }],
    });

    await sendEmail({
      personalizations: [{ to: [{ email: data.email, name: data.name }] }],
      from: { email: SENDGRID_FROM_EMAIL, name: "Homemade" },
      subject: "You’re on the Homemade Waitlist ✅",
      content: [{ type: "text/html", value: clientEmailHtml(data) }],
    });

    return new Response(JSON.stringify({ success: true, message: "Emails sent successfully" }), {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error sending emails:", errorMessage, error);
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      status: 500,
    });
  }
});
