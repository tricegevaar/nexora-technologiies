"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Web", "Mobile", "Cloud", "AI"];

const projects = [
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center",
    title: "E-Commerce Platform", category: "Web",
    desc: "Redesigned platform with 45% sales increase and 60% faster loading.",
    tags: ["React", "Node.js", "MongoDB"],
    results: [{ value: "45%", label: "Sales" }, { value: "60%", label: "Speed" }, { value: "99.9%", label: "Uptime" }],
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&crop=center",
    title: "Fitness App", category: "Mobile",
    desc: "Cross-platform app with real-time sync and ML recommendations.",
    tags: ["React Native", "Firebase", "ML"],
    results: [{ value: "50K+", label: "Downloads" }, { value: "4.8★", label: "Rating" }, { value: "100K+", label: "Users" }],
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=center",
    title: "Cloud Migration", category: "Cloud",
    desc: "AWS migration with zero downtime and infrastructure automation.",
    tags: ["AWS", "Docker", "Kubernetes"],
    results: [{ value: "40%", label: "Cost Cut" }, { value: "0", label: "Downtime" }, { value: "5x", label: "Scale" }],
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
    title: "Analytics Dashboard", category: "Web",
    desc: "Real-time dashboard processing 1M+ data points daily.",
    tags: ["Vue.js", "D3.js", "Python"],
    results: [{ value: "1M+", label: "Data/Day" }, { value: "200ms", label: "Response" }, { value: "30+", label: "Reports" }],
  },
  {
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=250&fit=crop&crop=center",
    title: "AI Automation", category: "AI",
    desc: "ML algorithms automating processes with 95% accuracy.",
    tags: ["Python", "TensorFlow", "NLP"],
    results: [{ value: "20hrs", label: "Saved/Wk" }, { value: "95%", label: "Accuracy" }, { value: "3x", label: "Output" }],
  },
  {
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=center",
    title: "Security Audit", category: "Web",
    desc: "Enterprise security with encryption and compliance frameworks.",
    tags: ["Cybersecurity", "GDPR", "ISO"],
    results: [{ value: "100%", label: "Compliant" }, { value: "0", label: "Vulns" }, { value: "ISO", label: "Certified" }],
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-mobile" style={{ padding: "160px 0 80px" }}>
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/photos/portBg.jpg')" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(2, 6, 23, 0.9), rgba(18, 40, 59, 0.7))" }} />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
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
                Transforming <span className="gradient-text">Ideas</span>
                <br />Into Reality
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
                Explore our collection of successful projects that have revolutionized businesses, enhanced <br /> user experiences and delivered measurable results across various industries.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-dark portfolio-mobile" style={{ padding: "100px 0" }}>
        <div className="container">
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="flex flex-wrap justify-center portfolio-filter-mobile"
            style={{ gap: "12px", marginBottom: "60px" }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-white/5 text-white/70 border border-white/10 hover:border-cyan-500/50 hover:text-white hover:bg-white/10"
                }`}
                style={{
                  backdropFilter: "blur(10px)",
                  minWidth: "90px"
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="glass-card rounded-2xl"
                  style={{ padding: "40px 30px", marginBottom: "30px" }}
                >
                  <div className="grid lg:grid-cols-3" style={{ gap: "40px" }}>
                    <div>
                      <div className="relative overflow-hidden rounded-lg" style={{ marginBottom: "20px", height: "200px" }}>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="tag tag-gold text-xs">{project.category}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white" style={{ marginBottom: "15px" }}>{project.title}</h3>
                      <p className="text-white/45 text-sm">{project.desc}</p>
                    </div>

                    <div className="flex flex-col justify-center">
                      <span className="text-white/30 text-xs uppercase" style={{ marginBottom: "15px" }}>Tech</span>
                      <div className="flex flex-wrap" style={{ gap: "10px" }}>
                        {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <span className="text-white/30 text-xs uppercase" style={{ marginBottom: "15px" }}>Results</span>
                      <div className="grid grid-cols-3" style={{ gap: "16px" }}>
                        {project.results.map((r) => (
                          <div key={r.label} className="text-center">
                            <div className="text-cyan-400 font-semibold">{r.value}</div>
                            <div className="text-white/30 text-xs">{r.label}</div>
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-white/50 mb-4 text-sm">Ready to start your project?</p>
            <Link href="/contact" className="btn-primary inline-flex group">
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
