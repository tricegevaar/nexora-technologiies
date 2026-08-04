"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "99.9%", label: "Uptime Achieved" },
  { value: "4+", label: "Years of Excellence" },
];

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "0",
        background: "#0A0A0B",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          background: "#16161A",
          borderTop: "1px solid rgba(201,168,76,0.1)",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
          padding: "32px 0",
        }}
      >
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr) auto", gap: "0", alignItems: "center" }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                style={{
                  textAlign: "center",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(201,168,76,0.08)" : "none",
                  padding: "0 24px",
                }}
              >
                <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "#C9A84C", lineHeight: 1, marginBottom: "6px", fontFamily: "'Inter', sans-serif" }}>
                  {stat.value}
                </div>
                <div style={{ color: "rgba(220,210,190,0.45)", fontSize: "0.8rem", fontWeight: 500 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}

            {/* CTA side */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.5 }}
              style={{ paddingLeft: "32px", borderLeft: "1px solid rgba(201,168,76,0.08)" }}
            >
              <Link
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  padding: "13px 22px",
                  background: "transparent",
                  color: "#C9A84C", fontWeight: 600, fontSize: "0.85rem",
                  borderRadius: "8px", textDecoration: "none",
                  border: "1px solid rgba(201,168,76,0.35)",
                  whiteSpace: "nowrap",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.08)"; e.currentTarget.style.borderColor = "#C9A84C"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"; }}
              >
                Let&apos;s Build Something<br />Extraordinary Together
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main CTA banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "80px 0",
          background: "linear-gradient(135deg, #1A1408 0%, #0D0D10 40%, #1A1408 100%)",
        }}
      >
        {/* Gold glow blobs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", bottom: "-20%", left: "5%", width: "50%", height: "120%", background: "radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
          <div style={{ position: "absolute", top: "-20%", right: "5%", width: "40%", height: "100%", background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%)", filter: "blur(60px)" }} />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px", flexWrap: "wrap" }}>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 800, color: "#F4F0E8",
                  lineHeight: 1.2, marginBottom: "10px",
                  letterSpacing: "-0.02em",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Ready to Transform{" "}
                <span style={{ background: "linear-gradient(135deg, #C9A84C, #F0C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Your Business?
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={{ color: "rgba(220,210,190,0.5)", fontSize: "0.9rem", margin: 0 }}
              >
                Let&apos;s build the future, together.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <Link
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  padding: "15px 32px",
                  background: "#C9A84C",
                  color: "#0A0A0B", fontWeight: 700, fontSize: "0.9rem",
                  borderRadius: "8px", textDecoration: "none",
                  border: "1px solid #C9A84C",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#F0C060";
                  e.currentTarget.style.borderColor = "#F0C060";
                  e.currentTarget.style.boxShadow = "0 8px 28px rgba(201,168,76,0.4)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#C9A84C";
                  e.currentTarget.style.borderColor = "#C9A84C";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Book a Free Consultation <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
