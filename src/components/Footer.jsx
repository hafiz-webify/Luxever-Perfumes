import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(135deg, #0f0f0f, #1a1a1a, #000)",
      color: "#ccc",
      paddingTop: "60px",
      borderTop: "1px solid rgba(197,160,89,0.3)"
    }}>

      <Container>

        <Row className="mb-5">

          {/* BRAND */}
          <Col md={3} className="mb-4">
            <h4 style={{
              color: "#C5A059",
              fontFamily: "Playfair Display, serif",
              letterSpacing: "2px"
            }}>
              LUXEVER
            </h4>

            <p style={{ fontSize: "0.9rem", lineHeight: "1.7" }}>
              A premium fragrance brand inspired by Arabian perfumery.
              Elegance, luxury, and timeless scent experiences.
            </p>
          </Col>

          {/* QUICK LINKS */}
          <Col md={3} className="mb-4">
            <h6 style={{ color: "#C5A059", marginBottom: "15px" }}>
              Quick Links
            </h6>

            <div className="d-flex flex-column gap-2">
              <Link to="/" style={linkStyle}>Home</Link>
              <Link to="/collection" style={linkStyle}>Collection</Link>
              <Link to="/about" style={linkStyle}>About</Link>
              <Link to="/contact" style={linkStyle}>Contact</Link>
            </div>
          </Col>

          {/* CONTACT */}
          <Col md={3} className="mb-4">
            <h6 style={{ color: "#C5A059", marginBottom: "15px" }}>
              Contact
            </h6>

            <div style={{ fontSize: "0.9rem", lineHeight: "1.8" }}>

              {/* LOCATION */}
              <p>📍 Pakistan</p>

              {/* PHONE */}
              <a href="tel:+923291365772" style={linkStyle}>
                📞 Call Now
              </a>
              <br />

              {/* EMAIL */}
              <a href="mailto:malikzshan70@gmail.com" style={linkStyle}>
                ✉️ Email Us
              </a>
              <br />

              {/* WHATSAPP */}
              <a
                href="https://wa.me/923291365772"
                target="_blank"
                style={linkStyle}
              >
                💬 WhatsApp
              </a>

            </div>
          </Col>

          {/* SOCIAL MEDIA */}
          <Col md={3} className="mb-4">
            <h6 style={{ color: "#C5A059", marginBottom: "15px" }}>
              Follow Us
            </h6>

            <div className="d-flex flex-column gap-2">

              <a href="https://www.facebook.com/share/1ChHTZa6Ya/" target="_blank" style={linkStyle}>
                Facebook
              </a>

              <a href="https://instagram.com" target="_blank" style={linkStyle}>
                Instagram
              </a>

              <a href="https://www.tiktok.com/@luxeverperfumes" target="_blank" style={linkStyle}>
                TikTok
              </a>

            </div>
          </Col>

        </Row>

        {/* GOLD DIVIDER */}
        <div style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, #C5A059, transparent)",
          marginBottom: "20px"
        }} />

        {/* BOTTOM */}
        <Row className="text-center pb-3">
          <Col>

            <p className="mb-1" style={{ fontSize: "0.85rem" }}>
              &copy; {new Date().getFullYear()} LUXEVER. All Rights Reserved.
            </p>

            <p style={{ fontSize: "0.8rem" }}>
              Designed & Developed by{" "}
              <span style={{ color: "#C5A059" }}>
                Websbyhafiz
              </span>
            </p>

          </Col>
        </Row>

      </Container>
    </footer>
  );
}

/* LINK STYLE */
const linkStyle = {
  color: "#aaa",
  textDecoration: "none",
  fontSize: "0.9rem",
  transition: "0.3s"
};