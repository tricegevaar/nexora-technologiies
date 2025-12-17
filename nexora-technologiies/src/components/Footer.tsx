"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Linkedin, Facebook, MapPin, Phone, Mail } from "lucide-react";

const services = ["Software Development", "Web Development", "IT Training", "Social Media", "IT Consultations", "Networking"];
const company = ["About Us", "Our Team", "Careers", "Portfolio", "Blog", "Contact"];

export default function Footer() {
  return (
    <footer className="section-blue border-t border-white/5 footer-mobile">
      <div className="container" style={{ padding: "80px 0 30px" }}>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "40px", marginBottom: "50px" }}>
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image src="/photos/nexoraLogo.png" alt="Nexora" width={230} height={90} className="w-auto" style={{ height: "90px", marginBottom: "15px" }} />
            <p className="text-white/40 text-sm leading-relaxed" style={{ marginBottom: "15px" }}>
              Transforming ideas into digital excellence through innovative solutions.
            </p>
            <div className="flex gap-2">
              <a
                href="https://wa.me/27848744120"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-green-400 hover:border-green-500/30 transition-all"
              >
                <MessageCircle size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-blue-400 hover:border-blue-500/30 transition-all"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-blue-600 hover:border-blue-600/30 transition-all"
              >
                <Facebook size={14} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm relative" style={{ marginBottom: "25px" }}>Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/40 hover:text-cyan-400 transition-colors text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm relative" style={{ marginBottom: "25px" }}>Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/40 hover:text-cyan-400 transition-colors text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm relative" style={{ marginBottom: "25px" }}>Contact</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <li className="flex items-start gap-3 text-white/40 text-sm" style={{ lineHeight: "1.6" }}>
                <MapPin size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Simon Vermooten Rd & Bronkhorstspruit Rd, Willow Park Manor, Pretoria, 0184, South Africa</span>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <Phone size={16} className="text-cyan-400 flex-shrink-0" />
                <span>+2784-874-4120</span>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <Mail size={16} className="text-cyan-400 flex-shrink-0" />
                <span>tiisomabogwane81@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 text-center" style={{ paddingTop: "30px" }}>
          <p className="text-white/90 text-xs">© {new Date().getFullYear()} Nexora Technologiies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
