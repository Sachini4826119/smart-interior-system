import React from 'react';

const AboutUs = () => (
  <section style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '3rem', color: '#2c3e50', marginBottom: '50px', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
        About Us
      </h2>
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img 
            src="/images/about-image.jpg"  // Add your image (Unsplash "modern interior team")
            alt="About SIMS" 
            style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
          />
        </div>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h3 style={{ fontSize: '2rem', color: '#3498db', marginBottom: '20px' }}>
            Welcome to SIMS - Smart Interior Management System
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
            SIMS is a modern web-based platform designed for efficient interior design management. Built for homeowners, designers, and suppliers, it leverages AI for personalized design suggestions and 3D rendering previews, streamlining the process from concept to completion.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
            Key Features:
          </p>
          <ul style={{ textAlign: 'left', fontSize: '1rem', color: '#666', listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>AI-powered design suggestions based on room dimensions, budget, and style preferences.</li>
            <li>Interactive 3D room previews using Three.js for realistic visualization.</li>
            <li>Seamless project submission and collaboration between customers, designers, and suppliers.</li>
            <li>Secure JWT authentication for user roles (customer, designer, supplier, admin).</li>
          </ul>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
            Developed as part of the Bachelor of Information Technology (External Degree) at the University of Moratuwa, Faculty of Information Technology, by Sewmini K.S. (E/24/403). This system revolutionizes traditional interior design by integrating AI and real-time collaboration.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;