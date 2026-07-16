"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

const services = ["Software Development", "Web Development", "IT Training", "Social Media Management", "IT Consulting", "Network Solutions"];
const company = ["About Us", "Portfolio", "Contact", "Careers", "Blog", "Privacy Policy"];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ background: "linear-gradient(180deg, #071526 0%, #05070C 100%)", borderTop: "1px solid rgba(0,180,255,0.1)", position: "relative", overflow: "hidden" }}>
      {/* Top accent line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #00B4FF, transparent)" }} />

      {/* Main content */}
      <div className="container" style={{ padding: "80px 24px 40px" }}>
        <div className="footer-grid-responsive">
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ marginBottom: "24px" }}>
              <Image src="/photos/nexoraLogo.png" alt="Nexora Technologies" width={180} height={65} style={{ height: "65px", width: "auto", filter: "brightness(1.1)" }} />
            </div>
            <p style={{ color: "rgba(183,195,208,0.65)", fontSize: "14px", lineHeight: 1.7, marginBottom: "28px" }}>
              Engineering intelligent digital experiences for modern businesses. Secure, scalable and AI-powered solutions.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { href: "https://wa.me/27848744120", icon: <WhatsAppIcon />, color: "#25d366", label: "WhatsApp" },
                { href: "#", icon: <LinkedInIcon />, color: "#0077b5", label: "LinkedIn" },
                { href: "#", icon: <FacebookIcon />, color: "#1877f2", label: "Facebook" },
              ].map(({ href, icon, color, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "40px", height: "40px",
                    borderRadius: "10px",
                    background: "rgba(0,180,255,0.06)",
                    border: "1px solid rgba(0,180,255,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(183,195,208,0.6)",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = color; e.currentTarget.style.background = `${color}18`; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(183,195,208,0.6)"; e.currentTarget.style.borderColor = "rgba(0,180,255,0.12)"; e.currentTarget.style.background = "rgba(0,180,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="footer-section">
            <h3 className="footer-heading">Solutions</h3>
            <ul className="footer-links">
              {services.map((item) => (
                <li key={item}>
                  <Link href="/services" className="footer-link">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/portfolio" className="footer-link">Case Studies</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
              <li><Link href="#" className="footer-link">Careers</Link></li>
              <li><Link href="#" className="footer-link">Blog</Link></li>
              <li><Link href="#" className="footer-link">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section footer-contact">
            <h3 className="footer-heading">Get In Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-text">
                  <span className="contact-label">Address</span>
                  <span className="contact-value">Willow Park Manor, Pretoria, 0184, South Africa</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <a href="tel:+27848744120" className="contact-value contact-link">+27 84 874 4120</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <a href="mailto:nexoratechnologiies@gmail.com" className="contact-value contact-link">nexoratechnologiies@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-text">
                  <span className="contact-label">Business Hours</span>
                  <span className="contact-value">Mon – Fri: 9:00 AM – 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(0,180,255,0.08)", padding: "20px 0" }}>
        <div className="container" style={{ padding: "0 24px" }}>
          <div className="footer-bottom-content">
            <p style={{ color: "rgba(183,195,208,0.4)", fontSize: "13px", margin: 0 }}>
              © {new Date().getFullYear()} Nexora Technologies. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
                <Link key={item} href="#" style={{ color: "rgba(183,195,208,0.4)", fontSize: "13px", textDecoration: "none", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#00B4FF"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(183,195,208,0.4)"; }}
                >
                  {item}
                </Link>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{
                width: "36px", height: "36px",
                borderRadius: "8px",
                background: "rgba(0,180,255,0.08)",
                border: "1px solid rgba(0,180,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#00B4FF",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,180,255,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,180,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
