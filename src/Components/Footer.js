import React from "react";
import { Link, memo } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(to right, #232526, #414345)",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        <div style={{ maxWidth: "300px" }}>
          <h3 style={{ color: "#ffcc00", marginBottom: "10px" }}>Ice Cream Delight</h3>
          <p style={{ fontSize: "14px", opacity: "0.8" }}>
            Serving happiness, one scoop at a time. Experience the best flavors in town!
          </p>
        </div>

        <div>
          <h4 style={{ textDecoration: "underline", marginBottom: "10px" }}>Quick Links</h4>
          <p><Link to="/about" style={linkStyle}>About Us</Link></p>
          <p><Link to="/services" style={linkStyle}>Services</Link></p>
          <p><Link to="/contact" style={linkStyle}>Contact</Link></p>
          <p><Link to="/privacy" style={linkStyle}>Privacy Policy</Link></p>
        </div>

        <div>
          <h4 style={{ textDecoration: "underline", marginBottom: "10px" }}>Follow Us</h4>
          <div style={{ display: "flex", gap: "15px" }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <p style={{ marginTop: "20px", fontSize: "12px", opacity: "0.7" }}>
        © {new Date().getFullYear()} Ice Cream Delight. All Rights Reserved.
      </p>
    </footer>
  );
};

const linkStyle = {
  color: "#ffcc00",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "bold",
  transition: "color 0.3s",
};

const iconStyle = {
  color: "#ffcc00",
  fontSize: "20px",
  textDecoration: "none",
  transition: "color 0.3s",
};
export default memo(Footer);
