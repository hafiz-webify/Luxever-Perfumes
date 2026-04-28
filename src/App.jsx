import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing Components
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Importing Pages
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* ScrollToTop ensure karta hai ke route change hone par page top se shuru ho */}
      <ScrollToTop />

      {/* HEADER (Persistent across all pages) */}
      <NavbarComponent />

      {/* MAIN CONTENT WRAPPER - Mobile friendly styling ke liye */}
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 FALLBACK */}
          <Route
            path="*"
            element={
              <div style={{
                color: "#333",
                textAlign: "center",
                padding: "100px 20px"
              }}>
                <h2>404 - Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
              </div>
            }
          />
        </Routes>
      </main>

      {/* FOOTER (Persistent across all pages) */}
      <Footer />
    </Router>
  );
}

export default App;