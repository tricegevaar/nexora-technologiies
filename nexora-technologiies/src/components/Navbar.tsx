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
  { label: "Services", href: "/services", hasSub: true },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
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
        background: isScrolled ? "rgba(10,10,11,0.97)" : "transparent",
        backdropFilter: isScrolled ? "blur(24px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(201,168,76,0.1)" : "none",
        boxShadow: isScrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
        transition: "all 0.4s ease",
        padding: isScrolled ? "6px 0" : "14px 0",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ flexShrink: 0 }}>
          <Image
            src="/photos/nexLogo.png"
            alt="Nexora Technologies"
            width={220}
            height={80}
            priority
            style={{ height: isScrolled ? "70px" : "84px", width: "auto", transition: "height 0.3s ease" }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center" style={{ gap: "32px" }}>
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
                    color: showDropdown ? "#C9A84C" : "rgba(220,210,190,0.7)",
                    fontSize: "0.875rem", fontWeight: 500,
                    background: "none", border: "none", cursor: "pointer",
                    transition: "color 0.2s ease",
                    padding: "4px 0",
                    fontFamily: "Inter, sans-serif",
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
                        top: "calc(100% + 14px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "280px",
                        background: "#111114",
                        border: "1px solid rgba(201,168,76,0.15)",
                        borderRadius: "14px",
                        overflow: "hidden",
                        boxShadow: "0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.05)",
                        backdropFilter: "blur(20px)",
                      }}
                    >
                      <div style={{ padding: "12px 16px 10px", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
                        <p style={{ color: "rgba(201,168,76,0.45)", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
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
                            padding: "11px 16px",
                            textDecoration: "none",
                            borderBottom: i < solutions.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                            transition: "background 0.2s ease",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.06)"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                        >
                          {item.icon && (
                            <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              <item.icon size={13} style={{ color: "#C9A84C" }} />
                            </div>
                          )}
                          <div>
                            <div style={{ color: "rgba(244,240,232,0.85)", fontSize: "0.85rem", fontWeight: 500 }}>{item.label}</div>
                            <div style={{ color: "rgba(220,210,190,0.4)", fontSize: "0.75rem", marginTop: "1px" }}>{item.desc}</div>
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
                style={{ color: "rgba(220,210,190,0.7)", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", transition: "color 0.2s ease", padding: "4px 0" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A84C"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(220,210,190,0.7)"; }}
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
            className="hidden lg:flex items-center gap-2 font-semibold text-sm"
            style={{
              padding: "10px 22px", borderRadius: "8px",
              background: "transparent", color: "#C9A84C",
              border: "1px solid #C9A84C",
              boxShadow: "none", transition: "all 0.3s ease", textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#C9A84C";
              e.currentTarget.style.color = "#0A0A0B";
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(201,168,76,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#C9A84C";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Book a Consultation
          </Link>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden inline-flex items-center justify-center"
            style={{ padding: "9px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.22)", borderRadius: "8px", color: "#C9A84C", cursor: "pointer", transition: "all 0.2s ease" }}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/75 z-40 lg:hidden" style={{ backdropFilter: "blur(6px)" }} onClick={() => setIsMobileOpen(false)} />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 h-full z-50 lg:hidden"
              style={{ width: "300px", maxWidth: "85vw", background: "#111114", borderLeft: "1px solid rgba(201,168,76,0.12)", boxShadow: "-10px 0 60px rgba(0,0,0,0.7)" }}
            >
              {/* Header */}
              <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(201,168,76,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Image src="/photos/nexLogo.png" alt="Nexora" width={130} height={48} style={{ height: "44px", width: "auto" }} />
                <button onClick={() => setIsMobileOpen(false)} style={{ background: "none", border: "none", color: "rgba(201,168,76,0.5)", cursor: "pointer", padding: "4px" }}>
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <div style={{ padding: "16px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                {navLinks.map((link, i) => (
                  <motion.div key={link.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                    <Link
                      href={link.href || "/services"}
                      onClick={() => setIsMobileOpen(false)}
                      className="mobile-nav-link"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
                <Link href="/contact" onClick={() => setIsMobileOpen(false)} className="mobile-cta-button">
                  Book a Consultation
                </Link>
                <p style={{ textAlign: "center", marginTop: "12px", color: "rgba(220,210,190,0.3)", fontSize: "0.75rem" }}>nexoratechnologiies@gmail.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
