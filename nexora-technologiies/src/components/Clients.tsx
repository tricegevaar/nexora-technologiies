"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  { name: "GrowthLab", logo: "/photos/1.png" },
  { name: "JNK Designs", logo: "/photos/2.png" },
  { name: "Infinite", logo: "/photos/3.png" },
  { name: "TSTC", logo: "/photos/4.png" },
  { name: "AB4IR", logo: "/photos/5.png" },
  { name: "Snape", logo: "/photos/6.png" },
  { name: "Mabogwane Metal", logo: "/photos/7.png" },
  { name: "Propciti", logo: "/photos/8.png" },
  { name: "Anequine", logo: "/photos/9.png" },
  { name: "Alphadot X", logo: "/photos/10.png" }
  


];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-dark" style={{ padding: "100px 0" }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
          style={{ marginBottom: "60px" }}
        >
          <h2 className="section-title">
            Trusted by <span className="gradient-text-static">Industry Leaders</span>
          </h2>
          <p className="section-subtitle">
            Partnering with forward-thinking companies worldwide to deliver exceptional results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8"
          style={{ gap: "30px" }}
        >
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.3 }}
              className="glass-card rounded-xl flex items-center justify-center hover:border-cyan-500/20 hover:bg-white/[0.04] transition-all cursor-pointer group overflow-hidden"
              style={{ padding: "10px", height: "120px" }}
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                style={{ width: "auto", height: "100px", borderRadius: "8px" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
