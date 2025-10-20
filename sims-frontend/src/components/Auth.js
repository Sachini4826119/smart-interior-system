import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    password: '',
    role: 'CUSTOMER'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';
      const payload = isRegister ? {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        email: formData.email,
        password: formData.password,
        role: formData.role
      } : { email: formData.email, password: formData.password };

      const response = await axios.post(`http://localhost:8080${endpoint}`, payload);
      if (isRegister) {
        alert('Registered! Please login.');
        setIsRegister(false);
      } else {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify({ 
          name: response.data.name, 
          email: response.data.email, 
          role: response.data.role 
        }));
        window.location.href = '/dashboard';
      }
    } catch (err) {
      setError(err.response?.data || 'Error occurred.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '2rem', background: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>{isRegister ? 'Register' : 'Login'}</h2>
      {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #bdc3c7', borderRadius: '5px' }} />
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} style={{ width: '48%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #bdc3c7', borderRadius: '5px' }} />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} style={{ width: '48%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #bdc3c7', borderRadius: '5px' }} />
          </>
        )}
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #bdc3c7', borderRadius: '5px' }} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #bdc3c7', borderRadius: '5px' }} />
        {isRegister && (
          <select name="role" value={formData.role} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #bdc3c7', borderRadius: '5px' }}>
            <option value="CUSTOMER">Customer (Homeowner)</option>
            <option value="DESIGNER">Designer</option>
            <option value="SUPPLIER">Supplier</option>
            <option value="ADMIN">Admin</option>
          </select>
        )}
        <button type="submit" style={{ width: '100%', padding: '1rem', background: '#3498db', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1.1rem', cursor: 'pointer' }}>
          {isRegister ? 'Register' : 'Login'}
        </button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)} style={{ width: '100%', marginTop: '1rem', padding: '0.75rem', background: '#bdc3c7', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Switch to {isRegister ? 'Login' : 'Register'}
      </button>
    </div>
  );
};

export default Auth;