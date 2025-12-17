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

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-mobile" style={{ padding: "160px 0 80px" }}>
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/photos/bg.jpg')" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(31, 182, 255, 0.2), rgba(18, 40, 59, 0.9))" }} />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-purple-400/10 to-cyan-400/10 blur-3xl"
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif", textAlign: "center" }}
              >
                Start Your <span className="gradient-text">Digital</span>
                <br />Journey Today
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-white text-center mx-auto"
                style={{ 
                  marginTop: "1.2rem", 
                  fontSize: "1.1rem", 
                  lineHeight: "1.6",
                  padding: "0 20px",
                  textAlign: "center"
                }}
              >
                Ready to transform your business with cutting-edge technology? Get in touch with our expert team for <br /> a free  consultation and discover how we can bring your vision to life.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Floating Contact Cards */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <div className="glass-card rounded-xl p-4 w-68">
            <div className="text-cyan-400 text-sm font-semibold mb-1">Quick Contact</div>
            <div className="text-white/80 text-sm">tiisomabogwane81@gmail.com</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <div className="glass-card rounded-xl p-4 w-48">
            <div className="text-cyan-400 text-sm font-semibold mb-1">Office Hours</div>
            <div className="text-white/80 text-sm">Mon-Fri: 9AM-6PM</div>
          </div>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="section-dark" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="grid lg:grid-cols-5" style={{ gap: "40px" }}>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="glass-card rounded-2xl" style={{ padding: "40px 30px" }}>
                <h2 className="text-lg font-semibold text-white" style={{ marginBottom: "25px" }}>Send a message</h2>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div className="grid md:grid-cols-2" style={{ gap: "20px" }}>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-sm mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input"
                      placeholder="Optional"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 text-sm mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full justify-center disabled:opacity-50"
                  >
                    {isLoading ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <><Send size={16} /> Send Message</>}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:col-span-2"
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div className="glass-card rounded-2xl" style={{ padding: "40px 30px" }}>
                <h3 className="text-white font-semibold" style={{ marginBottom: "25px" }}>Contact Info</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    { icon: MapPin, text: "Simon Vermooten Rd & Bronkhorstspruit Rd, Willow Park Manor, Pretoria, 0184, South Africa" },
                    { icon: Phone, text: "+2784-874-4120" },
                    { icon: Mail, text: "tiisomabogwane81@gmail.com" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="icon-box-sm w-9 h-9">
                        <Icon size={16} className="text-cyan-400" />
                      </div>
                      <span className="text-white/60 text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl" style={{ padding: "40px 30px" }}>
                <div className="flex items-center" style={{ gap: "20px", marginBottom: "15px" }}>
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/15 flex items-center justify-center">
                    <Clock size={16} className="text-amber-400" />
                  </div>
                  <h3 className="text-white font-semibold">Office Hours</h3>
                </div>
                <p className="text-white/50 text-sm">Mon — Fri: 9:00 AM — 5:00 PM</p>
                <p className="text-white/30 text-xs mt-1">Response within 24 hours</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
