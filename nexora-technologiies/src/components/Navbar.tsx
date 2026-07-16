"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Code, Globe, Headphones, Network } from "lucide-react";

const solutions = [
  { href: "/services", label: "All Solutions", desc: "View complete service offering" },
  { href: "/services", label: "Custom Software", desc: "Tailored business applications", icon: Code },
  { href: "/services", label: "Web Development", desc: "Modern, conversion-focused sites", icon: Globe },
  { href: "/services", label: "IT Consulting", desc: "Strategic technology advisory", icon: Headphones },
  { href: "/services", label: "Network Solutions", desc: "Secure infrastructure design", icon: Network },
];

const navLinks = [
  { href: "/", label: "Home" },
  { label: "Solutions", href: "/services", hasSub: true },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const openDropdown = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setShowDropdown(true);
  };

  const closeDropdown = () => {
    timerRef.current = setTimeout(() => setShowDropdown(false), 120);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
      style={{
        background: isScrolled ? "rgba(5,7,12,0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(24px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(0,180,255,0.08)" : "none",
        boxShadow: isScrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        transition: "all 0.4s ease",
        padding: isScrolled ? "10px 0" : "18px 0",
      }}
    >
      <div className="container" style={{ padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ flexShrink: 0 }}>
          <Image
            src="/photos/nexLogo.png"
            alt="Nexora Technologies"
            width={180}
            height={65}
            priority
            style={{ height: isScrolled ? "52px" : "64px", width: "auto", transition: "height 0.3s ease" }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.hasSub ? (
              <div
                key={link.label}
                ref={dropdownRef}
                style={{ position: "relative" }}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button
                  style={{
                    display: "flex", alignItems: "center", gap: "4px",
                    color: showDropdown ? "white" : "rgba(183,195,208,0.75)",
                    fontSize: "0.875rem", fontWeight: 500,
                    background: "none", border: "none", cursor: "pointer",
                    transition: "color 0.2s ease",
                    padding: "4px 0",
                  }}
                >
                  {link.label}
                  <ChevronDown
                    size={13}
                    style={{ transition: "transform 0.2s ease", transform: showDropdown ? "rotate(180deg)" : "rotate(0)" }}
                  />
                </button>

                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                      style={{
                        position: "absolute",
                        top: "calc(100% + 12px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "280px",
                        background: "rgba(5,7,12,0.98)",
                        border: "1px solid rgba(0,180,255,0.15)",
                        borderRadius: "16px",
                        overflow: "hidden",
                        boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,180,255,0.05)",
                        backdropFilter: "blur(20px)",
                      }}
                    >
                      {/* Dropdown header */}
                      <div style={{ padding: "14px 16px 10px", borderBottom: "1px solid rgba(0,180,255,0.08)" }}>
                        <p style={{ color: "rgba(183,195,208,0.4)", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                          Our Solutions
                        </p>
                      </div>
                      {solutions.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          onClick={() => setShowDropdown(false)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "12px 16px",
                            textDecoration: "none",
                            borderBottom: i < solutions.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                            transition: "background 0.2s ease",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,180,255,0.06)"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                        >
                          {item.icon && (
                            <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(0,180,255,0.1)", border: "1px solid rgba(0,180,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              <item.icon size={14} style={{ color: "#00B4FF" }} />
                            </div>
                          )}
                          <div>
                            <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.875rem", fontWeight: 500 }}>{item.label}</div>
                            <div style={{ color: "rgba(183,195,208,0.45)", fontSize: "0.75rem", marginTop: "1px" }}>{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                style={{ color: "rgba(183,195,208,0.75)", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", transition: "color 0.2s ease", position: "relative", padding: "4px 0" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "white"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(183,195,208,0.75)"; }}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-2 text-white font-semibold text-sm"
            style={{ padding: "11px 22px", borderRadius: "10px", background: "linear-gradient(135deg, #0B4DFF, #00B4FF)", boxShadow: "0 4px 20px rgba(11,77,255,0.3)", transition: "all 0.3s ease", textDecoration: "none" }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 28px rgba(11,77,255,0.5)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(11,77,255,0.3)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Book Consultation
          </Link>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden"
            style={{ padding: "10px", background: "rgba(0,180,255,0.08)", border: "1px solid rgba(0,180,255,0.18)", borderRadius: "10px", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s ease" }}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/70 z-40 lg:hidden" style={{ backdropFilter: "blur(6px)" }} onClick={() => setIsMobileOpen(false)} />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 h-full z-50 lg:hidden"
              style={{ width: "300px", maxWidth: "85vw", background: "linear-gradient(180deg, #071526 0%, #05070C 100%)", borderLeft: "1px solid rgba(0,180,255,0.12)", boxShadow: "-10px 0 60px rgba(0,0,0,0.6)" }}
            >
              {/* Header */}
              <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(0,180,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Image src="/photos/nexLogo.png" alt="Nexora" width={130} height={48} style={{ height: "44px", width: "auto" }} />
                <button onClick={() => setIsMobileOpen(false)} style={{ background: "none", border: "none", color: "rgba(183,195,208,0.5)", cursor: "pointer", padding: "4px" }}>
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: "4px" }}>
                {navLinks.map((link, i) => (
                  <motion.div key={link.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                    <Link
                      href={link.href || "/services"}
                      onClick={() => setIsMobileOpen(false)}
                      style={{ display: "block", padding: "13px 16px", color: "rgba(183,195,208,0.8)", fontSize: "0.95rem", fontWeight: 500, textDecoration: "none", borderRadius: "10px", transition: "all 0.2s ease" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,180,255,0.07)"; e.currentTarget.style.color = "white"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(183,195,208,0.8)"; }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px", borderTop: "1px solid rgba(0,180,255,0.08)" }}>
                <Link href="/contact" onClick={() => setIsMobileOpen(false)} style={{ display: "block", textAlign: "center", padding: "14px", background: "linear-gradient(135deg, #0B4DFF, #00B4FF)", color: "white", fontWeight: 600, fontSize: "0.9rem", borderRadius: "10px", textDecoration: "none", boxShadow: "0 4px 20px rgba(11,77,255,0.3)" }}>
                  Book Consultation
                </Link>
                <p style={{ textAlign: "center", marginTop: "12px", color: "rgba(183,195,208,0.35)", fontSize: "0.75rem" }}>nexoratechnologiies@gmail.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
