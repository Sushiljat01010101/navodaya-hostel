import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2, Send, Shield, UtensilsCrossed, Wifi, BookOpen } from "lucide-react";
import { toast } from "sonner";
import { sendBookingOnWhatsApp } from "@/lib/whatsapp";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

type Form = {
  name: string; phone: string; email: string; roomType: string; checkIn: string;
  duration: string; age: string; occupation: string; address: string;
  guardianName: string; guardianRelation: string; guardianPhone: string;
  guardianEmail: string; note: string;
};

const roomOptions = [
  { value: "Double Sharing AC Room", label: "Double Sharing AC Room", price: "₹8,000/month", badge: "Popular" },
  { value: "Double Sharing Cooler Room", label: "Double Sharing Cooler Room", price: "₹7,500/month", badge: "Value" },
];

const durationOptions = ["1 Month", "3 Months", "6 Months", "1 Year"];
const guardianRelations = ["Mother", "Father", "Spouse", "Guardian", "Other"];
const EMPTY: Form = { name: "", phone: "", email: "", roomType: "", checkIn: "", duration: "", age: "", occupation: "", address: "", guardianName: "", guardianRelation: "", guardianPhone: "", guardianEmail: "", note: "" };

type FieldProps = {
  label: string;
  field: keyof Form;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Field({ label, type = "text", placeholder, required = true, value, onChange }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition text-sm"
      />
    </div>
  );
}

