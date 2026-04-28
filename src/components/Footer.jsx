import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  // Mobile par responsive styling ke liye
  const isMobile = window.innerWidth < 768;

  return (
    <footer style={{
      background: "linear-gradient(135deg, #0f0f0f, #1a1a1a, #000)",
      color: "#ccc",
      paddingTop: isMobile ? "30px" : "60px", // Mobile par padding kam
      paddingBottom: "20px",
      borderTop: "1px solid rgba(197,160,89,0.3)"
    }}>

      <Container>
        <Row className="mb-3"> {/* mb-5 se mb-3 kar diya */}

          {/* BRAND */}
          <Col md={3} xs={12} className="mb-3">
            <h4 style={{ color: "#C5A059", fontFamily: "Playfair Display, serif", letterSpacing: "2px", marginBottom: "10px" }}>
              LUXEVER
            </h4>
            <p style={{ fontSize: "0.85rem", lineHeight: "1.5", marginBottom: "10px" }}>
              A premium fragrance brand inspired by Arabian perfumery. Elegance, luxury, and timeless scent.
            </p>
          </Col>

          {/* QUICK LINKS */}
          <Col md={3} xs={6} className="mb-3">
            <h6 style={{ color: "#C5A059", marginBottom: "10px" }}>Quick Links</h6>
            <div className="d-flex flex-column gap-1">
              <Link to="/" style={linkStyle}>Home</Link>
              <Link to="/collection" style={linkStyle}>Collection</Link>
              <Link to="/about" style={linkStyle}>About</Link>
              <Link to="/contact" style={linkStyle}>Contact</Link>
            </div>
          </Col>

          {/* CONTACT & SOCIAL (Grouped on mobile to save space) */}
          <Col md={3} xs={6} className="mb-3">
             <h6 style={{ color: "#C5A059", marginBottom: "10px" }}>Contact</h6>
             <div className="d-flex flex-column gap-1" style={{ fontSize: "0.85rem" }}>
                <a href="tel:+923291365772" style={linkStyle}>Call Now</a>
                <a href="mailto:malikzshan70@gmail.com" style={linkStyle}>Email Us</a>
                <a href="https://wa.me/923291365772" target="_blank" style={linkStyle}>WhatsApp</a>
             </div>
          </Col>

           {/* FOLLOW US */}
           <Col md={3} xs={12} className="mb-3">
            <h6 style={{ color: "#C5A059", marginBottom: "10px" }}>Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/share/1ChHTZa6Ya/" target="_blank" style={linkStyle}>FB</a>
              <a href="https://instagram.com" target="_blank" style={linkStyle}>IG</a>
              <a href="https://www.tiktok.com/@luxeverperfumes" target="_blank" style={linkStyle}>TikTok</a>
            </div>
          </Col>

        </Row>

        {/* BOTTOM */}
        <div style={{ height: "1px", background: "rgba(197,160,89,0.2)", marginBottom: "15px" }} />
        <div className="text-center pb-2" style={{ fontSize: "0.75rem" }}>
          <p className="mb-1">&copy; {new Date().getFullYear()} LUXEVER. All Rights Reserved.</p>
          <p>Designed by <span style={{ color: "#C5A059" }}>Websbyhafiz</span></p>
        </div>
      </Container>
    </footer>
  );
}

const linkStyle = {
  color: "#aaa",
  textDecoration: "none",
  fontSize: "0.85rem",
  transition: "0.3s"
};