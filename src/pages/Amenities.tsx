import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, Camera, Lock, Wind, Droplets, BookOpen, UtensilsCrossed, Coffee, Wifi, Zap, Shirt, Tv, Flower2, Dumbbell, Phone, ArrowRight, ArrowUpDown } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const amenityGroups = [
  {
    category: "Security & Safety", color: "emerald",
    items: [
      { icon: Shield, title: "24/7 Security Guard", desc: "Trained security personnel on duty round the clock, every day of the year." },
      { icon: Camera, title: "CCTV Surveillance", desc: "High-resolution cameras covering all entry points, corridors and common areas." },
      { icon: Lock, title: "Biometric Entry", desc: "Secure fingerprint-based entry system ensures only residents can access the building." },
      { icon: Phone, title: "Emergency Helpline", desc: "Dedicated emergency contact number available 24/7 for any urgent situation." },
    ],
  },
  {
    category: "Room Comforts", color: "blue",
    items: [
      { icon: Wind, title: "AC / Air Cooler", desc: "Every room has either a split AC or a powerful desert air cooler for your comfort." },
      { icon: Droplets, title: "24/7 Hot Water", desc: "Geysers in every bathroom provide hot water at any time you need it." },
      { icon: BookOpen, title: "Study Table & Chair", desc: "Ergonomic study setup in every room to support your academic and professional goals." },
      { icon: Zap, title: "Power Backup", desc: "Generator ensures uninterrupted power supply so your work and studies never stop." },
      { icon: ArrowUpDown, title: "Passenger Lift", desc: "Modern elevator available for all floors — convenient for residents & easy movement of luggage." },
    ],
  },
  {
    category: "Food & Kitchen", color: "amber",
    items: [
      { icon: UtensilsCrossed, title: "3 Meals Per Day", desc: "Nutritious home-style breakfast, lunch, and dinner prepared fresh by experienced cooks." },
      { icon: Coffee, title: "Morning Tea/Coffee", desc: "Complimentary chai and coffee served every morning to start your day right." },
      { icon: Wifi, title: "Kitchen Access", desc: "Shared kitchen facilities available for residents who want to cook their own meals." },
      { icon: Droplets, title: "Filtered Drinking Water", desc: "RO-purified drinking water available 24/7 throughout the hostel." },
    ],
  },
  {
    category: "Recreation & Wellness", color: "violet",
    items: [
      { icon: Tv, title: "TV Lounge", desc: "Comfortable lounge with cable TV for relaxation and entertainment after a long day." },
      { icon: Flower2, title: "Garden & Terrace", desc: "Beautiful garden and rooftop terrace area perfect for evening walks and fresh air." },
      { icon: Dumbbell, title: "Fitness Area", desc: "Basic gym equipment available for residents to stay fit and healthy." },
      { icon: Shirt, title: "Laundry Facilities", desc: "Washing machines and dedicated drying areas for your convenience." },
    ],
  },
];

const colorMap: Record<string, { bg: string; badge: string }> = {
  emerald: { bg: "from-emerald-400 to-green-500", badge: "bg-emerald-50 text-emerald-600" },
  blue: { bg: "from-blue-400 to-cyan-500", badge: "bg-blue-50 text-blue-600" },
  amber: { bg: "from-amber-400 to-orange-500", badge: "bg-amber-50 text-amber-600" },
  violet: { bg: "from-violet-400 to-purple-500", badge: "bg-violet-50 text-violet-600" },
};

export default function Amenities() {
  return (
    <div>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 to-rose-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white/90 text-sm font-medium mb-4 backdrop-blur-sm border border-white/20">World-Class Facilities</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Amenities</h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">Every comfort you need, all under one roof</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {[{ value: "17+", label: "Amenities" }, { value: "24/7", label: "Security" }, { value: "3x", label: "Meals Daily" }, { value: "100%", label: "WiFi Coverage" }, { value: "Power", label: "Backup" }].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold text-rose-600">{value}</p>
                <p className="text-slate-500 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {amenityGroups.map(({ category, color, items }) => {
            const c = colorMap[color];
            return (
              <motion.div key={category} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
                <div className="flex items-center gap-3 mb-8">
                  <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${c.badge}`}>{category}</span>
                  <div className="flex-1 h-px bg-slate-100" />
                </div>
                <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {items.map(({ icon: Icon, title, desc }) => (
                    <motion.div key={title} variants={fadeUp} whileHover={{ y: -6, scale: 1.02 }}
                      className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.bg} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={22} className="text-white" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2 text-sm">{title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900">See Our Facilities</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {["gym.png", "study-room.png", "dining-hall.png", "tv-lounge.png", "garden.png"].map((img) => (
              <div key={img} className="aspect-square rounded-2xl overflow-hidden group bg-rose-100">
                <img src={`${import.meta.env.BASE_URL}images/gallery/${img}`} alt={img.replace(".png", "").replace("-", " ")} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-flex items-center gap-2 px-6 py-3 border border-rose-300 text-rose-600 rounded-xl font-semibold hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all duration-200">
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-rose-500 to-pink-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Experience It All Yourself</h2>
          <p className="text-white/80 mb-8">Book a room and enjoy every amenity from day one.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-600 rounded-2xl font-bold shadow-xl hover:-translate-y-1 transition-all duration-200">
              Book Now <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white rounded-2xl font-semibold hover:bg-white/10 transition-all duration-200">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
