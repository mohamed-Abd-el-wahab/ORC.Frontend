import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Competition from './pages/Competition';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Sponsorship from './pages/Sponsorship';
import Watch from './pages/Watch';
import Register from './components/Register';
import RegistrationSuccess from './components/RegistrationSuccess';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-gray-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registration-success" element={<RegistrationSuccess />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;