import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
import Auth from './components/Auth';  // Handles register/login
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';  // New: Role-based dashboard
import { jwtDecode } from 'jwt-decode';  // npm install jwt-decode for token parsing

// Private Route HOC (guards dashboard)
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/auth" />;  // Redirect to login if no token
  return children;
};

// Role extraction utility
const getUserRole = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const decoded = jwtDecode(token);
  return decoded.role;  // e.g., 'CUSTOMER', 'DESIGNER', 'SUPPLIER', 'ADMIN'
};

function App() {
  const userRole = getUserRole();  // Get role for nav

  return (
    <Router>
      <div className="App">
        {/* Modern Navigation */}
        <nav style={{ background: 'white', padding: '1rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 1000 }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ margin: 0, fontSize: '2rem', color: '#2c3e50' }}>SIMS</h1>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
              <li><Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Home</Link></li>
              <li><Link to="/about-us" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>About Us</Link></li>
              <li><Link to="/features" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Features</Link></li>
              <li><Link to="/auth" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Register</Link></li>
              <li><Link to="/contact" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Contact</Link></li>
              {localStorage.getItem('token') && (
                <>
                  <li><Link to="/dashboard" style={{ textDecoration: 'none', color: '#3498db', fontWeight: '500' }}>Dashboard ({userRole})</Link></li>
                  <li><button onClick={() => { localStorage.removeItem('token'); window.location.href = '/'; }} style={{ textDecoration: 'none', color: '#e74c3c', fontWeight: '500', background: 'none', border: 'none' }}>Logout</button></li>
                </>
              )}
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;