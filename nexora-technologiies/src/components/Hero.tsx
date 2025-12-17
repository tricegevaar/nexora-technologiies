"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Smartphone, Cloud } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center" style={{ padding: "160px 0 80px" }}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/photos/bg.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6))" }} />
      </div>

      <div className="container relative z-10">
        <div className="flex items-center gap-[60px]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            {/* Badge */}
            <div 
              className="inline-block mb-5"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                padding: "10px 16px",
                borderRadius: "15px",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <span className="text-white font-semibold" style={{ fontSize: "0.9rem" }}>Premium Software Solutions</span>
            </div>

            {/* Title */}
            <h1 style={{ fontSize: "3.5rem", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px" }}>
              <span className="block text-white" style={{ letterSpacing: "4px" }}>Transforming</span>
              <span className="block text-white" style={{ letterSpacing: "4px" }}>Digital</span>
              <span className="block gradient-text" style={{ fontSize: "3.8rem", letterSpacing: "8px" }}>Experiences</span>
            </h1>

            {/* Description */}
            <p className="text-white italic" style={{ fontSize: "1.3rem", marginBottom: "30px", maxWidth: "500px" }}>
              We craft innovative digital solutions that drive business  growth through cutting-edge <br /> technology and exceptional user experiences.
            </p>

            {/* Buttons */}
            <div className="flex gap-4" style={{ marginBottom: "60px" }}>
              <Link href="/services" className="btn-primary group">
                Explore Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Portfolio
              </Link>
            </div>
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-1 relative hidden lg:block"
            style={{ height: "500px" }}
          >
            {/* Card 1 */}
            <div 
              className="absolute animate-float"
              style={{
                top: "10%",
                left: "10%",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: "10px",
                padding: "25px",
                width: "200px",
                textAlign: "center",
                border: "1px solid rgba(255, 255, 255, 0.2)"
              }}
            >
              <div className="icon-box mx-auto" style={{ width: "60px", height: "60px", marginBottom: "15px" }}>
                <Code size={24} className="text-white" />
              </div>
              <h3 className="text-white font-semibold" style={{ fontSize: "1.1rem" }}>Web Development</h3>
            </div>

            {/* Card 2 */}
            <div 
              className="absolute animate-float-delayed"
              style={{
                top: "50%",
                right: "10%",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: "10px",
                padding: "25px",
                width: "200px",
                textAlign: "center",
                border: "1px solid rgba(255, 255, 255, 0.2)"
              }}
            >
              <div className="icon-box mx-auto" style={{ width: "60px", height: "60px", marginBottom: "15px" }}>
                <Smartphone size={24} className="text-white" />
              </div>
              <h3 className="text-white font-semibold" style={{ fontSize: "1.1rem" }}>Mobile Apps</h3>
            </div>

            {/* Card 3 */}
            <div 
              className="absolute animate-float-delayed-2"
              style={{
                bottom: "10%",
                left: "10%",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: "10px",
                padding: "25px",
                width: "200px",
                textAlign: "center",
                border: "1px solid rgba(255, 255, 255, 0.2)"
              }}
            >
              <div className="icon-box mx-auto" style={{ width: "60px", height: "60px", marginBottom: "15px" }}>
                <Cloud size={24} className="text-white" />
              </div>
              <h3 className="text-white font-semibold" style={{ fontSize: "1.1rem" }}>Cloud Solutions</h3>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white" style={{ fontSize: "0.9rem" }}>
        <div className="w-1 h-10 bg-gray-400 rounded relative overflow-hidden">
          <motion.div
            animate={{ y: [-20, 40] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-5 rounded"
            style={{ background: "var(--electric-cyan)" }}
          />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
