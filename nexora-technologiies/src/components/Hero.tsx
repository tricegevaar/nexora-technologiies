"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="hero-section relative flex items-center overflow-hidden"
      style={{ height: "100dvh", minHeight: "600px", background: "#05070C" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "-15%", left: "-10%", width: "60%", height: "80%", background: "radial-gradient(ellipse, rgba(11,55,180,0.22) 0%, transparent 70%)", filter: "blur(50px)" }}
        />
        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ position: "absolute", top: "30%", right: "-8%", width: "50%", height: "65%", background: "radial-gradient(ellipse, rgba(0,150,220,0.15) 0%, transparent 70%)", filter: "blur(55px)" }}
        />
        <motion.div
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ position: "absolute", bottom: "-5%", left: "25%", width: "45%", height: "55%", background: "radial-gradient(ellipse, rgba(0,120,200,0.1) 0%, transparent 70%)", filter: "blur(65px)" }}
        />
        {/* Subtle grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,150,220,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,150,220,0.025) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      </div>

      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: "60px" }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              style={{
                fontSize: "clamp(2.1rem, 3.8vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                marginTop: "18px",
                marginBottom: "22px",
                letterSpacing: "-0.025em",
                color: "#F0F4FF",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Engineering Intelligent{" "}
              <br className="hidden lg:block" />
              Solutions{" "}
              <br className="hidden lg:block" />
              for{" "}
              <span style={{
                background: "linear-gradient(135deg, #3B8EFF 0%, #00C8FF 50%, #1FFFFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Modern Businesses
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.7 }}
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "rgba(176,196,222,0.75)",
                marginBottom: "36px",
                maxWidth: "480px",
                fontWeight: 400,
              }}
            >
              Secure, scalable and AI-powered solutions that accelerate digital
              transformation, improve operational efficiency and drive measurable
              business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}
            >
              <Link
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "14px 28px",
                  background: "linear-gradient(135deg, #0B4DFF, #0096E6)",
                  color: "white", fontWeight: 600, fontSize: "0.9rem",
                  borderRadius: "10px", textDecoration: "none",
                  boxShadow: "0 4px 24px rgba(11,77,255,0.35)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(11,77,255,0.5)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(11,77,255,0.35)"; }}
              >
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link
                href="/portfolio"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "14px 28px",
                  background: "transparent",
                  color: "rgba(176,196,222,0.85)", fontWeight: 500, fontSize: "0.9rem",
                  borderRadius: "10px", textDecoration: "none",
                  border: "1px solid rgba(59,142,255,0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(59,142,255,0.6)"; e.currentTarget.style.color = "white"; e.currentTarget.style.background = "rgba(59,142,255,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(59,142,255,0.3)"; e.currentTarget.style.color = "rgba(176,196,222,0.85)"; e.currentTarget.style.background = "transparent"; }}
              >
                <Play size={13} /> View Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="relative hidden lg:flex items-center justify-center"
            style={{ height: "380px" }}
          >
            <motion.div
              animate={{ y: [-7, 7, -7] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "linear-gradient(145deg, rgba(11,55,180,0.14) 0%, rgba(0,120,200,0.07) 100%)",
                border: "1px solid rgba(59,142,255,0.2)",
                borderRadius: "20px",
                padding: "22px",
                width: "300px",
                backdropFilter: "blur(20px)",
                boxShadow: "0 25px 70px rgba(11,55,180,0.18), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "16px" }}>
                {["#1a3a7a", "#1a6aaa", "#1aaad0"].map((c) => (
                  <div key={c} style={{ width: "9px", height: "9px", borderRadius: "50%", background: c }} />
                ))}
                <span style={{ color: "rgba(176,196,222,0.35)", fontSize: "10px", marginLeft: "6px" }}>Enterprise Dashboard</span>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ color: "rgba(176,196,222,0.55)", fontSize: "11px" }}>System Performance</span>
                  <span style={{ color: "#00C8FF", fontSize: "11px", fontWeight: 600 }}>98.7%</span>
                </div>
                <div style={{ height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "2px" }}>
                  <motion.div
                    animate={{ width: ["0%", "98.7%"] }}
                    transition={{ delay: 1, duration: 1.4, ease: "easeOut" }}
                    style={{ height: "100%", background: "linear-gradient(90deg, #0B4DFF, #00C8FF)", borderRadius: "2px", boxShadow: "0 0 8px rgba(0,200,255,0.4)" }}
                  />
                </div>
              </div>

              {[
                { label: "Cloud Infrastructure", val: "Active", color: "#00C8FF" },
                { label: "AI Processing", val: "99.9% Uptime", color: "#3B8EFF" },
                { label: "Security Shield", val: "Secure", color: "#4DABF7" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                  <span style={{ color: "rgba(176,196,222,0.5)", fontSize: "11px" }}>{item.label}</span>
                  <span style={{ color: item.color, fontSize: "10px", fontWeight: 600 }}>{item.val}</span>
                </div>
              ))}
            </motion.div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              style={{ position: "absolute", top: "6%", right: "0%", background: "rgba(11,55,180,0.18)", border: "1px solid rgba(59,142,255,0.22)", borderRadius: "12px", padding: "12px 16px", backdropFilter: "blur(16px)" }}
            >
              <div style={{ color: "#3B8EFF", fontSize: "1.25rem", fontWeight: 800 }}>5+</div>
              <div style={{ color: "rgba(176,196,222,0.45)", fontSize: "10px", marginTop: "2px" }}>Years Experience</div>
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ position: "absolute", bottom: "14%", left: "-4%", background: "rgba(0,100,180,0.14)", border: "1px solid rgba(59,142,255,0.18)", borderRadius: "12px", padding: "12px 16px", backdropFilter: "blur(16px)" }}
            >
              <div style={{ color: "#00C8FF", fontSize: "1.25rem", fontWeight: 800 }}>120+</div>
              <div style={{ color: "rgba(176,196,222,0.45)", fontSize: "10px", marginTop: "2px" }}>Projects Delivered</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{ position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", color: "rgba(176,196,222,0.25)", fontSize: "0.7rem" }}
      >
        <div style={{ width: "1px", height: "28px", background: "linear-gradient(to bottom, rgba(59,142,255,0.5), transparent)", position: "relative", overflow: "hidden" }}>
          <motion.div animate={{ y: [-28, 28] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "12px", background: "linear-gradient(to bottom, transparent, #3B8EFF, transparent)" }} />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
