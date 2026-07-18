"use client";

import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    role: "Sleep Specialist",
    hospital: "General Hospital",
    text: "Madhura Medical Equipments provides the most reliable and premium sleep therapy devices. My patients report a 98% improvement in their sleep quality.",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Patient",
    hospital: "",
    text: "The CPAP machine I got changed my life. The glass UI and quiet operation make it feel like a premium Apple product rather than a medical device.",
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-container">
        <div className="section-header">
          <h2>Patient & Clinical <span className="gradient-text">Testimonials</span></h2>
          <p>Don't just take our word for it.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <motion.div 
              key={test.id}
              className="testimonial-card premium-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="stars text-accent">★★★★★</div>
              <p className="testimonial-text">"{test.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div>
                  <h4>{test.name}</h4>
                  <span>{test.role} {test.hospital && `• ${test.hospital}`}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
