import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Madhura <span className="gradient-text">Medical Equipments</span></h3>
          <p>Premium Sleep Therapy Equipment &amp; Clinical Solutions</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/centers">Centers</a></li>
            <li><a href="/contact">Contact Support</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Emergency Contact</h4>
          <p className="numbers">+91 - 9371676783</p>
          <p>madhuramedical@gmail.com</p>
          <p>madhuramedicalequipment.sleep@gmail.com</p>
        </div>

        <div className="footer-map" style={{ width: '100%', minWidth: '250px' }}>
          <h4>Our Location</h4>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', height: '150px', marginTop: '15px' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.6641219662137!2d73.824707!3d18.4535311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29538c26dbec7%3A0x6bba843ff43cf700!2sMahesh%20Galaxy!5e0!3m2!1sen!2sin!4v1712745000000!5m2!1sen!2sin" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 AGB Technologies LLP. All rights reserved.</p>
      </div>
    </footer>
  );
}
