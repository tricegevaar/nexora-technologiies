"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  { 
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center",
    title: "E-Commerce Platform", 
    desc: "Scalable solution that increased sales by 45%.", 
    tags: ["React", "Node.js", "MongoDB"] 
  },
  { 
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&crop=center",
    title: "Mobile App", 
    desc: "Cross-platform app with 50k+ downloads.", 
    tags: ["React Native", "Firebase"] 
  },
  { 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
    title: "Analytics Dashboard", 
    desc: "Real-time platform processing 1M+ data points.", 
    tags: ["Vue.js", "Python"] 
  },
  { 
    image: "/photos/azure portal.webp",
    title: "Cloud Migration", 
    desc: "AWS migration reducing costs by 40%.", 
    tags: ["AWS", "Docker", "Azure"] 
  },
  { 
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=center",
    title: "Security Audit", 
    desc: "Enterprise-grade security implementation.", 
    tags: ["Cybersecurity", "Compliance"] 
  },
  { 
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=250&fit=crop&crop=center",
    title: "AI Integration", 
    desc: "ML automation saving 20 hours/week.", 
    tags: ["TensorFlow", "Python"] 
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="section-blue" style={{ padding: "100px 0" }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
          style={{ marginBottom: "60px" }}
        >
          <h2 className="section-title">
            Our <span className="gradient-text-static">Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Showcase of our finest projects delivered to clients worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: "30px", marginBottom: "60px" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="glass-card rounded-2xl group"
              style={{ padding: "40px 30px" }}
            >
              <div className="relative overflow-hidden rounded-lg group-hover:scale-105 transition-transform" style={{ marginBottom: "20px", height: "180px" }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <h3 className="text-lg font-semibold text-white text-center" style={{ marginBottom: "15px" }}>{project.title}</h3>
              <p className="text-white/45 text-sm text-center" style={{ marginBottom: "20px" }}>{project.desc}</p>

              <div className="flex flex-wrap justify-center" style={{ gap: "10px" }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag tag-gold">{tag}</span>
                ))}
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
            View Full Portfolio
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
