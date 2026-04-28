 import { useState, useEffect } from 'react';

import { Navbar, Container, Nav } from 'react-bootstrap';

import { Link, useLocation } from 'react-router-dom';


export default function NavbarComponent() {


  const [expanded, setExpanded] = useState(false);

  const location = useLocation();


  // AUTO CLOSE WHEN ROUTE CHANGES

  useEffect(() => {

    setExpanded(false);

  }, [location]);


  return (

    <Navbar

      expand="lg"

      fixed="top"

      expanded={expanded}

      style={{

        background: "rgba(0,0,0,0.6)",

        backdropFilter: "blur(10px)",

        borderBottom: "1px solid rgba(197,160,89,0.3)"

      }}

    >


      <Container>


        {/* LOGO */}

        <Navbar.Brand

          as={Link}

          to="/"

          style={{

            color: "#C5A059",

            fontFamily: "Playfair Display, serif",

            letterSpacing: "2px",

            fontWeight: "bold"

          }}

        >

          LUXEVER

        </Navbar.Brand>


        {/* TOGGLE BUTTON */}

        <Navbar.Toggle

          aria-controls="basic-navbar-nav"

          onClick={() => setExpanded(expanded ? false : true)}

          style={{ borderColor: "#C5A059" }}

        />


        <Navbar.Collapse id="basic-navbar-nav">


          <Nav className="ms-auto">


            {[

              { name: "HOME", path: "/" },

              { name: "COLLECTION", path: "/collection" },

              { name: "ABOUT", path: "/about" },

              { name: "CONTACT US", path: "/contact" }

            ].map((item, index) => (

              <Nav.Link

                key={index}

                as={Link}

                to={item.path}

                onClick={() => setExpanded(false)}   // CLOSE ON CLICK

                className="nav-link-custom"

                style={{

                  color: "#ccc",

                  marginLeft: "15px",

                  transition: "0.3s"

                }}

                onMouseOver={(e) => (e.target.style.color = "#C5A059")}

                onMouseOut={(e) => (e.target.style.color = "#ccc")}

              >

                {item.name}

              </Nav.Link>

            ))}


          </Nav>


        </Navbar.Collapse>


      </Container>

    </Navbar>

  );

} 