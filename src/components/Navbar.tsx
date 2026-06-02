import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/rooms", label: "Rooms" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHero = location === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-slate-200/50"
          : isHero
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-lg shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-200 group-hover:shadow-rose-300 transition-all duration-200 group-hover:scale-105">
              <span className="text-white font-bold text-lg leading-none">N</span>
            </div>
            <div className="hidden sm:block">
              <p className={`font-bold text-sm leading-tight tracking-tight transition-colors ${scrolled || !isHero ? "text-slate-900" : "text-white"}`}>
                Navodaya Girls Hostel
              </p>
              <p className={`text-xs leading-tight transition-colors ${scrolled || !isHero ? "text-rose-500" : "text-rose-200"}`}>
                Jaipur, Rajasthan
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location === link.href
                    ? "text-rose-600 bg-rose-50"
                    : scrolled || !isHero
                    ? "text-slate-600 hover:text-rose-600 hover:bg-rose-50"
                    : "text-white/90 hover:text-white hover:bg-white/15"
                }`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-rose-500 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919887066664"
              className={`hidden md:flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled || !isHero ? "text-slate-600 hover:text-rose-600" : "text-white/80 hover:text-white"
              }`}
            >
              <Phone size={14} />
              <span>+91 98870 66664</span>
            </a>
            <Link
              href="/booking"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-rose-200/60 hover:shadow-rose-300/60 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Now
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled || !isHero ? "text-slate-600 hover:bg-rose-50" : "text-white hover:bg-white/15"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location === link.href
                      ? "bg-rose-50 text-rose-600 font-semibold"
                      : "text-slate-700 hover:bg-rose-50 hover:text-rose-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="tel:+919887066664"
                  className="flex items-center gap-2 px-4 py-3 text-sm text-slate-600 font-medium rounded-xl hover:bg-slate-50"
                >
                  <Phone size={16} className="text-rose-500" />
                  +91 98870 66664
                </a>
                <Link
                  href="/booking"
                  className="px-4 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl text-sm font-semibold text-center shadow-md"
                >
                  Book Your Room Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
