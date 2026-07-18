"use client";

import { motion } from "framer-motion";
import { Truck, Shield, Stethoscope, PhoneCall } from "lucide-react";
import "./WhyChooseUs.css";

const features = [
  { icon: Truck, title: "Fast Delivery", desc: "Same-day dispatch for all equipment" },
  { icon: Shield, title: "Certified Products", desc: "FDA approved & clinical grade" },
  { icon: Stethoscope, title: "Clinical Experts", desc: "Respiratory therapists on staff" },
  { icon: PhoneCall, title: "24×7 Support", desc: "Round the clock patient care" }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose <span className="gradient-text">Us</span></h2>
          <p>We combine clinical excellence with premium patient care.</p>
        </motion.div>

        <div className="features-grid">
          {features.map((Feature, index) => (
            <motion.div 
              key={index}
              className="feature-card premium-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="icon-circle">
                <Feature.icon size={24} className="text-accent" />
              </div>
              <h3>{Feature.title}</h3>
              <p>{Feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
