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
      <section className="relative hero-mobile" style={{ padding: "160px 0 80px", minHeight: "70vh", display: "flex", alignItems: "center", background: "var(--dark-bg)", overflow: "hidden" }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #05070C 0%, #071526 60%, #05070C 100%)" }} />
          <motion.div animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 8, repeat: Infinity }} className="absolute" style={{ top: "10%", left: "10%", width: "50%", height: "60%", background: "radial-gradient(ellipse, rgba(11,77,255,0.15) 0%, transparent 70%)", filter: "blur(50px)" }} />
          <motion.div animate={{ opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} className="absolute" style={{ bottom: "10%", right: "10%", width: "45%", height: "55%", background: "radial-gradient(ellipse, rgba(0,180,255,0.1) 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,180,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,255,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 mb-8" style={{ background: "rgba(0,180,255,0.08)", border: "1px solid rgba(0,180,255,0.2)", padding: "6px 16px", borderRadius: "50px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1DE9FF", boxShadow: "0 0 8px #1DE9FF", display: "inline-block" }} />
              <span style={{ color: "#1DE9FF", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Get In Touch</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 800, color: "white", lineHeight: 1.1, marginBottom: "24px", letterSpacing: "-0.02em" }}
            >
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Extraordinary</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
              style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "rgba(183,195,208,0.8)", maxWidth: "580px", margin: "0 auto", fontWeight: 400 }}
            >
              Ready to transform your business with cutting-edge technology? Get in touch for a free consultation and let&apos;s discuss how we can bring your vision to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ background: "var(--dark-bg)", padding: "100px 0" }}>
        <div className="container">
          <div className="grid lg:grid-cols-5" style={{ gap: "40px" }}>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div style={{ background: "rgba(11,77,255,0.05)", border: "1px solid rgba(0,180,255,0.12)", borderRadius: "20px", padding: "40px 32px" }}>
                <h2 style={{ color: "white", fontWeight: 600, fontSize: "1.2rem", marginBottom: "28px" }}>Send a Message</h2>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div className="grid md:grid-cols-2" style={{ gap: "20px" }}>
                    <div>
                      <label style={{ display: "block", color: "rgba(183,195,208,0.6)", fontSize: "0.85rem", marginBottom: "8px" }}>Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="form-input" placeholder="Your name" />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "rgba(183,195,208,0.6)", fontSize: "0.85rem", marginBottom: "8px" }}>Email *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="form-input" placeholder="you@company.com" />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", color: "rgba(183,195,208,0.6)", fontSize: "0.85rem", marginBottom: "8px" }}>Subject</label>
                    <input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="form-input" placeholder="How can we help?" />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "rgba(183,195,208,0.6)", fontSize: "0.85rem", marginBottom: "8px" }}>Message *</label>
                    <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="form-input resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" disabled={isLoading} className="btn-primary w-full justify-center disabled:opacity-50" style={{ fontSize: "1rem", padding: "16px" }}>
                    {isLoading ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <><Send size={16} /> Send Message</>}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:col-span-2"
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {/* Info Card */}
              <div style={{ background: "rgba(11,77,255,0.05)", border: "1px solid rgba(0,180,255,0.12)", borderRadius: "20px", padding: "32px" }}>
                <h3 style={{ color: "white", fontWeight: 600, fontSize: "1.1rem", marginBottom: "28px" }}>Contact Information</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {contactItems.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                      <div style={{ width: "40px", height: "40px", minWidth: "40px", borderRadius: "10px", background: "rgba(0,180,255,0.08)", border: "1px solid rgba(0,180,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={16} style={{ color: "#00B4FF" }} />
                      </div>
                      <div>
                        <p style={{ color: "rgba(183,195,208,0.45)", fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{label}</p>
                        {href ? (
                          <a href={href} style={{ color: "rgba(183,195,208,0.8)", fontSize: "0.875rem", lineHeight: 1.5, textDecoration: "none", transition: "color 0.3s ease" }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = "#00B4FF"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(183,195,208,0.8)"; }}
                          >{value}</a>
                        ) : (
                          <p style={{ color: "rgba(183,195,208,0.8)", fontSize: "0.875rem", lineHeight: 1.5, margin: 0 }}>{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick response card */}
              <div style={{ background: "linear-gradient(135deg, rgba(11,77,255,0.12), rgba(0,180,255,0.06))", border: "1px solid rgba(0,180,255,0.2)", borderRadius: "20px", padding: "28px", textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>⚡</div>
                <h4 style={{ color: "white", fontWeight: 600, fontSize: "0.95rem", marginBottom: "6px" }}>Fast Response</h4>
                <p style={{ color: "rgba(183,195,208,0.55)", fontSize: "0.82rem", lineHeight: 1.5 }}>
                  We typically respond within 24 hours on business days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
