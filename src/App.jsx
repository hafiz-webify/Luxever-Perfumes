import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>

      {/* ALWAYS SCROLL TO TOP ON ROUTE CHANGE */}
      <ScrollToTop />

      {/* HEADER (PERSISTENT) */}
      <NavbarComponent />

      {/* PAGE ROUTES */}
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* COLLECTION */}
        <Route path="/collection" element={<Collection />} />

        {/* PRODUCT DETAIL */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />

        {/* OPTIONAL: 404 FALLBACK (VERY IMPORTANT) */}
        <Route
          path="*"
          element={
            <div style={{
              color: "white",
              textAlign: "center",
              padding: "100px"
            }}>
              <h2>404 - Page Not Found</h2>
            </div>
          }
        />

      </Routes>

      {/* FOOTER (PERSISTENT) */}
      <Footer />

    </Router>
  );
}

export default App;