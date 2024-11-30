import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="logo">
          <span className="icon">🦌</span> THE CHRISTMAS BOUTIQUE
        </h2>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop All</a></li>
            <li><a href="#trees">Christmas Trees</a></li>
            <li><a href="#ornaments">Unique Ornaments</a></li>
            <li><a href="#lights">Holiday Lights</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer-middle">
        <p>Follow us and have a Merry Christmas</p>
        <div className="social-links">
          <a href="#facebook">Facebook</a>
          <a href="#instagram">Instagram</a>
          <a href="#pinterest">Pinterest</a>
        </div>
      </div>
      <div className="footer-bottom">
        <ul>
          <li><a href="#shipping">Shipping & Returns</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <p>© 2035 by The Christmas Boutique. Powered and secured by <a href="https://www.wix.com">Wix</a>.</p>
      </div>
    </footer>
  );
};

export default Footer;

