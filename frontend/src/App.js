// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ClientLogin from './components/ClientLogin';
import Locations from './components/Locations';
import Footer from './components/Footer';
import Register from './components/Register';
import ScrollToTop from './components/ScrollToTop';
import Careers from './components/Careers';
import WhyChooseUs from './components/WhyChooseUs';
import Logistics from './components/Logistics';
import AdminDashboard from './components/AdminDashboard';
import Profile from './components/Profile';
import Settings from './components/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/client-login" element={<ClientLogin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
