import React from 'react';
import './sixth.css'; // Add styles in a separate CSS file or inline

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-sections">
        {/* Features */}
        <div className="footer-column">
          <h4>Features</h4>
          <ul>
            <li>Strategize</li>
            <li>Collaboration</li>
            <li>Tracking</li>
            <li>Reporting</li>
          </ul>
        </div>

        {/* What's in it for you */}
        <div className="footer-column">
          <h4>What's in it for you?</h4>
          <h5>By Role</h5>
          <ul>
            <li>CFOs and Directors of Finance</li>
            <li>Controllers</li>
            <li>AR Managers</li>
            <li>Collection Teams</li>
            <li>CSMs, AEs and AMs</li>
          </ul>
          <h5>By Tech Stack</h5>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Webinars</li>
            <li>The Casheroes</li>
            <li>ROI Calculator</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Book a demo</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact us</h4>
          <ul>
            <li><a href="mailto:hello@growfin.ai">hello@growfin.ai</a></li>
            <li>3082, Moser Way, Marietta, GA 30060</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Terms of use</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><i className="fab fa-linkedin"></i></a> {/* Add your social media links */}
          <a href="#"><i className="fab fa-x"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <p>Copyright © 2023 Growfin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
