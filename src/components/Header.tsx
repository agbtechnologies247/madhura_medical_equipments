"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, MessageCircle, Phone } from "lucide-react";
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

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  return (
    <>
      <header className={`sticky-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <div className="logo">
            <span className="gradient-text">Madhura</span> Medical
          </div>
          
          <nav className="mega-menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Compare</a></li>
              <li><a href="#">Wishlist</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="icon-btn search-btn">🔍</button>
            <button className="icon-btn theme-btn" onClick={toggleTheme}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="gradient-border-btn appointment-btn">Appointment</button>
          </div>
        </div>
      </header>

      {/* Floating Elements */}
      <div className="floating-whatsapp">
        <MessageCircle size={28} />
      </div>
      <div className="floating-chatbot">
        <span>AI Chat</span>
      </div>
    </>
  );
}
