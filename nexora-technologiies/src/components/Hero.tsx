"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const serviceNumbers = [
  { num: "01", label: "Strategy &", label2: "Consulting" },
  { num: "02", label: "Design &", label2: "Development" },
  { num: "03", label: "Cloud &", label2: "DevOps" },
  { num: "04", label: "Data &", label2: "AI Solutions" },
];

const partners = [
  { name: "seda", style: { color: "#C9A84C", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.05em" } },
  { name: "Microsoft", style: { color: "rgba(220,210,190,0.6)", fontWeight: 600, fontSize: "0.8rem" }, tag: "Partner" },
  { name: "aws", style: { color: "rgba(220,210,190,0.6)", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.04em" } },
  { name: "Zoho", style: { color: "rgba(220,210,190,0.6)", fontWeight: 700, fontSize: "0.9rem" }, tag: "Authorized" },
  { name: "aws", style: { color: "rgba(220,210,190,0.6)", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.04em" }, tag: "partner network" },
];

export default function Hero() {
  return (
    <section
      className="hero-section relative flex items-center overflow-hidden"
      style={{ height: "100dvh", minHeight: "640px", background: "#0A0A0B" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gold glow top-left */}
        <motion.div
          animate={{ opacity: [0.18, 0.35, 0.18] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "-10%", left: "-5%", width: "55%", height: "70%", background: "radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        {/* Subtle warm glow right */}
        <motion.div
          animate={{ opacity: [0.1, 0.22, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ position: "absolute", top: "20%", right: "-5%", width: "45%", height: "60%", background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)", filter: "blur(70px)" }}
        />
        {/* Very subtle grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(201,168,76,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.018) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "180px", background: "linear-gradient(to top, #0A0A0B, transparent)" }} />
      </div>

      <div className="container relative z-10 w-full">
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }}>

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ maxWidth: "680px" }}
          >
            {/* Label pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", padding: "5px 14px", borderRadius: "50px", marginBottom: "28px" }}
            >
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A84C", boxShadow: "0 0 6px #C9A84C", display: "inline-block" }} />
              <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Digital Innovation. Real Impact.
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.8 }}
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "22px",
                letterSpacing: "-0.03em",
                color: "#F4F0E8",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Building Intelligent
              <br />Solutions That Drive
              <br />Business{" "}
              <span style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #F0C060 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Forward
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: "rgba(220,210,190,0.6)",
                marginBottom: "36px",
                maxWidth: "500px",
              }}
            >
              Nexora Technologies empowers businesses with custom software, cloud, and data solutions that accelerate growth and create sustainable value.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.7 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "52px" }}
            >
              <Link
                href="/services"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "13px 26px",
                  background: "transparent",
                  color: "#C9A84C", fontWeight: 600, fontSize: "0.875rem",
                  borderRadius: "8px", textDecoration: "none",
                  border: "1px solid #C9A84C",
                  transition: "all 0.3s ease",
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
                Explore Our Services <ArrowRight size={15} />
              </Link>
              <Link
                href="/portfolio"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "13px 26px",
                  background: "transparent",
                  color: "rgba(220,210,190,0.7)", fontWeight: 500, fontSize: "0.875rem",
                  borderRadius: "8px", textDecoration: "none",
                  border: "1px solid rgba(220,210,190,0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(220,210,190,0.45)";
                  e.currentTarget.style.color = "#F4F0E8";
                  e.currentTarget.style.background = "rgba(220,210,190,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(220,210,190,0.2)";
                  e.currentTarget.style.color = "rgba(220,210,190,0.7)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <Play size={13} /> View Our Work
              </Link>
            </motion.div>

            {/* Partners strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <p style={{ color: "rgba(220,210,190,0.3)", fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "14px" }}>
                Trusted by Innovative Companies
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
                {partners.map((p, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <span style={p.style}>{p.name}</span>
                    {p.tag && <span style={{ color: "rgba(220,210,190,0.35)", fontSize: "0.6rem", letterSpacing: "0.06em", marginTop: "1px" }}>{p.tag}</span>}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — numbered service list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="hidden lg:flex flex-col"
            style={{ gap: "20px", paddingLeft: "40px", borderLeft: "1px solid rgba(201,168,76,0.1)" }}
          >
            {serviceNumbers.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + i * 0.1 }}
                style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
              >
                <span style={{ color: "#C9A84C", fontSize: "0.72rem", fontWeight: 700, lineHeight: 1, paddingTop: "2px", minWidth: "20px" }}>{s.num}</span>
                <div>
                  <p style={{ color: "rgba(220,210,190,0.55)", fontSize: "0.75rem", lineHeight: 1.3, fontWeight: 500 }}>{s.label}</p>
                  <p style={{ color: "rgba(220,210,190,0.55)", fontSize: "0.75rem", lineHeight: 1.3, fontWeight: 500 }}>{s.label2}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{ position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", color: "rgba(220,210,190,0.2)", fontSize: "0.65rem", letterSpacing: "0.08em" }}
      >
        <div style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)", position: "relative", overflow: "hidden" }}>
          <motion.div
            animate={{ y: [-32, 32] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "14px", background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }}
          />
        </div>
        <span>SCROLL</span>
      </motion.div>
    </section>
  );
}
