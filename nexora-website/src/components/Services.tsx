"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Code, Globe, GraduationCap, Hash, Headphones, Network, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    desc: "Custom software solutions tailored to your business needs, built with cutting-edge technologies.",
    tags: ["Web Apps", "Desktop", "APIs"],
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Responsive, high-performance websites that deliver exceptional user experiences.",
    tags: ["E-commerce", "CMS", "PWA"],
  },
  {
    icon: GraduationCap,
    title: "IT Training",
    desc: "Comprehensive training programs to upskill your team and maximize technology investments.",
    tags: ["Workshops", "Certification", "Training"],
  },
  {
    icon: Hash,
    title: "Social Media",
    desc: "Strategic campaigns that increase brand visibility, engagement, and conversions.",
    tags: ["Content", "Analytics", "Growth"],
  },
  {
    icon: Headphones,
    title: "IT Consultations",
    desc: "Expert consulting to help you make informed decisions and optimize infrastructure.",
    tags: ["Audits", "Strategy", "Planning"],
  },
  {
    icon: Network,
    title: "Networking",
    desc: "Robust infrastructure design and implementation for seamless connectivity.",
    tags: ["Design", "Security", "Performance"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-dark" style={{ padding: "100px 0" }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
          style={{ marginBottom: "60px" }}
        >
          <h2 className="section-title">
            Our Premium <span className="gradient-text-static">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive digital solutions to transform your business and drive growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: "30px" }}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="service-card glass-card rounded-2xl group"
              style={{ padding: "40px 30px" }}
            >
              <div className="flex justify-center" style={{ marginBottom: "25px" }}>
                <div className="icon-box group-hover:scale-105 transition-transform duration-300">
                  <service.icon size={22} className="text-white" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors text-center" style={{ marginBottom: "15px" }}>
                {service.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed text-center" style={{ marginBottom: "20px" }}>{service.desc}</p>

              <div className="flex flex-wrap justify-center" style={{ gap: "10px", marginBottom: "25px" }}>
                {service.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="text-center">
                <Link href="/services" className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors text-sm font-medium group/btn">
                  Learn More
                  <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
