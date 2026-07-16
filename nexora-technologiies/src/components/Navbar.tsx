"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Solutions",
    href: "/services",
    dropdown: [
      { href: "/services", label: "All Solutions" },
      { href: "/services#software", label: "Custom Software" },
      { href: "/services#web", label: "Web Development" },
      { href: "/services#consulting", label: "IT Consulting" },
      { href: "/services#networking", label: "Network Solutions" },
    ],
  },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 navbar-mobile`}
      style={{
        background: isScrolled
          ? "rgba(5, 7, 12, 0.92)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(24px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(0, 180, 255, 0.1)" : "none",
        boxShadow: isScrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
        padding: isScrolled ? "12px 0" : "20px 0",
      }}
    >
      <div className="container flex items-center justify-between" style={{ padding: "0 30px" }}>
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/photos/nexoraLogo.png"
            alt="Nexora Technologies"
            width={200}
            height={72}
            className="w-auto"
            style={{ height: isScrolled ? "56px" : "70px", transition: "height 0.3s ease" }}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-white/70 hover:text-white text-sm font-medium transition-colors relative group">
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full" style={{ background: "#00B4FF" }} />
                </button>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-52 rounded-xl overflow-hidden"
                      style={{
                        background: "rgba(7, 21, 38, 0.97)",
                        border: "1px solid rgba(0, 180, 255, 0.15)",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                        backdropFilter: "blur(20px)",
                      }}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-white/60 hover:text-white transition-colors"
                          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full" style={{ background: "#00B4FF" }} />
              </Link>
            )
          )}
        </div>

        <Link
          href="/contact"
          className="hidden xl:flex items-center gap-2 font-semibold text-sm text-white"
          style={{
            padding: "12px 24px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #0B4DFF, #00B4FF)",
            boxShadow: "0 4px 20px rgba(11, 77, 255, 0.35)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 30px rgba(11, 77, 255, 0.5)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(11, 77, 255, 0.35)"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Book Consultation
        </Link>

        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden mobile-menu-button text-white hover:text-cyan-400 transition-all relative z-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 lg:hidden mobile-menu-panel"
              style={{
                background: "linear-gradient(180deg, #071526 0%, #05070C 100%)",
                backdropFilter: "blur(24px)",
                borderLeft: "1px solid rgba(0, 180, 255, 0.15)",
                boxShadow: "-10px 0 50px rgba(0,0,0,0.5)",
              }}
            >
              <div className="flex items-center justify-center p-6 border-b" style={{ borderColor: "rgba(0,180,255,0.1)" }}>
                <Image src="/photos/nexoraLogo.png" alt="Nexora" width={150} height={54} className="w-auto h-12" />
              </div>

              <div className="flex flex-col items-center px-6 py-8 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, type: "spring", stiffness: 300, damping: 25 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href || "/"}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="mobile-nav-link"
                    >
                      <span className="font-medium text-base">{link.label}</span>
                      <div className="mobile-nav-link-bg" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6" style={{ borderTop: "1px solid rgba(0,180,255,0.1)" }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-cta-button"
                  >
                    Book Consultation
                  </Link>
                  <div className="text-center mt-4">
                    <p className="text-white/40 text-xs">nexoratechnologiies@gmail.com</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
