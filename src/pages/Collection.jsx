import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Collection() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #0f0f0f, #1a1a1a, #000)",
      minHeight: "100vh",
      color: "white"
    }}>
      <Container className="py-5">

        {/* Heading */}
        <h2 
          className="text-center mb-5"
          style={{
            color: '#C5A059',
            fontFamily: 'Playfair Display, serif',
            letterSpacing: "3px"
          }}
        >
          OUR COLLECTION
        </h2>

        <Row>
          {products.map((product) => (
            /* Yahan xs={6} add kiya hai taake mobile par 2 columns ban jayein */
            <Col key={product.id} xs={6} md={4} lg={3} className="mb-4">

              <Card 
                className="h-100 text-white border-0"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  transition: "0.4s",
                  cursor: "pointer"
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.6)";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >

                {/* Image */}
                <div style={{ overflow: "hidden" }}>
                  <Card.Img 
                    variant="top" 
                    src={product.img}
                    style={{
                      height: "200px", // Mobile ke liye height thodi adjust ki
                      objectFit: "cover",
                      transition: "0.4s"
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = "scale(1.08)"}
                    onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>

                {/* Body */}
                <Card.Body className="text-center p-2">

                  <p 
                    className="mb-1"
                    style={{
                      fontSize: '0.65rem', // Mobile par text size chota kiya
                      color: '#C5A059',
                      letterSpacing: "2px"
                    }}
                  >
                    {product.arabic}
                  </p>

                  <Card.Title style={{
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: "600",
                    fontSize: "0.9rem" // Mobile ke liye font size adjust kiya
                  }}>
                    {product.name}
                  </Card.Title>

                  <Card.Text className="text-secondary" style={{ fontSize: "0.75rem" }}>
                    Starting from
                  </Card.Text>

                  <h5 style={{ color: "#C5A059", fontSize: "1rem" }}>
                    PKR {product.prices["30ml"]}
                  </h5>

                  {/* Button */}
                  <Link 
                    to={`/product/${product.id}`} 
                    style={{ textDecoration: 'none' }}
                  >
                    <Button 
                      className="mt-2"
                      style={{
                        borderRadius: "30px",
                        padding: "5px 15px",
                        fontSize: "0.7rem", // Button size chota kiya
                        fontWeight: "bold",
                        background: "linear-gradient(45deg, #C5A059, #e6c07b)",
                        border: "none",
                        color: "#000",
                        transition: "0.3s"
                      }}
                      onMouseOver={e => e.currentTarget.style.opacity = "0.8"}
                      onMouseOut={e => e.currentTarget.style.opacity = "1"}
                    >
                      DETAILS
                    </Button>
                  </Link>

                </Card.Body>
              </Card>

            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}