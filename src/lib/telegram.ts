const BOT_TOKEN = "7693479991:AAF00-TVlY6tGmPbCcc9kvGNlNwm1yvQXZI";
const CHAT_ID = "1691680798";
const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

async function sendMessage(text: string): Promise<boolean> {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function sendBookingNotification(data: Record<string, string>): Promise<boolean> {
  const msg = `🏠 *NEW BOOKING REQUEST*

👤 *Name:* ${data.name}
📞 *Phone:* ${data.phone}
📧 *Email:* ${data.email}
🏠 *Room Type:* ${data.roomType}
📅 *Check-in:* ${data.checkIn}
📅 *Duration:* ${data.duration}
👤 *Age:* ${data.age}
💼 *Occupation:* ${data.occupation}
🏠 *Address:* ${data.address}

👨‍👩‍👧 *Guardian:* ${data.guardianName} (${data.guardianRelation})
📞 *Guardian Phone:* ${data.guardianPhone}

💬 *Note:* ${data.note || "None"}
⏰ *Time:* ${new Date().toLocaleString("en-IN")}`;
  return sendMessage(msg);
}

export async function sendContactNotification(data: Record<string, string>): Promise<boolean> {
  const msg = `📩 *NEW CONTACT MESSAGE*

👤 *Name:* ${data.name}
📞 *Phone:* ${data.phone}
📧 *Email:* ${data.email}
🏷️ *Subject:* ${data.subject}

💬 *Message:*
${data.message}

⏰ *Time:* ${new Date().toLocaleString("en-IN")}`;
  return sendMessage(msg);
}
