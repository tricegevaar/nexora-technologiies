"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Web", "Mobile", "Cloud", "AI"];

const projects = [
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=350&fit=crop",
    title: "Enterprise CRM Platform", category: "Web",
    desc: "Redesigned CRM platform with 45% sales increase and 60% faster loading.",
    tags: ["React", "Node.js", "MongoDB"],
    results: [{ value: "45%", label: "Sales Growth" }, { value: "60%", label: "Speed" }, { value: "99.9%", label: "Uptime" }],
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=350&fit=crop",
    title: "AI Fitness App", category: "Mobile",
    desc: "Cross-platform app with real-time sync and ML-powered recommendations.",
    tags: ["React Native", "Firebase", "TensorFlow"],
    results: [{ value: "50K+", label: "Downloads" }, { value: "4.8★", label: "Rating" }, { value: "100K+", label: "Users" }],
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=350&fit=crop",
    title: "Cloud Migration", category: "Cloud",
    desc: "AWS migration with zero downtime and full infrastructure automation.",
    tags: ["AWS", "Docker", "Kubernetes"],
    results: [{ value: "40%", label: "Cost Cut" }, { value: "0", label: "Downtime" }, { value: "5x", label: "Scale" }],
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=350&fit=crop",
    title: "Analytics Dashboard", category: "Web",
    desc: "Real-time dashboard processing 1M+ data points daily with 200ms response.",
    tags: ["Vue.js", "D3.js", "Python"],
    results: [{ value: "1M+", label: "Data/Day" }, { value: "200ms", label: "Response" }, { value: "30+", label: "Reports" }],
  },
  {
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=350&fit=crop",
    title: "AI Process Automation", category: "AI",
    desc: "ML algorithms automating business processes with 95% accuracy.",
    tags: ["Python", "TensorFlow", "NLP"],
    results: [{ value: "20hrs", label: "Saved/Wk" }, { value: "95%", label: "Accuracy" }, { value: "3x", label: "Output" }],
  },
  {
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=350&fit=crop",
    title: "Security & Compliance", category: "Web",
    desc: "Enterprise-grade security with encryption and regulatory compliance.",
    tags: ["Cybersecurity", "GDPR", "ISO 27001"],
    results: [{ value: "100%", label: "Compliant" }, { value: "0", label: "Vulnerabilities" }, { value: "ISO", label: "Certified" }],
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "160px 0 90px",
          minHeight: "65vh",
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
            style={{ position: "absolute", top: "5%", left: "5%", width: "50%", height: "65%", background: "radial-gradient(ellipse, rgba(201,168,76,0.1) 0%, transparent 70%)", filter: "blur(60px)" }}
          />
          <motion.div
            animate={{ opacity: [0.08, 0.16, 0.08] }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            style={{ position: "absolute", bottom: "5%", right: "5%", width: "45%", height: "55%", background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)", filter: "blur(70px)" }}
          />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(201,168,76,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.015) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        </div>

        <div className="container relative z-10">
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.22)", padding: "5px 14px", borderRadius: "50px", marginBottom: "28px" }}
              >
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A84C", boxShadow: "0 0 6px #C9A84C", display: "inline-block" }} />
                <span style={{ color: "#C9A84C", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Case Studies</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, color: "#F4F0E8", lineHeight: 1.1, marginBottom: "22px", letterSpacing: "-0.03em", fontFamily: "'Inter', sans-serif" }}
              >
                Transforming{" "}
                <span style={{ background: "linear-gradient(135deg, #C9A84C, #F0C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Ideas
                </span>
                <br />Into Real Results
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
                style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(220,210,190,0.6)", maxWidth: "580px", margin: "0 auto" }}
              >
                Explore our collection of successful projects that have helped businesses transform, innovate, and grow.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section style={{ background: "#111114", padding: "100px 0" }}>
        <div className="container">

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "56px" }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "9px 22px", borderRadius: "50px",
                  fontSize: "0.85rem", fontWeight: 600, border: "1px solid",
                  cursor: "pointer", transition: "all 0.3s ease",
                  background: filter === cat ? "#C9A84C" : "rgba(201,168,76,0.04)",
                  borderColor: filter === cat ? "#C9A84C" : "rgba(201,168,76,0.15)",
                  color: filter === cat ? "#0A0A0B" : "rgba(220,210,190,0.6)",
                  boxShadow: filter === cat ? "0 4px 18px rgba(201,168,76,0.25)" : "none",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Project cards */}
          <div style={{ marginBottom: "56px" }}>
            <AnimatePresence mode="wait">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  style={{
                    background: "#16161A",
                    border: "1px solid rgba(201,168,76,0.1)",
                    borderRadius: "16px",
                    padding: "28px",
                    marginBottom: "16px",
                    transition: "border-color 0.3s ease",
                  }}
                  whileHover={{ borderColor: "rgba(201,168,76,0.25)" }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px" }}>

                    {/* Image + info */}
                    <div>
                      <div style={{ position: "relative", borderRadius: "10px", overflow: "hidden", marginBottom: "16px", height: "172px" }}>
                        <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,11,0.7) 0%, transparent 55%)" }} />
                        <span style={{ position: "absolute", top: "10px", left: "10px", background: "rgba(201,168,76,0.15)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "6px", padding: "3px 10px", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.04em" }}>
                          {project.category}
                        </span>
                      </div>
                      <h3 style={{ color: "#F4F0E8", fontWeight: 600, fontSize: "0.95rem", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>{project.title}</h3>
                      <p style={{ color: "rgba(220,210,190,0.5)", fontSize: "0.82rem", lineHeight: 1.6 }}>{project.desc}</p>
                    </div>

                    {/* Technologies */}
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <span style={{ color: "rgba(220,210,190,0.3)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "14px", display: "block" }}>Technologies</span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {project.tags.map((tag) => (
                          <span key={tag} style={{ background: "rgba(201,168,76,0.07)", color: "rgba(201,168,76,0.75)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "50px", padding: "5px 12px", fontSize: "0.78rem", fontWeight: 500 }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <span style={{ color: "rgba(220,210,190,0.3)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "14px", display: "block" }}>Results</span>
                      <div className="portfolio-results-grid">
                        {project.results.map((r) => (
                          <div key={r.label} className="portfolio-result-item">
                            <div style={{ color: "#C9A84C", fontWeight: 700, fontSize: "1.05rem" }}>{r.value}</div>
                            <div style={{ color: "rgba(220,210,190,0.4)", fontSize: "0.7rem", marginTop: "3px" }}>{r.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "rgba(220,210,190,0.35)", marginBottom: "16px", fontSize: "0.875rem" }}>
              Ready to become our next success story?
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "13px 28px", borderRadius: "8px",
                background: "#C9A84C", color: "#0A0A0B",
                fontWeight: 700, fontSize: "0.875rem", textDecoration: "none",
                border: "1px solid #C9A84C", transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#F0C060"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(201,168,76,0.35)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Start Your Project <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
