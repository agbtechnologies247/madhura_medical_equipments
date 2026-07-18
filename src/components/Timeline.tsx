"use client";

import { motion } from "framer-motion";
import "./Timeline.css";

const steps = [
  { id: 1, title: "Book", desc: "Schedule a consultation." },
  { id: 2, title: "Assessment", desc: "Our experts evaluate your needs." },
  { id: 3, title: "Sleep Test", desc: "Take an FDA-approved home sleep test." },
  { id: 4, title: "Equipment", desc: "Receive your tailored therapy device." },
  { id: 5, title: "Follow Up", desc: "Continuous monitoring and support." }
];

export default function Timeline() {
  return (
    <section className="timeline-section">
      <div className="section-container">
        <div className="section-header">
          <h2>Your Journey to <span className="gradient-text">Better Sleep</span></h2>
        </div>
        
        <div className="timeline-container">
          <div className="vertical-line"></div>
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className="timeline-step"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-marker gradient-border-btn">{step.id}</div>
              <div className="timeline-content premium-card">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
