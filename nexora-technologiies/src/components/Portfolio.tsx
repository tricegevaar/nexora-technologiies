"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=350&fit=crop",
    title: "Enterprise CRM Platform",
    category: "Web",
    desc: "Scalable CRM solution that increased sales by 45% and cut response time by 60%.",
    tags: ["React", "Node.js", "MongoDB"],
    result: "+45% Revenue Growth",
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=350&fit=crop",
    title: "AI-Powered Fitness App",
    category: "Mobile",
    desc: "Cross-platform app with ML recommendations. 50K+ downloads in first 6 months.",
    tags: ["React Native", "Firebase", "TensorFlow"],
    result: "50K+ Downloads",
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=350&fit=crop",
    title: "Cloud Infrastructure Migration",
    category: "Cloud",
    desc: "AWS migration with zero downtime, reducing infrastructure costs by 40%.",
    tags: ["AWS", "Docker", "Kubernetes"],
    result: "40% Cost Reduction",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=350&fit=crop",
    title: "Real-Time Analytics Dashboard",
    category: "Web",
    desc: "Processing 1M+ data points daily with sub-200ms response times.",
    tags: ["Vue.js", "D3.js", "Python"],
    result: "1M+ Data Points/Day",
  },
  {
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=350&fit=crop",
    title: "AI Process Automation",
    category: "AI",
    desc: "ML algorithms automating business workflows with 95% accuracy.",
    tags: ["Python", "TensorFlow", "NLP"],
    result: "20hrs Saved/Week",
  },
  {
    image: "/photos/azure portal.webp",
    title: "Secure Cloud Migration",
    category: "Cloud",
    desc: "Enterprise-grade security implementation achieving 100% compliance.",
    tags: ["Azure", "Cybersecurity", "ISO"],
    result: "99.9% Uptime",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "var(--deep-navy)", padding: "100px 0" }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
          style={{ marginBottom: "60px" }}
        >
          <h2 className="section-title">
            Case <span className="gradient-text-static">Studies</span>
          </h2>
          <p className="section-subtitle">
            Real results for real businesses — explore how we&apos;ve helped clients grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: "24px", marginBottom: "50px" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              style={{
                background: "rgba(11,77,255,0.05)",
                border: "1px solid rgba(0,180,255,0.1)",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "all 0.4s ease",
                cursor: "pointer",
              }}
              whileHover={{ borderColor: "rgba(0,180,255,0.3)", y: -6, boxShadow: "0 20px 50px rgba(11,77,255,0.15)" }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,7,12,0.8) 0%, transparent 60%)" }} />
                {/* Result badge */}
                <div
                  style={{
                    position: "absolute", bottom: "12px", left: "12px",
                    background: "rgba(11,77,255,0.9)",
                    border: "1px solid rgba(0,180,255,0.4)",
                    borderRadius: "8px",
                    padding: "4px 10px",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#1DE9FF",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {project.result}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <h3 style={{ color: "white", fontWeight: 600, fontSize: "1rem", marginBottom: "8px" }}>
                  {project.title}
                </h3>
                <p style={{ color: "rgba(183,195,208,0.6)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "16px" }}>
                  {project.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "rgba(0,180,255,0.07)",
                        color: "#00B4FF",
                        border: "1px solid rgba(0,180,255,0.15)",
                        borderRadius: "50px",
                        padding: "3px 10px",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center"
        >
          <Link href="/portfolio" className="btn-primary inline-flex group">
            View All Case Studies
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
