"use client";

import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    role: "Pulmonologist",
    hospital: "Sanjeevan Hospital",
    text: "Madhura Medical Equipments provides the most reliable and premium sleep therapy devices. My patients report a 98% improvement in their sleep quality.",
    rating: 5
  },
  {
    id: 2,
    name: "Amit Patel",
    role: "Patient",
    hospital: "",
    text: "The CPAP machine I got changed my life. The sleek UI and quiet operation make it feel like a premium product rather than a medical device.",
    rating: 4
  },
  {
    id: 3,
    name: "Anjali Deshmukh",
    role: "Patient",
    hospital: "",
    text: "Excellent service and home delivery. The team explained how to use the BiPAP machine very clearly. Highly recommend Madhura Medical Equipments.",
    rating: 5
  },
  {
    id: 4,
    name: "Dr. Vikram Singh",
    role: "Sleep Specialist",
    hospital: "City Care Clinic",
    text: "I trust them for all my patients' sleep apnea requirements. Their devices are top-notch, and the post-sales support is unmatched in Pune.",
    rating: 5
  },
  {
    id: 5,
    name: "Sneha Kulkarni",
    role: "Patient",
    hospital: "",
    text: "I was struggling with sleep apnea for years. The DreamStation 2 I purchased from here is incredibly easy to use and has completely transformed my mornings.",
    rating: 4
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

        <div className="testimonials-carousel-wrapper">
          <div className="testimonials-carousel-track">
            {[...testimonials, ...testimonials].map((test, index) => (
              <div 
                key={`${test.id}-${index}`}
                className="testimonial-card premium-card"
              >
                <div className="stars text-accent">{test.rating === 5 ? "★★★★★" : "★★★★☆"}</div>
                <p className="testimonial-text">"{test.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div>
                    <h4>{test.name}</h4>
                    <span>{test.role} {test.hospital && `• ${test.hospital}`}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
