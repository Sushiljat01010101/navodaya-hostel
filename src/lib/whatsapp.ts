const WHATSAPP_NUMBER = "919887066664";

export function sendBookingOnWhatsApp(data: Record<string, string>): void {
  const msg =
`🏠 *NEW BOOKING REQUEST*

👤 Name: ${data.name}
📞 Phone: ${data.phone}
📧 Email: ${data.email}
🏠 Room Type: ${data.roomType}
💰 Rent: ${data.rent}
📅 Check-in: ${data.checkIn}
⏳ Duration: ${data.duration}
👤 Age: ${data.age}
💼 Occupation: ${data.occupation}
🏡 Address: ${data.address}

👨‍👩‍👧 Guardian: ${data.guardianName} (${data.guardianRelation})
📞 Guardian Phone: ${data.guardianPhone}
${data.guardianEmail ? `📧 Guardian Email: ${data.guardianEmail}` : ""}

💬 Note: ${data.note || "None"}
🔖 Booking ID: ${data.bookingId}
⏰ Time: ${new Date().toLocaleString("en-IN")}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

export function sendContactOnWhatsApp(data: Record<string, string>): void {
  const msg =
`📩 *NEW CONTACT MESSAGE*

👤 Name: ${data.name}
📞 Phone: ${data.phone}
📧 Email: ${data.email}
🏷️ Subject: ${data.subject}

💬 Message:
${data.message}

⏰ Time: ${new Date().toLocaleString("en-IN")}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
