import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">

        <div className="footer-grid">

          {/* Logo & About */}
          <div className="footer-column">
            <h3>Surya Trust</h3>

            <p>
              Empowering communities through
              education, healthcare and social
              welfare initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-column">
            <h4>Programs</h4>

            <ul>
              <li>Medical</li>
              <li>Education</li>
              <li>Trust</li>
              <li>Events</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4>Contact</h4>

            <ul>
              <li>Madurai, Tamil Nadu</li>
              <li>+91 9876543210</li>
              <li>info@suryatrust.com</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Surya Trust. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;