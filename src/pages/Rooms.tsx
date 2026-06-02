import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Wind, Wifi, UtensilsCrossed, Shield, BookOpen, Shirt } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const rooms = [
  {
    id: "ac", badge: "Most Popular", badgeColor: "bg-rose-500",
    image: "/images/gallery/double-room.png",
    title: "Double Sharing AC Room", subtitle: "Best for long stays & working professionals",
    price: "₹8,000", period: "/month",
    features: ["Air Conditioner (Split AC)", "Study Table & Ergonomic Chair", "Large Wardrobe with Lock", "Free High-Speed WiFi", "Balcony Access", "24/7 Hot Water Supply", "Clean Private Bathroom", "Daily Housekeeping"],
  },
  {
    id: "cooler", badge: "Best Value", badgeColor: "bg-amber-500",
    image: "/images/gallery/double-room.png",
    title: "Double Sharing Cooler Room", subtitle: "Ideal for students on a budget",
    price: "₹7,500", period: "/month",
    features: ["Desert Air Cooler", "Study Table & Chair", "Wardrobe with Lock", "Free High-Speed WiFi", "Ceiling Fan", "24/7 Hot Water Supply", "Shared Bathroom (2 per floor)", "Weekly Deep Cleaning"],
  },
];

const included = [
  { icon: UtensilsCrossed, label: "3 Meals Daily", desc: "Nutritious breakfast, lunch & dinner" },
  { icon: Wifi, label: "Free WiFi", desc: "High-speed unlimited internet" },
  { icon: Shield, label: "24/7 Security", desc: "Guards, CCTV & biometric entry" },
  { icon: BookOpen, label: "Study Room", desc: "Quiet, dedicated study space" },
  { icon: Shirt, label: "Laundry Area", desc: "Washing machines & drying space" },
  { icon: Wind, label: "Power Backup", desc: "Uninterrupted electricity supply" },
];

export default function Rooms() {
  return (
    <div>
      <section className="relative pt-32 pb-20 bg-cover bg-center" style={{ backgroundImage: "url(/images/gallery/double-room.png)" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-rose-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white/90 text-sm font-medium mb-4 backdrop-blur-sm border border-white/20">Accommodation Options</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Rooms</h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">Thoughtfully designed for your comfort, safety and productivity</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="space-y-10">
            {rooms.map((room, idx) => (
              <motion.div key={room.id} variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
                <div className={`relative ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] bg-rose-50">
                    <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className={`absolute top-5 left-5 px-4 py-1.5 ${room.badgeColor} text-white text-xs font-bold rounded-full shadow-lg`}>{room.badge}</span>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{room.title}</h2>
                    <p className="text-slate-500 text-sm mt-1">{room.subtitle}</p>
                    <div className="flex items-baseline gap-1 mt-4 mb-6">
                      <span className="text-4xl font-bold text-rose-600">{room.price}</span>
                      <span className="text-slate-500 font-medium">{room.period}</span>
                      <span className="ml-2 px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full">All inclusive</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {room.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />{f}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/booking" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-semibold shadow-lg shadow-rose-200 hover:-translate-y-0.5 transition-all duration-200">
                      Book This Room <ArrowRight size={16} />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-600 rounded-xl font-medium hover:border-rose-300 hover:text-rose-600 transition-colors duration-200">
                      Ask a Question
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold mb-4">All Rooms Include</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Included in Your Rent</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map(({ icon: Icon, label, desc }) => (
              <motion.div key={label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-rose-50"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-rose-100">
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
          </motion.div>
          {[
            { q: "Is the food included in the rent?", a: "Yes! Breakfast, lunch, and dinner are all included in the monthly rent. The food is freshly prepared, hygienic, and nutritious." },
            { q: "What are the visiting hours for family members?", a: "Family members are welcome to visit between 9 AM – 8 PM daily. Male visitors are received in the designated visitors' area only." },
            { q: "Is there a security deposit?", a: "Yes, a one-time refundable security deposit of ₹5,000 is required at the time of admission." },
            { q: "Can I choose my roommate?", a: "We do our best to accommodate requests. You can mention your preference at the time of booking." },
            { q: "What documents are required for admission?", a: "Aadhaar Card, photo ID, 2 passport photos, and guardian contact details are required." },
          ].map(({ q, a }) => (
            <details key={q} className="group border border-slate-200 rounded-2xl mb-3 overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-slate-800 hover:text-rose-600 transition-colors list-none">
                <span>{q}</span>
                <span className="text-rose-400 group-open:rotate-180 transition-transform duration-200">▼</span>
              </summary>
              <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-rose-500 to-pink-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Book Your Room?</h2>
          <p className="text-white/80 mb-8">Rooms are filling up fast. Secure yours today!</p>
          <Link href="/booking" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-600 rounded-2xl font-bold shadow-xl hover:-translate-y-1 transition-all duration-200">
            Book Now — Starting ₹7,500/mo <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
