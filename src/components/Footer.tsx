import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Madhura <span className="gradient-text">Medical</span></h3>
          <p>Premium Sleep Therapy Equipment &amp; Clinical Solutions</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Why Choose Us</a></li>
            <li><a href="#">Clinical Trials</a></li>
            <li><a href="#">Contact Support</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Emergency Contact</h4>
          <p className="numbers">1-800-MADHURA</p>
          <p>support@madhuramedical.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Madhura Medical Equipments. All rights reserved.</p>
      </div>
    </footer>
  );
}
