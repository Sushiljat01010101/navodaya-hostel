import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  Shield, Wifi, UtensilsCrossed, Wind, BookOpen, Shirt,
  Star, Phone, MapPin, ArrowRight, Users, Home, Award, Clock, ArrowUpDown
} from "lucide-react";

const heroImages = [
  `${import.meta.env.BASE_URL}images/gallery/exterior.png`,
  `${import.meta.env.BASE_URL}images/gallery/exterior1.png`,
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const features = [
  { icon: Shield, title: "24/7 Security", desc: "CCTV, biometric entry & trained security guards round the clock.", color: "from-emerald-400 to-green-500" },
  { icon: Wifi, title: "Free High-Speed WiFi", desc: "Unlimited internet connectivity throughout the hostel premises.", color: "from-blue-400 to-cyan-500" },
  { icon: UtensilsCrossed, title: "Nutritious Meals", desc: "Hygienic, home-style breakfast, lunch & dinner included daily.", color: "from-amber-400 to-orange-500" },
  { icon: Wind, title: "AC Rooms Available", desc: "Air-conditioned double sharing rooms for ultimate comfort.", color: "from-sky-400 to-blue-500" },
  { icon: BookOpen, title: "Dedicated Study Room", desc: "Quiet, well-lit study space to help you focus and excel.", color: "from-violet-400 to-purple-500" },
  { icon: Shirt, title: "Laundry Facilities", desc: "Washing machines and drying areas available for residents.", color: "from-rose-400 to-pink-500" },
  { icon: ArrowUpDown, title: "Passenger Lift", desc: "Modern elevator for easy access to all floors — perfect for luggage & daily convenience.", color: "from-indigo-400 to-blue-600" },
];

const testimonials = [
  { name: "Priya Sharma", role: "Engineering Student", stars: 5, text: "The best decision I ever made — Navodaya feels like a second home. Security is top-notch, food is delicious, and the staff is incredibly caring." },
  { name: "Anjali Gupta", role: "Working Professional", stars: 5, text: "My parents worried about my safety, but Navodaya's 24/7 security completely put their minds at ease. Highly recommend to every girl in Jaipur!" },
  { name: "Neha Verma", role: "Civil Services Aspirant", stars: 5, text: "The study room is a game-changer. Peaceful environment, great internet, and very supportive atmosphere. Cleared my prelims while staying here!" },
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Residents" },
  { icon: Home, value: "50+", label: "Furnished Rooms" },
  { icon: Award, value: "4.9★", label: "Average Rating" },
  { icon: Clock, value: "10+", label: "Years of Trust" },
];

export default function HomePage() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sliding backgrounds */}
        <AnimatePresence>
          <motion.div
            key={currentImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentImg]})` }}
          />
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImg(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImg ? "w-8 bg-white" : "w-3 bg-white/40"}`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-rose-900/40 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Established 2015 · Jaipur, Rajasthan
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Safe Home<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-300">
                Away From Home
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-xl"
            >
              Safe, comfortable & affordable accommodation for girls at Tonk Road, Jaipur — with AC rooms, meals, WiFi & 24/7 security.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Link href="/booking" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-2xl text-base font-semibold shadow-xl shadow-rose-500/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-500/40 transition-all duration-200">
                Book Your Room <ArrowRight size={18} />
              </Link>
              <Link href="/rooms" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 backdrop-blur-sm border border-white/30 text-white rounded-2xl text-base font-semibold hover:bg-white/25 transition-all duration-200">
                View Rooms
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {["24/7 Security", "Free WiFi", "Meals Included", "AC Rooms"].map((item) => (
                <span key={item} className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-sm">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full" />{item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.75 }}
          className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/15"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-rose-300" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl leading-tight">{value}</p>
                    <p className="text-white/70 text-xs">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-50 text-rose-600 text-sm font-semibold mb-4">Why Navodaya?</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need for a<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600"> Perfect Stay</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
              We've thought of everything so you can focus on what matters most.
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map(({ icon: Icon, title, desc, color }) => (
              <motion.div key={title} variants={fadeUp} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}
                className="group p-7 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300"
              >
                <div className={`w-[52px] h-[52px] rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ROOMS PREVIEW */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold mb-4">Our Rooms</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Comfortable Accommodation<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600"> Designed for You</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { badge: "Most Popular", badgeColor: "bg-rose-500", title: "Double Sharing AC Room", price: "₹8,000", features: ["Air Conditioning", "Study Table & Chair", "Wardrobe", "Free WiFi", "Balcony Access", "24/7 Hot Water"] },
              { badge: "Best Value", badgeColor: "bg-amber-500", title: "Double Sharing Cooler Room", price: "₹7,500", features: ["Desert Air Cooler", "Study Table & Chair", "Wardrobe", "Free WiFi", "Fan", "24/7 Hot Water"] },
            ].map((room) => (
              <motion.div key={room.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} whileHover={{ y: -6 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                <div className="relative h-56 overflow-hidden bg-rose-100">
                  <img src={`${import.meta.env.BASE_URL}images/gallery/double-room.png`} alt={room.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className={`absolute top-4 left-4 px-3 py-1 ${room.badgeColor} text-white text-xs font-bold rounded-full`}>{room.badge}</span>
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{room.title}</h3>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-rose-600">{room.price}</p>
                      <p className="text-slate-400 text-xs">/month</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link href="/booking" className="flex-1 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl text-sm font-semibold text-center shadow-md hover:-translate-y-0.5 transition-transform duration-200">
                      Book This Room
                    </Link>
                    <Link href="/rooms" className="py-3 px-4 border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:border-rose-300 hover:text-rose-600 transition-colors duration-200">
                      Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-20 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Happy Residents", sub: "Since 2015" },
              { value: "50+", label: "Furnished Rooms", sub: "AC & Non-AC" },
              { value: "4.9/5", label: "Average Rating", sub: "Google Reviews" },
              { value: "24/7", label: "Security Guard", sub: "Always on duty" },
            ].map(({ value, label, sub }) => (
              <motion.div key={label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-white mb-1">{value}</p>
                <p className="text-white/90 font-semibold mb-1">{label}</p>
                <p className="text-white/60 text-sm">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-50 text-rose-600 text-sm font-semibold mb-4">Resident Stories</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What Our Residents Say</h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-7"
          >
            {testimonials.map(({ name, role, stars, text }) => (
              <motion.div key={name} variants={fadeUp} whileHover={{ y: -5 }}
                className="p-7 bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl border border-rose-100/80 hover:border-rose-200 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {Array.from({ length: stars }).map((_, i) => <Star key={i} size={16} className="text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-5 italic">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{name}</p>
                    <p className="text-slate-500 text-xs">{role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-300 text-sm font-semibold mb-6 border border-rose-500/30">
              Limited Rooms Available
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Make Navodaya<br />Your Home?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Join 500+ satisfied residents. Book now and secure your safe, comfortable space in Jaipur.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/booking" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-2xl text-base font-semibold shadow-xl shadow-rose-500/30 hover:-translate-y-1 hover:shadow-2xl transition-all duration-200">
                Book Your Room Now <ArrowRight size={18} />
              </Link>
              <a href="tel:+919887066664" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl text-base font-semibold shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-200">
                <Phone size={18} /> Call Us Now
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-sm">
              <MapPin size={14} />
              <span>46, Tonk Rd, opp. Epip Gate, Sitapura, Jaipur — 302022</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
