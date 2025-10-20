import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '3rem', color: '#2c3e50', marginBottom: '50px', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
          Contact Us
        </h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#555', marginBottom: '60px' }}>
          Get in touch with us for any questions about SIMS or interior design services.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          {/* Contact Form */}
          <div style={{ background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '2rem', color: '#2c3e50', marginBottom: '30px' }}>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '15px', marginBottom: '20px', border: '2px solid #ecf0f1', borderRadius: '10px', fontSize: '1rem' }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '15px', marginBottom: '20px', border: '2px solid #ecf0f1', borderRadius: '10px', fontSize: '1rem' }}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{ width: '100%', padding: '15px', marginBottom: '20px', border: '2px solid #ecf0f1', borderRadius: '10px', fontSize: '1rem', resize: 'vertical' }}
              />
              <button
                type="submit"
                style={{ width: '100%', padding: '15px', background: '#3498db', color: 'white', border: 'none', borderRadius: '10px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div style={{ background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '2rem', color: '#2c3e50', marginBottom: '30px' }}>Get in Touch</h3>
            <div style={{ marginBottom: '25px' }}>
              <h4 style={{ color: '#3498db', marginBottom: '10px' }}>📧 Email</h4>
              <p style={{ color: '#555', fontSize: '1.1rem' }}>sewmini.ks@example.com</p>
            </div>
            <div style={{ marginBottom: '25px' }}>
              <h4 style={{ color: '#3498db', marginBottom: '10px' }}>📱 Phone</h4>
              <p style={{ color: '#555', fontSize: '1.1rem' }}>+94 77 123 4567</p>
            </div>
            <div style={{ marginBottom: '25px' }}>
              <h4 style={{ color: '#3498db', marginBottom: '10px' }}>📍 Address</h4>
              <p style={{ color: '#555', fontSize: '1.1rem' }}>
                Faculty of Information Technology<br />
                University of Moratuwa<br />
                Moratuwa, Sri Lanka
              </p>
            </div>
            <div style={{ marginTop: '40px' }}>
              <Link to="/auth" style={{
                display: 'inline-block',
                padding: '15px 30px',
                background: '#27ae60',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '10px',
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}>
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;