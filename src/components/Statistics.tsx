"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Statistics.css";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "K+", label: "Patients Served" },
  { value: 200, suffix: "+", label: "Premium Products" },
  { value: 98, suffix: "%", label: "Success Rate" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);

  return <span className="numbers">{count}{suffix}</span>;
}

export default function Statistics() {
  return (
    <section className="statistics-section">
      <div className="section-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stat-value gradient-text">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
