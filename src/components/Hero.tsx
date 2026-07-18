"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Star } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
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
            <Activity size={16} className="text-accent" />
            <span>Premium Clinical Solutions</span>
          </div>
          
          <h1>
            Improve Your <span className="gradient-text">Sleep.</span><br />
            Transform Your Life.
          </h1>
          
          <p>
            Premium Sleep Therapy Equipment &amp; Clinical Solutions tailored for your well-being.
            Experience the future of healthcare with our FDA-approved devices.
          </p>

          <div className="hero-actions">
            <button className="glow-btn primary-btn">Book Consultation</button>
            <button className="gradient-border-btn secondary-btn">Explore Products</button>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visuals"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="glass-panel main-card"
            whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-header">
              <span className="card-title">AirSense™ 11 AutoSet</span>
              <span className="stock-badge">In Stock</span>
            </div>
            
            <div className="device-placeholder">
               <div className="device-mock"></div>
            </div>

            <div className="card-stats">
              <div className="stat-item">
                <Star size={16} className="text-accent fill-accent" />
                <span className="numbers">98%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
              <div className="stat-item">
                <ShieldCheck size={16} className="text-secondary" />
                <span className="numbers">5 Yrs</span>
                <span className="stat-label">Warranty</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
