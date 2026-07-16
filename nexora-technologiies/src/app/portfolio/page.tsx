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
      <section className="relative min-h-screen flex items-center overflow-hidden hero-mobile" style={{ padding: "160px 0 80px", background: "var(--dark-bg)" }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #05070C 0%, #071526 60%, #05070C 100%)" }} />
          <motion.div animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 8, repeat: Infinity }} className="absolute" style={{ top: "5%", left: "5%", width: "50%", height: "60%", background: "radial-gradient(ellipse, rgba(11,77,255,0.15) 0%, transparent 70%)", filter: "blur(50px)" }} />
          <motion.div animate={{ opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} className="absolute" style={{ bottom: "10%", right: "5%", width: "45%", height: "55%", background: "radial-gradient(ellipse, rgba(0,180,255,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,180,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,255,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 mb-8" style={{ background: "rgba(0,180,255,0.08)", border: "1px solid rgba(0,180,255,0.2)", padding: "6px 16px", borderRadius: "50px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1DE9FF", boxShadow: "0 0 8px #1DE9FF", display: "inline-block" }} />
              <span style={{ color: "#1DE9FF", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Case Studies</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 800, color: "white", lineHeight: 1.1, marginBottom: "24px", letterSpacing: "-0.02em" }}
            >
              Transforming <span className="gradient-text">Ideas</span>
              <br />Into Real Results
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
              style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "rgba(183,195,208,0.8)", maxWidth: "600px", margin: "0 auto", fontWeight: 400 }}
            >
              Explore our collection of successful projects that have revolutionized businesses and delivered measurable results across industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section style={{ background: "var(--dark-bg)", padding: "100px 0" }}>
        <div className="container">
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}
            className="flex flex-wrap justify-center"
            style={{ gap: "10px", marginBottom: "60px" }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "10px 22px",
                  borderRadius: "50px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  border: "1px solid",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  background: filter === cat ? "linear-gradient(135deg, #0B4DFF, #00B4FF)" : "rgba(0,180,255,0.05)",
                  borderColor: filter === cat ? "transparent" : "rgba(0,180,255,0.15)",
                  color: filter === cat ? "white" : "rgba(183,195,208,0.7)",
                  boxShadow: filter === cat ? "0 4px 20px rgba(11,77,255,0.3)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects */}
          <div style={{ marginBottom: "60px" }}>
            <AnimatePresence mode="wait">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  style={{
                    background: "rgba(11,77,255,0.05)",
                    border: "1px solid rgba(0,180,255,0.1)",
                    borderRadius: "20px",
                    padding: "32px",
                    marginBottom: "20px",
                    transition: "border-color 0.3s ease",
                  }}
                  whileHover={{ borderColor: "rgba(0,180,255,0.25)" }}
                >
                  <div className="grid lg:grid-cols-3" style={{ gap: "36px" }}>
                    {/* Image + info */}
                    <div>
                      <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", marginBottom: "18px", height: "180px" }}>
                        <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,7,12,0.7) 0%, transparent 60%)" }} />
                        <span style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(11,77,255,0.85)", color: "#1DE9FF", border: "1px solid rgba(0,180,255,0.4)", borderRadius: "6px", padding: "3px 10px", fontSize: "0.72rem", fontWeight: 700 }}>
                          {project.category}
                        </span>
                      </div>
                      <h3 style={{ color: "white", fontWeight: 600, fontSize: "1rem", marginBottom: "8px" }}>{project.title}</h3>
                      <p style={{ color: "rgba(183,195,208,0.55)", fontSize: "0.85rem", lineHeight: 1.6 }}>{project.desc}</p>
                    </div>

                    {/* Tech */}
                    <div className="flex flex-col justify-center">
                      <span style={{ color: "rgba(183,195,208,0.35)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "14px", display: "block" }}>Technologies</span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {project.tags.map((tag) => (
                          <span key={tag} style={{ background: "rgba(0,180,255,0.07)", color: "#00B4FF", border: "1px solid rgba(0,180,255,0.15)", borderRadius: "50px", padding: "5px 12px", fontSize: "0.8rem", fontWeight: 500 }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="flex flex-col justify-center portfolio-results">
                      <span style={{ color: "rgba(183,195,208,0.35)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "14px", display: "block" }}>Results</span>
                      <div className="portfolio-results-grid" style={{ gap: "12px" }}>
                        {project.results.map((r) => (
                          <div key={r.label} className="portfolio-result-item" style={{ textAlign: "center" }}>
                            <div style={{ color: "#00B4FF", fontWeight: 700, fontSize: "1.1rem" }}>{r.value}</div>
                            <div style={{ color: "rgba(183,195,208,0.4)", fontSize: "0.72rem", marginTop: "3px" }}>{r.label}</div>
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
          <div className="text-center">
            <p style={{ color: "rgba(183,195,208,0.4)", marginBottom: "16px", fontSize: "0.875rem" }}>Ready to become our next success story?</p>
            <Link href="/contact" className="btn-primary inline-flex group">
              Start Your Project
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
