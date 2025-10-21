import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => (
  <section style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '3rem', color: '#2c3e50', marginBottom: '50px', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
        Features
      </h2>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#555', marginBottom: '60px' }}>
        Discover how SIMS revolutionizes interior design with AI, 3D visualization, and seamless collaboration.
      </p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        <div style={{ 
          background: '#f8f9fa', 
          borderRadius: '10px', 
          padding: '30px', 
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)', 
          textAlign: 'center', 
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer'
        }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'; }}
           onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)'; }}>
          {/* Emoji icon removed */}
          <img 
            src="/images/ai-suggestion.jpg" 
            alt="AI Suggestions" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', marginBottom: '20px' }} 
          />
          <h3 style={{ fontSize: '1.5rem', color: '#3498db', marginBottom: '10px' }}>
            AI Design Suggestions
          </h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555' }}>
            Get personalized furniture & color recommendations based on your room dimensions, budget, and style preferences.
          </p>
        </div>
        <div style={{ 
          background: '#f8f9fa', 
          borderRadius: '10px', 
          padding: '30px', 
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)', 
          textAlign: 'center', 
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer'
        }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'; }}
           onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)'; }}>
          {/* 3D Preview icon removed */}
          <img 
            src="/images/3d-preview.jpg" 
            alt="3D Preview" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', marginBottom: '20px' }} 
          />
          <h3 style={{ fontSize: '1.5rem', color: '#3498db', marginBottom: '10px' }}>
            3D Room Previews
          </h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555' }}>
            Visualize your home with interactive 3D models using Three.js for realistic rendering and adjustments.
          </p>
        </div>
        <div style={{ 
          background: '#f8f9fa', 
          borderRadius: '10px', 
          padding: '30px', 
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)', 
          textAlign: 'center', 
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer'
        }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'; }}
           onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)'; }}>
          {/* Project Management icon removed */}
          <img 
            src="/images/project-management.jpg" 
            alt="Project Management" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', marginBottom: '20px' }} 
          />
          <h3 style={{ fontSize: '1.5rem', color: '#3498db', marginBottom: '10px' }}>
            Project Management
          </h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555' }}>
            Submit, track, and collaborate on designs with designers and suppliers in real-time.
          </p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Link to="/auth" style={{
          padding: '15px 30px',
          background: '#3498db',
          color: 'white',
          border: 'none',
          fontSize: '1.2rem',
          borderRadius: '50px',
          cursor: 'pointer',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'background 0.3s ease'
        }} onMouseEnter={(e) => e.currentTarget.style.background = '#2980b9'}
           onMouseLeave={(e) => e.currentTarget.style.background = '#3498db'}>
          Get Started Today
        </Link>
      </div>
    </div>
  </section>
);

export default Features;