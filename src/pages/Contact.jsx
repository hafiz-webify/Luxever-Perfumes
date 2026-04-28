import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleWhatsApp = () => {
    if (!form.name || !form.message) {
      alert("Please fill required fields!");
      return;
    }

    const msg = `*LUXEVER CONTACT MESSAGE*%0A
Name: ${form.name}%0A
Email: ${form.email}%0A
Message: ${form.message}`;

    window.open(`https://wa.me/923291365772?text=${msg}`, "_blank");
  };

  return (
    <div style={{
      background: "linear-gradient(135deg, #0f0f0f, #1a1a1a, #000)",
      minHeight: "100vh",
      color: "white",
      padding: "100px 0"
    }}>

      <Container>

        {/* HEADER */}
        <Row className="text-center mb-5">
          <Col>
            <h1 style={{
              fontFamily: "Playfair Display, serif",
              color: "#C5A059",
              letterSpacing: "4px"
            }}>
              CONTACT US
            </h1>

            <p style={{ color: "#aaa", letterSpacing: "2px" }}>
              We would love to hear from you
            </p>
          </Col>
        </Row>

        {/* FORM */}
        <Row className="justify-content-center">

          <Col md={7}>

            <div style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              padding: "40px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
            }}>

              <Form>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    style={inputStyle}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    style={inputStyle}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your Message *"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={inputStyle}
                  />
                </Form.Group>

                <Button
                  onClick={handleWhatsApp}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "30px",
                    fontWeight: "bold",
                    background: "linear-gradient(45deg, #C5A059, #e6c07b)",
                    border: "none",
                    color: "#000",
                    transition: "0.3s"
                  }}
                  onMouseOver={(e) => (e.target.style.opacity = "0.85")}
                  onMouseOut={(e) => (e.target.style.opacity = "1")}
                >
                  SEND VIA WHATSAPP
                </Button>

              </Form>

            </div>

          </Col>

        </Row>

        {/* INFO SECTION */}
        <Row className="text-center mt-5">

          {/* LOCATION */}
          <Col md={3} className="mb-4">
            <h5 style={{ color: "#C5A059" }}>Location</h5>
            <p style={{ color: "#aaa" }}>Pakistan</p>
          </Col>

          {/* PHONE */}
          <Col md={3} className="mb-4">
            <h5 style={{ color: "#C5A059" }}>Phone</h5>

            <a
              href="tel:+923291365772"
              style={linkStyle}
            >
              +92 329 1365772
            </a>
          </Col>

          {/* EMAIL */}
          <Col md={3} className="mb-4">
            <h5 style={{ color: "#C5A059" }}>Email</h5>

            <a
              href="mailto:malikzshan70@gmail.com"
              style={linkStyle}
            >
              Send Email
            </a>
          </Col>

          {/* SOCIAL */}
          <Col md={3} className="mb-4">
            <h5 style={{ color: "#C5A059" }}>Follow Us</h5>

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px"
            }}>

              <a href="https://facebook.com" target="_blank" style={linkStyle}>
                Facebook
              </a>

              <a href="https://instagram.com" target="_blank" style={linkStyle}>
                Instagram
              </a>

              <a href="https://tiktok.com" target="_blank" style={linkStyle}>
                TikTok
              </a>

            </div>
          </Col>

        </Row>

      </Container>
    </div>
  );
}

/* INPUT STYLE */
const inputStyle = {
  background: "transparent",
  border: "1px solid #555",
  color: "white",
  borderRadius: "10px",
  padding: "12px"
};

/* LINK STYLE */
const linkStyle = {
  color: "#aaa",
  textDecoration: "none",
  fontSize: "0.95rem",
  transition: "0.3s"
};