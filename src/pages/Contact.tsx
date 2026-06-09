import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { sendContactOnWhatsApp } from "@/lib/whatsapp";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.subject || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    sendContactOnWhatsApp(form);
    setLoading(false);
    setSent(true);
    toast.success("Message sent! We'll reply within 24 hours.");
  };

  const infoCards = [
    { icon: Phone, title: "Call Us", lines: ["+91-9887066664"], link: "tel:+919887066664", color: "from-emerald-400 to-green-500" },
    { icon: Mail, title: "Email Us", lines: ["info@navodayagirlshostel.com"], link: "mailto:info@navodayagirlshostel.com", color: "from-blue-400 to-cyan-500" },
    { icon: MessageCircle, title: "WhatsApp", lines: ["+91-9887066664", "Chat with us anytime"], link: "https://wa.me/919887066664", color: "from-emerald-500 to-teal-600" },
    { icon: MapPin, title: "Visit Us", lines: ["46, Tonk Rd, opp. Epip Gate,", "Sitapura, Jaipur - 302022"], link: "https://maps.google.com/?q=Navodaya+Girls+Hostel+Jaipur", color: "from-rose-400 to-pink-500" },
  ];

  return (
    <div>
      <section className="relative pt-32 pb-20 bg-cover bg-center" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/gallery/exterior.png)` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-rose-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white/90 text-sm font-medium mb-4 backdrop-blur-sm border border-white/20">Get In Touch</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">Have questions? We're here to help. Reach out anytime.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-8 relative z-10">
            {infoCards.map(({ icon: Icon, title, lines, link, color }) => (
              <motion.a key={title} href={link} target={link.startsWith("http") ? "_blank" : undefined} rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -6 }}
                className="p-6 bg-white rounded-2xl shadow-xl border border-slate-100 text-center hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                {lines.map((l) => <p key={l} className="text-slate-500 text-sm leading-relaxed">{l}</p>)}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-slate-100"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
              <p className="text-slate-500 text-sm mb-8">We'll get back to you within 24 hours.</p>

              {sent ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500">Thank you for reaching out. We'll contact you soon.</p>
                  <button onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 px-6 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:border-rose-300 hover:text-rose-600 transition-colors"
                  >Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                      <input type="text" value={form.name} onChange={set("name")} placeholder="Your full name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                      <input type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 XXXXX XXXXX" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                    <input type="email" value={form.email} onChange={set("email")} placeholder="your@email.com" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Subject *</label>
                    <select value={form.subject} onChange={set("subject")} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition text-sm bg-white">
                      <option value="">Select a subject</option>
                      <option>Room Availability Inquiry</option>
                      <option>Pricing & Packages</option>
                      <option>Visit / Tour Request</option>
                      <option>Existing Resident Query</option>
                      <option>Feedback / Complaint</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                    <textarea value={form.message} onChange={set("message")} rows={5} placeholder="Write your message here..." required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition text-sm resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-semibold shadow-lg shadow-rose-200 hover:-translate-y-0.5 disabled:opacity-60 transition-all duration-200">
                    {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="flex flex-col gap-6">
              <div className="flex-1 rounded-3xl overflow-hidden shadow-lg border border-slate-100 min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8088636609!2d75.8021!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA3NcKwNDgnMDcuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%" height="100%" className="min-h-[300px]" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location"
                />
              </div>
              <div className="bg-white rounded-3xl p-7 shadow-lg border border-slate-100">
                <h3 className="font-bold text-slate-900 text-lg mb-4">Visit Our Hostel</h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-rose-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">Address</p>
                      <p>46, Tonk Rd, opp. Epip Gate, Mahaveer Colony,<br />Shatabdi Nagar, Sitapura, Jaipur, Rajasthan 302022</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-rose-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">Phone</p>
                      <a href="tel:+919887066664" className="hover:text-rose-600 transition-colors">+91-9887066664</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle size={16} className="text-rose-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">Visiting Hours</p>
                      <p>9:00 AM – 8:00 PM, All Days</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
