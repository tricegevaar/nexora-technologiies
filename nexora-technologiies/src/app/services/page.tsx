"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Code, Globe, GraduationCap, Hash, Headphones, Network, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    desc: "Custom software solutions tailored to your business needs, built with cutting-edge technologies and industry best practices.",
    features: ["Custom Applications", "API Development", "Database Design", "System Integration"],
    price: "Starting from R85,000",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Responsive, high-performance websites that deliver exceptional user experiences across all devices and platforms.",
    features: ["E-commerce Platforms", "Content Management", "Progressive Web Apps", "SEO Optimization"],
    price: "Starting from R15,000",
  },
  {
    icon: GraduationCap,
    title: "IT Training",
    desc: "Comprehensive training programs to upskill your team and maximize your technology investments for long-term success.",
    features: ["Technical Workshops", "Certification Programs", "Custom Curricula", "Ongoing Support"],
    price: "Starting from R25,000",
  },
  {
    icon: Hash,
    title: "Social Media Management",
    desc: "Strategic social media campaigns that increase brand visibility, engagement, and drive meaningful conversions.",
    features: ["Content Strategy", "Analytics & Reporting", "Community Management", "Paid Advertising"],
    price: "Starting from R15,000/month",
  },
  {
    icon: Headphones,
    title: "IT Consultations",
    desc: "Expert consulting services to help you make informed technology decisions and optimize your digital infrastructure.",
    features: ["Technology Audits", "Strategic Planning", "Digital Transformation", "Security Assessment"],
    price: "Starting from R1,200/hour",
  },
  {
    icon: Network,
    title: "Network Solutions",
    desc: "Robust network infrastructure design and implementation for seamless connectivity and optimal performance.",
    features: ["Network Design", "Security Implementation", "Performance Optimization", "24/7 Monitoring"],
    price: "Starting from R65,000",
  },
];

export default function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-mobile" style={{ padding: "160px 0 80px" }}>
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/photos/bg.jpg')" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(18, 40, 59, 0.9), rgba(31, 182, 255, 0.4))" }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-10 w-20 h-20 rounded-full bg-cyan-400/10 backdrop-blur-sm"
          />
          <motion.div
            animate={{ y: [15, -15, 15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm"
          />
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
                Premium <span className="gradient-text">Services</span>
                <br />For Your Success
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
                Comprehensive digital solutions designed to transform your business  and <br /> drive sustainable growth through cutting-edge technology.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-dark services-mobile" style={{ padding: "100px 0" }} ref={ref}>
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 services-grid-mobile" style={{ gap: "30px" }}>
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="service-card glass-card rounded-2xl group"
                style={{ padding: "40px 30px" }}
              >
                <div className="flex justify-center items-center" style={{ marginBottom: "25px" }}>
                  <div className="icon-box group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                    <service.icon size={22} className="text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors text-center" style={{ marginBottom: "15px" }}>
                  {service.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed text-center" style={{ marginBottom: "25px" }}>{service.desc}</p>

                <div className="space-y-2" style={{ marginBottom: "25px" }}>
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-cyan-400 flex-shrink-0" />
                      <span className="text-white/60 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center" style={{ marginBottom: "20px" }}>
                  <div className="text-cyan-400 font-semibold">{service.price}</div>
                </div>

                <Link 
                  href="/contact" 
                  className="btn-primary w-full justify-center text-sm"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}