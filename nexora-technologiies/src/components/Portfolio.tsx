"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=350&fit=crop",
    title: "FinFlow",
    category: "FinTech",
    desc: "A real-time financial management platform for modern businesses.",
    tags: ["React", "Node.js", "MongoDB"],
    result: "+45% Revenue Growth",
    color: "#C9A84C",
  },
  {
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&h=350&fit=crop",
    title: "EduConnect",
    category: "EdTech",
    desc: "A comprehensive LMS connecting educators and learners.",
    tags: ["React Native", "Firebase", "AI"],
    result: "50K+ Downloads",
    color: "#C9A84C",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=350&fit=crop",
    title: "HealthPlus",
    category: "HealthTech",
    desc: "A digital health platform improving patient care and operations.",
    tags: ["Vue.js", "Python", "ML"],
    result: "40% Cost Reduction",
    color: "#C9A84C",
  },
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=350&fit=crop",
    title: "RetailHub",
    category: "E-Commerce",
    desc: "An e-commerce platform driving seamless shopping experiences.",
    tags: ["Next.js", "Stripe", "AWS"],
    result: "1M+ Data Points/Day",
    color: "#C9A84C",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#111114", padding: "100px 0" }}>
      <div className="container" ref={ref}>

        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "flex-start", marginBottom: "60px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", padding: "5px 14px", borderRadius: "50px", marginBottom: "20px" }}>
              <span style={{ color: "#C9A84C", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Our Work</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, color: "#F4F0E8", lineHeight: 1.15, letterSpacing: "-0.02em", fontFamily: "'Inter', sans-serif" }}>
              Solutions That Speak
              <br />for{" "}
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #F0C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Themselves
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}
          >
            <p style={{ color: "rgba(220,210,190,0.55)", fontSize: "0.875rem", lineHeight: 1.75 }}>
              See how we&apos;ve helped businesses transform, innovate, and grow.
            </p>
            <Link
              href="/portfolio"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "11px 22px", borderRadius: "8px",
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#C9A84C", fontSize: "0.85rem", fontWeight: 600,
                textDecoration: "none", background: "transparent",
                width: "fit-content",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.08)"; e.currentTarget.style.borderColor = "#C9A84C"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; }}
            >
              View All Projects <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: "20px" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              style={{
                background: "#16161A",
                border: "1px solid rgba(201,168,76,0.1)",
                borderRadius: "14px",
                overflow: "hidden",
                transition: "all 0.35s ease",
                cursor: "pointer",
              }}
              whileHover={{ borderColor: "rgba(201,168,76,0.28)", y: -5, boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "160px", overflow: "hidden" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.06)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,11,0.85) 0%, transparent 55%)" }} />
              </div>

              {/* Content */}
              <div style={{ padding: "18px" }}>
                <h3 style={{ color: "#F4F0E8", fontWeight: 700, fontSize: "0.95rem", marginBottom: "6px", fontFamily: "'Inter', sans-serif" }}>
                  {project.title}
                </h3>
                <p style={{ color: "rgba(220,210,190,0.5)", fontSize: "0.8rem", lineHeight: 1.6, marginBottom: "14px" }}>
                  {project.desc}
                </p>
                {/* Category tag */}
                <span style={{
                  display: "inline-block",
                  background: "rgba(201,168,76,0.08)",
                  color: "rgba(201,168,76,0.7)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "50px",
                  padding: "3px 10px",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}>
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
