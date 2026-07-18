"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Phone, Home, Package, MapPin, Mail } from "lucide-react";
import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`sticky-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="top-bar">
          <div className="top-bar-container">
            <div className="top-bar-info" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <span><Phone size={14} style={{ marginRight: '6px' }} /> +91 - 9371676783</span>
              <span><MessageCircle size={14} style={{ marginRight: '6px' }} /> madhuramedical@gmail.com</span>
              <span className="top-bar-hide-sm"><MessageCircle size={14} style={{ marginRight: '6px' }} /> madhuramedicalequipment.sleep@gmail.com</span>
            </div>
            <div className="top-bar-socials" style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: 'white' }} aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" style={{ color: 'white' }} aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" style={{ color: 'white' }} aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="header-container">
          <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src="/MME_temp_logo.png" alt="Madhura Medical Equipments Logo" style={{ height: '40px' }} />
            <div>
              <span className="gradient-text">Madhura</span> Medical Equipments
            </div>
          </a>
          
          <nav className="mega-menu">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/centers">Centers</a></li>
              <li><a href="/resources">Resources</a></li>
              <li className="nav-dropdown">
                <a href="#products">Products ▾</a>
                <div className="dropdown-content">
                  <a href="/products/cpap-machines">CPAP Machines</a>
                  <a href="/products/bipap-machines">BIPAP Machines</a>
                  <a href="/products/oxygen-concentrators">Oxygen Concentrators</a>
                  <a href="/products/masks">Masks & Accessories</a>
                </div>
              </li>
              <li className="nav-dropdown">
                <a href="#brands">Brands ▾</a>
                <div className="dropdown-content">
                  <a href="/brands/lowenstein">Löwenstein Medical</a>
                  <a href="/brands/pharma-system">Pharma System</a>
                  <a href="/brands/armstrong">Armstrong</a>
                </div>
              </li>
              <li className="nav-dropdown">
                <a href="#osa">OSA ▾</a>
                <div className="dropdown-content">
                  <a href="/osa/what-is-osa">What is OSA?</a>
                  <a href="/osa/symptoms">Signs & Symptoms</a>
                  <a href="/osa/diagnosis">Diagnosis</a>
                  <a href="/osa/treatment">Treatment Options</a>
                </div>
              </li>
              <li className="nav-dropdown">
                <a href="#offerings">Our Offerings ▾</a>
                <div className="dropdown-content">
                  <a href="/offerings/diagnosis">Diagnosis</a>
                  <a href="/offerings/consultation">Consultation</a>
                  <a href="/offerings/advice">Advice & Resources</a>
                </div>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="/contact" className="gradient-border-btn appointment-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Contact Us</a>
          </div>
        </div>
      </header>

      {/* Floating Elements */}
      <a href="https://wa.me/919371676783" target="_blank" rel="noopener noreferrer" className="floating-chatbot" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', background: '#25D366', color: 'white', fontWeight: 'bold' }}>
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-bar">
        <a href="/" className="bottom-nav-item">
          <Home size={20} />
          <span>Home</span>
        </a>
        <a href="#products" className="bottom-nav-item">
          <Package size={20} />
          <span>Products</span>
        </a>
        <a href="/centers" className="bottom-nav-item">
          <MapPin size={20} />
          <span>Centers</span>
        </a>
        <a href="/contact" className="bottom-nav-item">
          <Mail size={20} />
          <span>Contact</span>
        </a>
      </nav>
    </>
  );
}
