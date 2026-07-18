"use client";

import { motion } from "framer-motion";
import { Award, Rocket, CalendarCheck, CheckCircle, Home, Headset, ShieldHalf, Users, Star } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background">
        <div className="blur-circle circle-1"></div>
        <div className="blur-circle circle-2"></div>
      </div>

      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge">
            <Award size={16} className="text-accent" />
            <span>Board Certified Sleep Specialists</span>
          </div>
          
          <h1>
            Breathe Easy.<br />
            <span className="gradient-text">Sleep Well.</span><br />
            Wake Up Unstoppable.
          </h1>
          
          <p>
            Empowering you with premium sleep diagnostics and state-of-the-art therapy solutions. Discover the new generation of CPAP and Bi-PAP devices tailored for your comfort.
          </p>

          <div className="hero-actions">
            <button className="glow-btn primary-btn">
              <Rocket size={18} /> Explore Products
            </button>
            <button className="gradient-border-btn secondary-btn">
              <CalendarCheck size={18} /> Book Consultation
            </button>
          </div>

          <div className="hero-trust">
            <span className="trust-pill"><CheckCircle size={14} /> No Surgery</span>
            <span className="trust-pill"><Home size={14} /> Home Delivery</span>
            <span className="trust-pill"><Headset size={14} /> 24/7 Support</span>
            <span className="trust-pill"><ShieldHalf size={14} /> Certified Devices</span>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visuals"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="hero-image-mock"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
             <img src="/sleep.png" alt="Sleep Device" className="hero-product-img" style={{ maxWidth: '100%', height: 'auto', borderRadius: '20px' }} />
          </motion.div>

          <motion.div 
            className="floating-badge stat-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            <Users size={28} className="text-accent" />
            <div className="stat-text">
              <strong className="numbers">2,641+</strong>
              <span>Free consultations given</span>
            </div>
          </motion.div>

          <motion.div 
            className="floating-badge top-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
          >
            <Star size={16} className="text-secondary fill-secondary" />
            <span>Rated #1 in Pune</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