export default function Booking() {
  const [form, setForm] = useState<Form>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const set = (field: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const selectedRoom = roomOptions.find((r) => r.value === form.roomType);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const required: (keyof Form)[] = ["name", "phone", "email", "roomType", "checkIn", "duration", "age", "occupation", "address", "guardianName", "guardianRelation", "guardianPhone"];
    if (required.some((k) => !form[k])) { toast.error("Please fill in all required fields."); return; }
    setLoading(true);
    const id = "NGH-" + Date.now().toString().slice(-6);
    setBookingId(id);
    const rent = selectedRoom?.price.replace("/month", "") || "—";
    sendBookingOnWhatsApp({ ...form, rent, bookingId: id });
    setLoading(false);
    setSuccess(true);
    toast.success("Booking submitted! We'll confirm within 24 hours.");
  };

  const Field = ({ label, field, type = "text", placeholder, required = true }: { label: string; field: keyof Form; type?: string; placeholder?: string; required?: boolean }) => (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label} {required && <span className="text-rose-500">*</span>}</label>
      <input type={type} value={form[field]} onChange={set(field)} placeholder={placeholder} required={required}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition text-sm" />
    </div>
  );

  return (
    <div>
      <section className="relative pt-32 pb-20 bg-cover bg-center" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/gallery/exterior.png)` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 to-rose-900/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white/90 text-sm font-medium mb-4 backdrop-blur-sm border border-white/20">Online Booking</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Book Your Room</h1>
            <p className="text-white/80 text-lg">Fill the form and we'll confirm your booking within 24 hours</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {success ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto bg-white rounded-3xl p-12 text-center shadow-2xl border border-emerald-100">
              <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-emerald-500" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Booking Request Submitted!</h2>
              <p className="text-slate-500 mb-4 leading-relaxed">
                Thank you, <strong>{form.name}</strong>! Your booking request has been received. Our team will contact you at <strong>{form.phone}</strong> within 24 hours.
              </p>
              <div className="inline-block px-5 py-2.5 rounded-xl bg-rose-50 border border-rose-100 text-rose-700 font-bold text-lg mb-8">
                Booking ID: {bookingId}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[{ icon: Shield, label: "24/7 Security" }, { icon: UtensilsCrossed, label: "Meals Included" }, { icon: Wifi, label: "Free WiFi" }, { icon: BookOpen, label: "Study Room" }].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-rose-50">
                    <Icon size={20} className="text-rose-500" />
                    <p className="text-xs text-slate-600 font-medium">{label}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => { setSuccess(false); setForm(EMPTY); }} className="px-8 py-3 border border-slate-200 text-slate-600 rounded-xl font-medium hover:border-rose-300 hover:text-rose-600 transition-colors">
                Submit Another Booking
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Booking Details</h2>
                <p className="text-slate-500 text-sm mb-8">All fields marked * are required.</p>

                <form onSubmit={handleSubmit} className="space-y-7">
                  <div>
                    <h3 className="text-sm font-bold text-rose-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-xs">1</span>
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Full Name" field="name" placeholder="Your full name" value={form.name} onChange={set("name")} />
                      <Field label="Phone Number" field="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set("phone")} />
                      <Field label="Email Address" field="email" type="email" placeholder="your@email.com" value={form.email} onChange={set("email")} />
                      <Field label="Age" field="age" type="number" placeholder="Your age" value={form.age} onChange={set("age")} />
                      <Field label="Occupation" field="occupation" placeholder="Student / Professional" value={form.occupation} onChange={set("occupation")} />
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Current Address <span className="text-rose-500">*</span></label>
                        <textarea value={form.address} onChange={set("address")} rows={2} placeholder="Your current residential address" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition text-sm resize-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-rose-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-xs">2</span>
                      Room & Stay Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Room Type <span className="text-rose-500">*</span></label>
                        <select value={form.roomType} onChange={set("roomType")} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition text-sm bg-white">
                          <option value="">Select room type</option>
                          {roomOptions.map((r) => <option key={r.value} value={r.value}>{r.label} — {r.price}</option>)}
                        </select>
                      </div>
                      <Field label="Preferred Check-in Date" field="checkIn" type="date" value={form.checkIn} onChange={set("checkIn")} />
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Stay Duration <span className="text-rose-500">*</span></label>
                        <select value={form.duration} onChange={set("duration")} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition text-sm bg-white">
                          <option value="">Select duration</option>
                          {durationOptions.map((d) => <option key={d}>{d}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-rose-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-xs">3</span>
                      Guardian / Emergency Contact
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Guardian Name" field="guardianName" placeholder="Full name" value={form.guardianName} onChange={set("guardianName")} />
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Relation <span className="text-rose-500">*</span></label>
                        <select value={form.guardianRelation} onChange={set("guardianRelation")} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition text-sm bg-white">
                          <option value="">Select relation</option>
                          {guardianRelations.map((r) => <option key={r}>{r}</option>)}
                        </select>
                      </div>
                      <Field label="Guardian Phone" field="guardianPhone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.guardianPhone} onChange={set("guardianPhone")} />
                      <Field label="Guardian Email" field="guardianEmail" type="email" placeholder="guardian@email.com" required={false} value={form.guardianEmail} onChange={set("guardianEmail")} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Special Requirements <span className="text-slate-400 text-xs font-normal">(optional)</span></label>
                    <textarea value={form.note} onChange={set("note")} rows={3} placeholder="Any special requirements..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition text-sm resize-none" />
                  </div>

                  <div className="p-4 bg-rose-50 rounded-xl border border-rose-100 text-sm text-rose-700">
                    <strong>Note:</strong> This is a booking <em>request</em>. Our team will contact you within 24 hours to confirm and share payment details. No payment collected online.
                  </div>

                  <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-bold text-base shadow-xl shadow-rose-200 hover:-translate-y-0.5 disabled:opacity-60 transition-all duration-200">
                    {loading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                    {loading ? "Submitting Request..." : "Submit Booking Request"}
                  </button>
                </form>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-4">Your Selection</h3>
                  {selectedRoom ? (
                    <div>
                      <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-rose-50">
                        <img src={`${import.meta.env.BASE_URL}images/gallery/double-room.png`} alt={selectedRoom.label} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex justify-between items-start mb-3">
                        <p className="font-bold text-slate-900 text-sm">{selectedRoom.label}</p>
                        <span className="px-2 py-1 bg-rose-50 text-rose-600 text-xs font-bold rounded-lg">{selectedRoom.badge}</span>
                      </div>
                      <p className="text-2xl font-bold text-rose-600 mb-1">{selectedRoom.price}</p>
                    </div>
                  ) : (
                    <p className="text-slate-400 text-sm">Select a room type to see details.</p>
                  )}
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-4">All Rooms Include</h3>
                  <ul className="space-y-3">
                    {["3 Nutritious Meals Daily", "Free High-Speed WiFi", "24/7 Security & CCTV", "Dedicated Study Room", "Laundry Facilities", "Power Backup"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-6 text-white">
                  <h3 className="font-bold mb-2">Need Help Booking?</h3>
                  <p className="text-white/80 text-sm mb-4">Call us and we'll assist you personally.</p>
                  <a href="tel:+919887066664" className="flex items-center justify-center gap-2 w-full py-3 bg-white text-rose-600 rounded-xl font-bold text-sm hover:-translate-y-0.5 transition-transform duration-200">
                    +91-9887066664
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
