import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #0f0f0f, #1a1a1a, #000)",
      color: "#e0e0e0",
      minHeight: "100vh",
      // Padding ab responsive hai: screen ke hisaab se adjust hogi
      padding: "clamp(40px, 8vh, 100px) 0"
    }}>

      <Container>

        {/* HEADER */}
        <Row className="mb-5 text-center">
          <Col>
            <h1 style={{
              color: '#C5A059',
              textTransform: 'uppercase',
              letterSpacing: '4px',
              fontFamily: 'Playfair Display, serif',
              fontSize: "clamp(1.8rem, 5vw, 3rem)" // Mobile par text chota ho jayega
            }}>
              The Essence of LUXEVER
            </h1>

            <p className="mt-3" style={{
              color: '#aaa',
              letterSpacing: '2px',
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)"
            }}>
              Where Tradition Meets Timeless Luxury
            </p>
          </Col>
        </Row>

        {/* HERITAGE SECTION */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <h2 style={{
              color: '#C5A059',
              marginBottom: '20px',
              fontFamily: 'Playfair Display, serif'
            }}>
              Our Heritage
            </h2>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              LUXEVER was born from a passion for the ancient art of Arabic perfumery.
              A fragrance is not just a scent — it is identity, memory, and emotion.
            </p>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Using rare ingredients like Oud, Amber, and Musk, we create experiences
              that embody elegance and timeless sophistication.
            </p>
          </Col>

          {/* IMAGE */}
          <Col md={6}>
            <div style={{
              height: "clamp(300px, 40vh, 420px)", // Mobile par height kam, desktop par wahi
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
              border: "1px solid rgba(197,160,89,0.4)"
            }}>
              <img
                src="/logo.png"
                alt="LUXEVER Heritage"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.5s"
                }}
                onMouseOver={e => e.currentTarget.style.transform = "scale(1.08)"}
                onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
              />
            </div>
          </Col>
        </Row>

        {/* PHILOSOPHY */}
        <Row className="mt-5 text-center">
          <Col>
            <div style={{
              // Philosophy box ki padding mobile par choti kar di
              padding: "clamp(20px, 5vw, 50px)",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.1)"
            }}>
              <h2 style={{
                color: "#C5A059",
                marginBottom: "20px",
                fontFamily: "Playfair Display, serif"
              }}>
                Our Philosophy
              </h2>

              <p style={{
                maxWidth: "750px",
                margin: "0 auto",
                fontSize: "clamp(1rem, 3vw, 1.2rem)",
                fontStyle: "italic",
                lineHeight: "1.7",
                color: "#ddd"
              }}>
                "We don't follow trends — we define them. Our fragrances are crafted
                to inspire confidence, elegance, and a lasting impression."
              </p>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}