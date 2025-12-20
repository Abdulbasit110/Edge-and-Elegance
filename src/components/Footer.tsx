import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-12 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="text-2xl font-serif tracking-[0.2em] mb-8 block">
              EDGE & <span className="italic text-neutral-400">ELEGANCE</span>
            </Link>
            <p className="text-neutral-400 font-light leading-relaxed mb-10 max-w-sm">
              Defining modern luxury through curated accessories. We believe 
              in the power of detail to transform identity.
            </p>
            <div className="flex gap-6">
              {[
                { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/ele.gance789?igsh=MW5rbzQ3ODNob2xyag%3D%3D&utm_source=qr" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Facebook className="w-5 h-5" />, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, color: "#fff" }}
                  className="text-neutral-500 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-8 text-neutral-500">
                Collections
              </h4>
              <ul className="space-y-4">
                {["Men", "Women", "New Arrivals"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sm font-light text-neutral-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-8 text-neutral-500">
                Support
              </h4>
              <ul className="space-y-4">
                {["Contact", "Shipping", "Returns", "FAQ"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="text-sm font-light text-neutral-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-8 text-neutral-500">
              The Insider
            </h4>
            <p className="text-sm font-light text-neutral-400 mb-6">
              Subscribe to receive updates on new collections and exclusive previews.
            </p>
            <div className="relative group">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-0 border-b border-neutral-800 rounded-none px-0 py-6 text-sm focus-visible:ring-0 focus-visible:border-white transition-colors placeholder:text-neutral-700"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 group-hover:translate-x-1 transition-transform">
                <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-medium">
            © {currentYear} Edge & Elegance. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                to="#"
                className="text-[10px] uppercase tracking-widest text-neutral-600 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
