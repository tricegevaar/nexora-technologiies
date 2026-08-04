"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Lightbulb, Award, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We turn ideas into intelligent solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We deliver quality that exceeds expectations.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We build trust through transparency and honesty.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    desc: "We create solutions that drive real business value.",
  },
];

const stats = [
  { value: 50, label: "Projects Delivered", suffix: "+" },
  { value: 30, label: "Happy Clients", suffix: "+" },
  { value: 99, label: "Uptime Achieved", suffix: ".9%" },
  { value: 4, label: "Years of Excellence", suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const step = value / 50;
      const timer = setInterval(() => {
        current += step;
        if (current >= value) { setCount(value); clearInterval(timer); }
        else { setCount(Math.floor(current)); }
      }, 25);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" style={{ background: "#111114", padding: "100px 0" }}>
      <div className="container" ref={ref}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section label */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", padding: "5px 14px", borderRadius: "50px", marginBottom: "24px" }}>
              <span style={{ color: "#C9A84C", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Who We Are</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 800,
                color: "#F4F0E8",
                lineHeight: 1.15,
                marginBottom: "20px",
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              A Pretoria-Based Tech Partner
              <br />with a{" "}
              <span style={{
                background: "linear-gradient(135deg, #C9A84C, #F0C060)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Global Mindset
              </span>
            </h2>

            <p style={{ color: "rgba(220,210,190,0.6)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "32px", maxWidth: "480px" }}>
              We are a team of passionate innovators, engineers, and problem solvers delivering high-performance digital solutions that help businesses thrive in a connected world.
            </p>

            {/* Values 2x2 grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "36px" }}>
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                  style={{
                    padding: "18px",
                    background: "rgba(201,168,76,0.04)",
                    border: "1px solid rgba(201,168,76,0.1)",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                  }}
                  whileHover={{ borderColor: "rgba(201,168,76,0.25)", backgroundColor: "rgba(201,168,76,0.07)" }}
                >
                  <div style={{ marginBottom: "8px" }}>
                    <v.icon size={18} style={{ color: "#C9A84C" }} />
                  </div>
                  <h4 style={{ color: "#F4F0E8", fontWeight: 600, fontSize: "0.875rem", marginBottom: "4px" }}>{v.title}</h4>
                  <p style={{ color: "rgba(220,210,190,0.5)", fontSize: "0.78rem", lineHeight: 1.5 }}>{v.desc}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 24px", borderRadius: "8px",
                border: "1px solid rgba(201,168,76,0.35)",
                color: "#C9A84C", fontSize: "0.875rem", fontWeight: 600,
                textDecoration: "none", background: "transparent",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.08)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"; }}
            >
              Learn More About Us <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Right — image + badge */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ position: "relative" }}
          >
            {/* Main image */}
            <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", height: "420px" }}>
              <Image
                src="/photos/portBg.jpg"
                alt="Pretoria Tech Hub"
                fill
                style={{ objectFit: "cover" }}
              />
              {/* Overlay */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,11,0.6) 0%, rgba(10,10,11,0.1) 60%)" }} />
              {/* Gold border accent */}
              <div style={{ position: "absolute", inset: 0, borderRadius: "16px", border: "1px solid rgba(201,168,76,0.15)" }} />
            </div>

            {/* Location badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute", bottom: "24px", left: "24px",
                background: "rgba(17,17,20,0.92)",
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: "10px",
                padding: "12px 16px",
                backdropFilter: "blur(12px)",
                display: "flex", alignItems: "center", gap: "10px",
              }}
            >
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "14px" }}>📍</span>
              </div>
              <div>
                <p style={{ color: "#F4F0E8", fontSize: "0.8rem", fontWeight: 600, margin: 0 }}>Proudly based in</p>
                <p style={{ color: "#C9A84C", fontSize: "0.75rem", fontWeight: 500, margin: 0 }}>Pretoria, South Africa</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
