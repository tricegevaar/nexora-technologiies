"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Shield, Zap, Globe } from "lucide-react";

const floatingStats = [
  { value: "120+", label: "Projects Delivered", icon: Globe },
  { value: "98%", label: "Client Satisfaction", icon: Zap },
  { value: "12+", label: "Enterprise Clients", icon: Shield },
];

export default function Hero() {
  return (
    <section
      className="hero-section relative flex items-center overflow-hidden"
      style={{ height: "100dvh", minHeight: "600px", background: "var(--dark-bg)" }}
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #05070C 0%, #071526 50%, #05070C 100%)" }} />
        <motion.div animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute" style={{ top: "-10%", left: "-5%", width: "55%", height: "70%", background: "radial-gradient(ellipse, rgba(11,77,255,0.18) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <motion.div animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute" style={{ top: "20%", right: "-5%", width: "45%", height: "60%", background: "radial-gradient(ellipse, rgba(0,180,255,0.14) 0%, transparent 70%)", filter: "blur(50px)" }} />
        <motion.div animate={{ opacity: [0.15, 0.35, 0.15] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute" style={{ bottom: "0%", left: "30%", width: "40%", height: "50%", background: "radial-gradient(ellipse, rgba(29,233,255,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,180,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", opacity: 0.5 }} />
      </div>

      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px", letterSpacing: "-0.02em", textWrap: "balance" } as React.CSSProperties}
            >
              Engineering Intelligent{" "}
              <br />
              Digital Experiences{" "}
              <br />
              for{" "}
              <span className="gradient-text">Modern Businesses</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(183,195,208,0.8)", marginBottom: "32px", maxWidth: "500px", fontWeight: 400, textWrap: "balance" } as React.CSSProperties}
            >
              Secure, scalable and AI-powered solutions that accelerate digital transformation, improve operational efficiency and drive measurable business growth.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-3 hero-buttons"
              style={{ marginBottom: "44px" }}
            >
              <Link href="/contact" className="btn-primary group">
                Start Your Project
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/portfolio" className="btn-secondary flex items-center gap-2">
                <Play size={13} />
                View Our Work
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-8"
            >
              {floatingStats.map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: "1.7rem", fontWeight: 800, color: "#00B4FF", lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(183,195,208,0.6)", marginTop: "3px" }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="relative hidden lg:flex items-center justify-center"
            style={{ height: "420px" }}
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "linear-gradient(135deg, rgba(11,77,255,0.12) 0%, rgba(0,180,255,0.06) 100%)",
                border: "1px solid rgba(0,180,255,0.2)",
                borderRadius: "24px",
                padding: "24px",
                width: "320px",
                backdropFilter: "blur(20px)",
                boxShadow: "0 30px 80px rgba(11,77,255,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#0B4DFF" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#00B4FF" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#1DE9FF" }} />
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", marginLeft: "8px" }}>Enterprise Dashboard</span>
              </div>
              <div style={{ marginBottom: "18px" }}>
                <div className="flex justify-between mb-2">
                  <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "12px" }}>System Performance</span>
                  <span style={{ color: "#1DE9FF", fontSize: "12px", fontWeight: 600 }}>98.7%</span>
                </div>
                <div style={{ height: "5px", background: "rgba(255,255,255,0.08)", borderRadius: "3px" }}>
                  <motion.div animate={{ width: ["0%", "98.7%"] }} transition={{ delay: 1, duration: 1.5, ease: "easeOut" }} style={{ height: "100%", background: "linear-gradient(90deg, #0B4DFF, #1DE9FF)", borderRadius: "3px", boxShadow: "0 0 10px rgba(29,233,255,0.5)" }} />
                </div>
              </div>
              {[
                { label: "Cloud Infrastructure", val: "Active", color: "#1DE9FF" },
                { label: "AI Processing", val: "99.9% Uptime", color: "#00B4FF" },
                { label: "Security Shield", val: "Secure", color: "#0B4DFF" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-2.5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>{item.label}</span>
                  <span style={{ color: item.color, fontSize: "11px", fontWeight: 600 }}>{item.val}</span>
                </div>
              ))}
            </motion.div>

            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute" style={{ top: "8%", right: "-2%", background: "rgba(11,77,255,0.15)", border: "1px solid rgba(0,180,255,0.25)", borderRadius: "14px", padding: "14px 18px", backdropFilter: "blur(16px)" }}>
              <div style={{ color: "#1DE9FF", fontSize: "1.3rem", fontWeight: 800 }}>5+</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "10px", marginTop: "2px" }}>Years Experience</div>
            </motion.div>
            <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute" style={{ bottom: "12%", left: "-5%", background: "rgba(0,180,255,0.1)", border: "1px solid rgba(0,180,255,0.2)", borderRadius: "14px", padding: "14px 18px", backdropFilter: "blur(16px)" }}>
              <div style={{ color: "#00B4FF", fontSize: "1.3rem", fontWeight: 800 }}>120+</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "10px", marginTop: "2px" }}>Projects Delivered</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem" }}>
        <div style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, rgba(0,180,255,0.5), transparent)", position: "relative", overflow: "hidden" }}>
          <motion.div animate={{ y: [-32, 32] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "16px", background: "linear-gradient(to bottom, transparent, #00B4FF, transparent)" }} />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
