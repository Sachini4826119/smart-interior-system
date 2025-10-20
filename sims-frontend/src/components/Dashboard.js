import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import CustomerDashboard from './CustomerDashboard';

const Dashboard = () => {
  const [role, setRole] = useState('');
  const [roomDetails, setRoomDetails] = useState({ length: 0, width: 0, budget: 0, style: '' });
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setRole(decoded.role);
    }
    setLoading(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('http://localhost:8080/api/ai/generate-suggestion', roomDetails, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuggestions(response.data.suggestions || []);
    } catch (error) {
      alert('Error: ' + error.response?.data || error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>;

  // Role-based dashboard rendering
  if (role === 'CUSTOMER') {
    return <CustomerDashboard />;
  }

  // Default dashboard for other roles (DESIGNER, SUPPLIER, ADMIN)
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Dashboard - {role}</h2>
        <button onClick={logout} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px' }}>Logout</button>
      </div>
      <h3>AI Design Suggestions</h3>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
        <input type="number" placeholder="Length (m)" value={roomDetails.length} onChange={(e) => setRoomDetails({...roomDetails, length: parseFloat(e.target.value)})} required />
        <input type="number" placeholder="Width (m)" value={roomDetails.width} onChange={(e) => setRoomDetails({...roomDetails, width: parseFloat(e.target.value)})} required />
        <input type="number" placeholder="Budget (LKR)" value={roomDetails.budget} onChange={(e) => setRoomDetails({...roomDetails, budget: parseFloat(e.target.value)})} required />
        <input type="text" placeholder="Style (e.g., modern)" value={roomDetails.style} onChange={(e) => setRoomDetails({...roomDetails, style: e.target.value})} required />
        <button type="submit" style={{ padding: '1rem', background: '#3498db', color: 'white', border: 'none', borderRadius: '5px' }}>Get AI Suggestions</button>
      </form>
      <div>
        <h4>Suggestions:</h4>
        <ul>
          {suggestions.map((suggestion, index) => <li key={index}>{suggestion}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;