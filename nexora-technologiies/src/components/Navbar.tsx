"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 navbar-mobile ${
        isScrolled ? "navbar-scrolled py-3" : "bg-transparent py-6"
      }`}
      style={{
        background: isScrolled ? "rgba(18, 40, 59, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        boxShadow: isScrolled ? "0 10px 30px rgba(0, 0, 0, 0.08)" : "none"
      }}
    >
      <div className="container flex items-center justify-between" style={{ padding: "0 30px" }}>
        <Link href="/">
          <Image
            src="/photos/nexoraLogo.png"
            alt="Nexora"
            width={250}
            height={90}
            className="w-auto"
            style={{ height: isScrolled ? "60px" : "80px" }}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <Link href="/contact" className="hidden xl:flex btn-primary navbar-get-started">
          Get Started
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 lg:hidden mobile-menu-panel"
              style={{
                background: "linear-gradient(180deg, rgba(15, 35, 50, 0.98) 0%, rgba(18, 40, 59, 0.98) 100%)",
                backdropFilter: "blur(24px)",
                borderLeft: "1px solid rgba(6, 182, 212, 0.2)",
                boxShadow: "-10px 0 40px rgba(0, 0, 0, 0.3)"
              }}
            >
              {/* Menu Header */}
              <div className="flex items-center justify-center p-6 border-b border-white/5">
                <Image
                  src="/photos/nexoraLogo.png"
                  alt="Nexora"
                  width={150}
                  height={54}
                  className="w-auto h-11"
                />
              </div>

              {/* Menu Items */}
              <div className="flex flex-col items-center px-6 py-8 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, type: "spring", stiffness: 300, damping: 25 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="mobile-nav-link"
                    >
                      <span className="font-medium text-base relative z-10">{link.label}</span>
                      <div className="mobile-nav-link-bg" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-cta-button"
                  >
                    Get Started
                  </Link>
                  
                  <div className="text-center space-y-2">
                    <p className="text-white/50 text-xs font-medium">CONTACT US</p>
                    <p className="text-white/70 text-sm">tiisomabogwane81@gmail.com</p>
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
