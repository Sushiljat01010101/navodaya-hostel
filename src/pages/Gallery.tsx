import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };

type Photo = { src: string; title: string; category: string };

const photos: Photo[] = [
  { src: "/images/gallery/exterior.png", title: "Hostel Building", category: "Exterior" },
  { src: "/images/gallery/single-room.png", title: "Single Room", category: "Rooms" },
  { src: "/images/gallery/double-room.png", title: "Double Sharing Room", category: "Rooms" },
  { src: "/images/gallery/triple-room.png", title: "Triple Sharing Room", category: "Rooms" },
  { src: "/images/gallery/bathroom.png", title: "Modern Bathroom", category: "Rooms" },
  { src: "/images/gallery/study-room.png", title: "Study Room", category: "Common Areas" },
  { src: "/images/gallery/tv-lounge.png", title: "TV Lounge", category: "Common Areas" },
  { src: "/images/gallery/dining-hall.png", title: "Dining Hall", category: "Common Areas" },
  { src: "/images/gallery/kitchen.png", title: "Kitchen", category: "Common Areas" },
  { src: "/images/gallery/gym.png", title: "Gym / Fitness Area", category: "Facilities" },
  { src: "/images/gallery/laundry.png", title: "Laundry Room", category: "Facilities" },
  { src: "/images/gallery/security.png", title: "Security Desk", category: "Facilities" },
  { src: "/images/gallery/garden.png", title: "Garden & Terrace", category: "Exterior" },
];

const categories = ["All", "Rooms", "Common Areas", "Facilities", "Exterior"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<Photo | null>(null);

  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  return (
    <div>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(/images/gallery/exterior.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white/90 text-sm font-medium mb-4 backdrop-blur-sm border border-white/20">Photo Gallery</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>See Our Hostel</h1>
            <p className="text-white/80 text-lg">A visual tour of your future home</p>
          </motion.div>
        </div>
      </section>

      <section className="sticky top-[72px] z-30 bg-white/90 backdrop-blur-lg border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md shadow-rose-200"
                    : "bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-rose-600"
                }`}
              >
                {cat}
                <span className="ml-1.5 text-xs opacity-70">({cat === "All" ? photos.length : photos.filter((p) => p.category === cat).length})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div key={active} variants={stagger} initial="hidden" animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filtered.map((photo) => (
                <motion.div key={photo.src} variants={fadeUp} layout
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-rose-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelected(photo)}
                >
                  <img src={photo.src} alt={photo.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-semibold text-sm">{photo.title}</p>
                    <p className="text-white/70 text-xs">{photo.category}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn size={15} className="text-white" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.src} alt={selected.title} className="w-full max-h-[75vh] object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-lg">{selected.title}</p>
                <p className="text-white/70 text-sm">{selected.category}</p>
              </div>
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors">
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
