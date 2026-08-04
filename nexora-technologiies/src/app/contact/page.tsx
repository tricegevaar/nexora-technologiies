"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Message sent! We'll get back to you soon.", { duration: 4000 });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send. Please try again.");
      }
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactItems = [
    { icon: MapPin, label: "Address", value: "Willow Park Manor, Pretoria, 0184, South Africa" },
    { icon: Phone, label: "Phone", value: "+27 84 874 4120", href: "tel:+27848744120" },
    { icon: Mail, label: "Email", value: "nexoratechnologiies@gmail.com", href: "mailto:nexoratechnologiies@gmail.com" },
    { icon: Clock, label: "Business Hours", value: "Mon – Fri: 9:00 AM – 5:00 PM" },
  ];

  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "160px 0 80px",
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
          background: "#0A0A0B",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ opacity: [0.15, 0.28, 0.15] }}
            transition={{ duration: 9, repeat: Infinity }}
            style={{ position: "absolute", top: "10%", left: "10%", width: "50%", height: "65%", background: "radial-gradient(ellipse, rgba(201,168,76,0.1) 0%, transparent 70%)", filter: "blur(60px)" }}
          />
          <motion.div
            animate={{ opacity: [0.08, 0.16, 0.08] }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            style={{ position: "absolute", bottom: "5%", right: "10%", width: "45%", height: "55%", background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)", filter: "blur(70px)" }}
          />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(201,168,76,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.015) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        </div>

        <div className="container relative z-10" style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.22)", padding: "5px 14px", borderRadius: "50px", marginBottom: "28px" }}
            >
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A84C", boxShadow: "0 0 6px #C9A84C", display: "inline-block" }} />
              <span style={{ color: "#C9A84C", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Get In Touch</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, color: "#F4F0E8", lineHeight: 1.1, marginBottom: "22px", letterSpacing: "-0.03em", fontFamily: "'Inter', sans-serif" }}
            >
              Let&apos;s Build Something{" "}
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #F0C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Extraordinary
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
              style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(220,210,190,0.6)", maxWidth: "560px", margin: "0 auto" }}
            >
              Ready to transform your business? Get in touch for a free consultation and let&apos;s discuss how we can bring your vision to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ background: "#111114", padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "36px" }}>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div style={{ background: "#16161A", border: "1px solid rgba(201,168,76,0.1)", borderRadius: "16px", padding: "40px 32px" }}>
                {/* Top accent */}
                <div style={{ height: "2px", background: "linear-gradient(90deg, #A07830, #C9A84C, transparent)", borderRadius: "2px", marginBottom: "28px" }} />

                <h2 style={{ color: "#F4F0E8", fontWeight: 700, fontSize: "1.15rem", marginBottom: "28px", fontFamily: "'Inter', sans-serif" }}>Send a Message</h2>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
                    <div>
                      <label style={{ display: "block", color: "rgba(220,210,190,0.5)", fontSize: "0.8rem", marginBottom: "8px", fontWeight: 500 }}>Full Name *</label>
                      <input
                        type="text" required value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input" placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "rgba(220,210,190,0.5)", fontSize: "0.8rem", marginBottom: "8px", fontWeight: 500 }}>Email Address *</label>
                      <input
                        type="email" required value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input" placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", color: "rgba(220,210,190,0.5)", fontSize: "0.8rem", marginBottom: "8px", fontWeight: 500 }}>Subject</label>
                    <input
                      type="text" value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input" placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", color: "rgba(220,210,190,0.5)", fontSize: "0.8rem", marginBottom: "8px", fontWeight: 500 }}>Message *</label>
                    <textarea
                      required rows={5} value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input resize-none" placeholder="Tell us about your project..."
                      style={{ resize: "none" }}
                    />
                  </div>

                  <button
                    type="submit" disabled={isLoading}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                      padding: "15px", borderRadius: "8px",
                      background: isLoading ? "rgba(201,168,76,0.5)" : "#C9A84C",
                      color: "#0A0A0B", fontWeight: 700, fontSize: "0.9rem",
                      border: "none", cursor: isLoading ? "not-allowed" : "pointer",
                      transition: "all 0.3s ease", fontFamily: "Inter, sans-serif",
                    }}
                    onMouseEnter={(e) => { if (!isLoading) { e.currentTarget.style.background = "#F0C060"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(201,168,76,0.35)"; } }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = isLoading ? "rgba(201,168,76,0.5)" : "#C9A84C"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    {isLoading ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {/* Contact card */}
              <div style={{ background: "#16161A", border: "1px solid rgba(201,168,76,0.1)", borderRadius: "16px", padding: "32px" }}>
                <h3 style={{ color: "#F4F0E8", fontWeight: 700, fontSize: "1rem", marginBottom: "28px", fontFamily: "'Inter', sans-serif" }}>Contact Information</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                  {contactItems.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                      <div style={{ width: "38px", height: "38px", minWidth: "38px", borderRadius: "9px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={15} style={{ color: "#C9A84C" }} />
                      </div>
                      <div>
                        <p style={{ color: "rgba(220,210,190,0.35)", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{label}</p>
                        {href ? (
                          <a href={href} style={{ color: "rgba(220,210,190,0.7)", fontSize: "0.85rem", lineHeight: 1.5, textDecoration: "none", transition: "color 0.3s ease" }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A84C"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(220,210,190,0.7)"; }}
                          >
                            {value}
                          </a>
                        ) : (
                          <p style={{ color: "rgba(220,210,190,0.7)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response card */}
              <div style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(13,13,16,0.8))",
                border: "1px solid rgba(201,168,76,0.18)",
                borderRadius: "16px", padding: "28px", textAlign: "center",
              }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "10px" }}>⚡</div>
                <h4 style={{ color: "#F4F0E8", fontWeight: 600, fontSize: "0.95rem", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>Fast Response</h4>
                <p style={{ color: "rgba(220,210,190,0.5)", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>
                  We typically respond within 24 hours on business days.
                </p>
              </div>

              {/* WhatsApp card */}
              <a
                href="https://wa.me/27848744120?text=Hi%20Nexora!%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "14px",
                  background: "rgba(37,211,102,0.05)",
                  border: "1px solid rgba(37,211,102,0.18)",
                  borderRadius: "16px", padding: "20px 24px",
                  textDecoration: "none", transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(37,211,102,0.09)"; e.currentTarget.style.borderColor = "rgba(37,211,102,0.35)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(37,211,102,0.05)"; e.currentTarget.style.borderColor = "rgba(37,211,102,0.18)"; }}
              >
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(37,211,102,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" fill="#25d366" width="20" height="20">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ color: "#25d366", fontSize: "0.875rem", fontWeight: 600, margin: "0 0 2px", fontFamily: "Inter, sans-serif" }}>Chat on WhatsApp</p>
                  <p style={{ color: "rgba(220,210,190,0.4)", fontSize: "0.78rem", margin: 0 }}>Typically replies in minutes</p>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
