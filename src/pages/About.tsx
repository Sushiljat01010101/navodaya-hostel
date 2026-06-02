import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, Heart, Users, Star, CheckCircle, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const values = [
  { icon: Shield, title: "Safety First", desc: "Every decision puts the security and safety of our residents at the forefront.", color: "from-emerald-400 to-green-500" },
  { icon: Heart, title: "Feels Like Home", desc: "We create a warm, caring atmosphere where girls feel loved, comfortable and at peace.", color: "from-rose-400 to-pink-500" },
  { icon: Users, title: "Community", desc: "A supportive community of students and professionals who grow together.", color: "from-violet-400 to-purple-500" },
  { icon: Star, title: "Quality Always", desc: "From food to facilities, we maintain the highest standards without compromise.", color: "from-amber-400 to-orange-500" },
  { icon: CheckCircle, title: "Transparency", desc: "Clear pricing, honest communication, and no hidden charges — ever.", color: "from-blue-400 to-cyan-500" },
  { icon: Heart, title: "Empowerment", desc: "We enable girls to pursue their ambitions freely and independently.", color: "from-pink-400 to-rose-500" },
];

export default function About() {
  return (
    <div>
      <section className="relative pt-32 pb-20 bg-cover bg-center" style={{ backgroundImage: "url(/images/gallery/exterior.png)" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-rose-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white/90 text-sm font-medium mb-4 backdrop-blur-sm border border-white/20">Our Story</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>About Navodaya</h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">A decade of trust, safety, and care for girls in Jaipur</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-rose-50 text-rose-600 text-sm font-semibold mb-4">Est. 2015</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                A Home Built on<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Trust & Care</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Navodaya Girls Hostel was founded in 2015 with a simple but powerful vision — to create a space where girls from across Rajasthan and India could pursue their dreams without worrying about safety, meals, or comfort.</p>
                <p>Located at 46, Tonk Road, opposite EPIP Gate in Sitapura, Jaipur, we are strategically positioned near major educational institutions and IT companies, making us the ideal home for students and working professionals alike.</p>
                <p>Over the past decade, more than 500 girls have called Navodaya their home. We take immense pride in maintaining a family-like environment where every resident is known by name and cared for personally.</p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-semibold shadow-lg shadow-rose-200 hover:-translate-y-0.5 transition-all duration-200">
                Get in Touch <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-2 gap-5">
              {[
                { img: "/images/gallery/double-room.png", label: "Comfortable Rooms" },
                { img: "/images/gallery/study-room.png", label: "Study Room" },
                { img: "/images/gallery/dining-hall.png", label: "Dining Hall" },
                { img: "/images/gallery/garden.png", label: "Garden" },
              ].map(({ img, label }) => (
                <div key={label} className="relative aspect-square rounded-2xl overflow-hidden group bg-rose-50">
                  <img src={img} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-white text-sm font-semibold">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-rose-500 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[{ value: "2015", label: "Year Founded" }, { value: "500+", label: "Girls Served" }, { value: "50+", label: "Rooms Available" }, { value: "4.9★", label: "Google Rating" }].map(({ value, label }) => (
              <motion.div key={label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
                <p className="text-4xl font-bold text-white mb-1">{value}</p>
                <p className="text-white/80 text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              { title: "Our Mission", icon: "🎯", text: "To provide every girl with a safe, clean, and nurturing environment where she can focus on her goals — academic, professional, or personal — without compromise on comfort or security.", bg: "from-rose-50 to-pink-50", border: "border-rose-100" },
              { title: "Our Vision", icon: "🌟", text: "To be the most trusted name in girls' accommodation across Rajasthan — where families can send their daughters with complete confidence, knowing they will be safe, cared for, and inspired to thrive.", bg: "from-violet-50 to-purple-50", border: "border-violet-100" },
            ].map(({ title, icon, text, bg, border }) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className={`p-8 rounded-3xl bg-gradient-to-br ${bg} border ${border}`}
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Core Values</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map(({ icon: Icon, title, desc, color }) => (
              <motion.div key={title} variants={fadeUp} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-100">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Family Today</h2>
            <p className="text-slate-400 mb-8">Rooms fill up fast. Secure yours before it's too late.</p>
            <Link href="/booking" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-2xl font-semibold shadow-xl shadow-rose-900/30 hover:-translate-y-1 transition-all duration-200">
              Book Your Room <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
