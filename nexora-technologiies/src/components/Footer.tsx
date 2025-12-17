"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Linkedin, Facebook, MapPin, Phone, Mail, ArrowUp } from "lucide-react";

const services = ["Software Development", "Web Development", "IT Training", "Social Media", "IT Consultations", "Networking"];
const company = ["About Us", "Our Team", "Careers", "Portfolio", "Blog", "Contact"];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-professional">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid-2x2">
            {/* Top Row */}
            <div className="footer-row footer-row-top">
              {/* Brand Section - Left */}
              <div className="footer-brand">
                <div className="footer-logo">
                  <Image 
                    src="/photos/nexoraLogo.png" 
                    alt="Nexora Technologies" 
                    width={220} 
                    height={80} 
                    className="footer-logo-img"
                  />
                </div>
                <p className="footer-description">
                  Transforming ideas into digital excellence through innovative technology <br /> solutions and expert consultancy services.
                </p>
                <div className="footer-social">
                  <a
                    href="https://wa.me/27848744120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link whatsapp"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={18} />
                  </a>
                  <a
                    href="#"
                    className="social-link linkedin"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="#"
                    className="social-link facebook"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>

              {/* Contact Section - Right */}
              <div className="footer-section footer-contact">
                <h3 className="footer-heading">Get In Touch</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <MapPin size={16} className="contact-icon" />
                    <div className="contact-text">
                      <span className="contact-label">Address</span>
                      <span className="contact-value">Simon Vermooten Rd & Bronkhorstspruit Rd, Willow Park Manor, Pretoria, 0184, South Africa</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <Phone size={16} className="contact-icon" />
                    <div className="contact-text">
                      <span className="contact-label">Phone</span>
                      <a href="tel:+27848744120" className="contact-value contact-link">+27 84 874 4120</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <Mail size={16} className="contact-icon" />
                    <div className="contact-text">
                      <span className="contact-label">Email</span>
                      <a href="mailto:tiisomabogwane81@gmail.com" className="contact-value contact-link">tiisomabogwane81@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="footer-row footer-row-bottom">
              {/* Services Section - Left */}
              <div className="footer-section">
                <h3 className="footer-heading">Our Services</h3>
                <div className="footer-links-grid">
                  {services.map((item) => (
                    <Link key={item} href="/services" className="footer-link">{item}</Link>
                  ))}
                </div>
              </div>

              {/* Company Section - Right */}
              <div className="footer-section">
                <h3 className="footer-heading">Company</h3>
                <div className="footer-links-grid">
                  <Link href="/about" className="footer-link">About Us</Link>
                  <Link href="/portfolio" className="footer-link">Portfolio</Link>
                  <Link href="/contact" className="footer-link">Contact</Link>
                  <Link href="#" className="footer-link">Careers</Link>
                  <Link href="#" className="footer-link">Blog</Link>
                  <Link href="#" className="footer-link">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>© {new Date().getFullYear()} Nexora Technologies. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <Link href="#" className="footer-bottom-link">Terms of Service</Link>
              <Link href="#" className="footer-bottom-link">Privacy Policy</Link>
              <Link href="#" className="footer-bottom-link">Cookie Policy</Link>
            </div>
            <button 
              onClick={scrollToTop}
              className="scroll-to-top"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
