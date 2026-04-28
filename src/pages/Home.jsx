import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { Box, Stack, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  // Premium Button Style Object
  const premiumBtnStyle = {
    borderRadius: "30px",
    padding: "10px 30px",
    fontWeight: "bold",
    background: "linear-gradient(45deg, #C5A059, #e6c07b)",
    color: "#000",
    "&:hover": { 
      background: "linear-gradient(45deg, #e6c07b, #C5A059)",
      transform: "scale(1.05)" 
    },
    transition: "0.3s"
  };

  return (
    <div style={{
      background: "linear-gradient(135deg, #0f0f0f, #1a1a1a, #000)",
      color: "white"
    }}>

      {/* HERO SECTION */}
      <Carousel fade>
        {[
          { src: "https://cdn.mos.cms.futurecdn.net/VzUqgr8pfbNcfXrpzeVBPE.jpg" },
          { src: "/images/carousel.png" },
          { src: "/images/2nd.png" }
        ].map((slide, index) => (
          <Carousel.Item key={index}>
            <div style={{ position: "relative" }}>
              <img 
                className="d-block w-100" 
                src={slide.src} 
                alt="slide"
                style={{ height: "90vh", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.55)" }} />

              <Carousel.Caption>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="80vh">
                  <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "3rem", letterSpacing: "2px" }}>Luxury Fragrance</h1>
                  <p style={{ color: "#C5A059", letterSpacing: "3px" }}>ELEVATE YOUR PRESENCE</p>
                  <Stack spacing={2} direction="row" mt={3}>
                    <Link to="/collection" style={{ textDecoration: 'none' }}>
                      <Button sx={premiumBtnStyle}>SHOP NOW</Button>
                    </Link>
                  </Stack>
                </Box>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* NEW LOOK SECTION */}
      <Container fluid className="py-5">
        <h2 className="text-center mb-5" style={{ color: "#C5A059", fontFamily: "Playfair Display, serif", letterSpacing: "3px" }}>
          Designed to Define You
        </h2>
        <Row>
          {[
            "https://image.made-in-china.com/2f0j00kFebcABGQSoP/50ml-Fancy-Perfume-Bottle-for-Cosmetic-Square-Perfume-Oil-Original-Bottles-Packaging-Women-s-Perfume-Container.webp",
            "https://www.royalscotcrystal.com/media/catalog/product/p/e/perannrdcr_02_1000_1.jpg"
          ].map((item, i) => (
            <Col md={6} key={i} className="mb-4">
              <div style={{ position: "relative", overflow: "hidden", borderRadius: "20px" }}>
                <img 
                  src={item} 
                  alt="collection" 
                  style={{ width: "100%", height: "400px", objectFit: "cover", transition: "0.5s" }}
                  onMouseOver={e => e.currentTarget.style.transform = "scale(1.08)"}
                  onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                />
                {/* Button Overlay */}
                <div style={{ position: "absolute", bottom: "30px", width: "100%", textAlign: "center" }}>
                  <Link to="/collection" style={{ textDecoration: 'none' }}>
                    <Button sx={premiumBtnStyle}>SHOP NOW</Button>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* READY TO WEAR */}
      <Container className="py-5">
        <h2 className="text-center mb-5" style={{ color: "#C5A059", fontFamily: "Playfair Display, serif", letterSpacing: "3px" }}>
          Crafted for Elegance
        </h2>
        <Row>
          {[
            "/images/invectis.jpeg",
            "/images/misk.jpeg",
            "/images/Azaro.jpeg"
          ].map((item, i) => (
            <Col md={4} key={i} className="mb-4">
              <div style={{ position: "relative", overflow: "hidden", borderRadius: "20px" }}>
                <img 
                  src={item} 
                  alt="product"
                  style={{ width: "100%", height: "350px", objectFit: "cover", transition: "0.5s" }}
                  onMouseOver={e => e.currentTarget.style.transform = "scale(1.08)"}
                  onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                />
                {/* Button Overlay */}
                <div style={{ position: "absolute", bottom: "30px", width: "100%", textAlign: "center" }}>
                  <Link to="/collection" style={{ textDecoration: 'none' }}>
                    <Button sx={premiumBtnStyle}>SHOP NOW</Button>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;