import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { products } from '../data/products';

export default function ProductDetail() {

  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState("30ml");
  const [customer, setCustomer] = useState({ name: '', address: '' });

  if (!product)
    return <h2 className="text-center text-light mt-5">Product not found!</h2>;

  // 💎 FIXED WHATSAPP (APP + SAFE LINK)
  const handleOrder = () => {

    if (!customer.name || !customer.address) {
      alert("Please fill your details!");
      return;
    }

    const message = `LUXEVER ORDER
Product: ${product.name}
Size: ${selectedSize}
Price: ${product.prices[selectedSize]}
Name: ${customer.name}
Address: ${customer.address}`;

    const phone = "923291365772";

    const url = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`;

    // Try open WhatsApp app
    window.location.href = url;

    // fallback (browser)
    setTimeout(() => {
      window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }, 1200);
  };

  return (
    <div style={{
      background: "linear-gradient(135deg, #0f0f0f, #1a1a1a, #000)",
      minHeight: "100vh",
      color: "white"
    }}>

      <Container className="py-5">
        <Row className="align-items-center">

          {/* IMAGE */}
          <Col md={6} className="text-center">
            <img
              src={product.img}
              alt={product.name}
              className="img-fluid shadow-lg"
              style={{
                borderRadius: "20px",
                maxHeight: "450px",
                transition: "0.4s"
              }}
            />
          </Col>

          {/* DETAILS */}
          <Col md={6} className="mt-4 mt-md-0">

            <p style={{ color: '#C5A059', letterSpacing: "2px" }}>
              {product.arabic}
            </p>

            <h1 style={{
              fontWeight: "700",
              letterSpacing: "1px"
            }}>
              {product.name}
            </h1>

            <h3 style={{ color: "#C5A059" }}>
              PKR {product.prices[selectedSize]}
            </h3>

            <p className="text-secondary mt-3">
              {product.description ||
                "A premium oriental fragrance that defines luxury and elegance."}
            </p>

            {/* SIZE */}
            <div className="mt-4">
              <label className="mb-2">Select Volume:</label><br />

              {Object.keys(product.prices).map((size) => (
                <Button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    marginRight: "10px",
                    borderRadius: "30px",
                    padding: "6px 18px",
                    border: selectedSize === size ? "none" : "1px solid #C5A059",
                    background: selectedSize === size ? "#C5A059" : "transparent",
                    color: selectedSize === size ? "#000" : "#C5A059"
                  }}
                >
                  {size}
                </Button>
              ))}
            </div>

            {/* FORM */}
            <Form
              className="mt-4"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                padding: "25px",
                borderRadius: "15px",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  style={inputStyle}
                  onChange={(e) =>
                    setCustomer({ ...customer, name: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Shipping Address"
                  style={inputStyle}
                  onChange={(e) =>
                    setCustomer({ ...customer, address: e.target.value })
                  }
                />
              </Form.Group>

              <Button
                onClick={handleOrder}
                style={orderBtn}
              >
                ORDER ON WHATSAPP
              </Button>

            </Form>

          </Col>

        </Row>
      </Container>
    </div>
  );
}

/* INPUT STYLE */
const inputStyle = {
  background: "transparent",
  color: "white",
  border: "1px solid #555"
};

/* BUTTON STYLE */
const orderBtn = {
  width: "100%",
  padding: "12px",
  borderRadius: "30px",
  fontWeight: "bold",
  background: "linear-gradient(45deg, #C5A059, #e6c07b)",
  border: "none",
  color: "#000"
};