import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, Heart } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/rooms", label: "Our Rooms" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/booking", label: "Book Now" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-900/50">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Navodaya Girls Hostel</p>
                <p className="text-rose-400 text-xs">Est. 2015 · Jaipur</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-5">
              Providing safe, comfortable, and affordable accommodation for girls in Jaipur since 2015. Your home away from home.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-rose-500 flex items-center justify-center transition-colors duration-200" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-pink-500 flex items-center justify-center transition-colors duration-200" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://wa.me/919887066664" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-green-500 flex items-center justify-center transition-colors duration-200" aria-label="WhatsApp">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-rose-400 text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-rose-500/0 group-hover:bg-rose-500 rounded-full transition-colors duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Accommodation</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Double Sharing AC Room — ₹8,000/mo</li>
              <li>Double Sharing Cooler Room — ₹7,500/mo</li>
              <li className="pt-2 text-slate-500 text-xs">Includes: WiFi · Meals · Laundry</li>
              <li className="text-slate-500 text-xs">Security · Study Room · Gym</li>
            </ul>
            <Link href="/booking" className="inline-flex mt-5 px-5 py-2.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-rose-900/30 hover:-translate-y-0.5 transition-transform duration-200">
              Book Your Room
            </Link>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919887066664" className="flex items-start gap-3 text-sm text-slate-400 hover:text-rose-400 transition-colors">
                  <Phone size={16} className="mt-0.5 text-rose-500 flex-shrink-0" />
                  <span>+91-9887066664</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@navodayagirlshostel.com" className="flex items-start gap-3 text-sm text-slate-400 hover:text-rose-400 transition-colors">
                  <Mail size={16} className="mt-0.5 text-rose-500 flex-shrink-0" />
                  <span className="break-all">info@navodayagirlshostel.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={16} className="mt-0.5 text-rose-500 flex-shrink-0" />
                <span>46, Tonk Rd, opp. Epip Gate,<br />Mahaveer Colony, Sitapura,<br />Jaipur, Rajasthan 302022</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Navodaya Girls Hostel. All rights reserved.</p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-rose-500 fill-rose-500" /> for the safety of women in Jaipur
          </p>
        </div>
      </div>
    </footer>
  );
}
