import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section style={{
    height: '100vh',
    background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/livingroom.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'serif',
    lineHeight: 1.2
  }}>
    <div style={{ maxWidth: '800px', padding: '20px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        SMART INTERIOR MANAGEMENT SYSTEM
      </h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
        FOR A
      </h2>
      <h2 style={{ fontSize: '3rem', marginBottom: '2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        HOME OF MODERN
      </h2>
      <h2 style={{ fontSize: '3rem', marginBottom: '2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        INTERIOR DESIGN
      </h2>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Prepared by: Sewmini K.S. (E/24/403)
      </p>
      <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
        Bachelor of Information Technology (External Degree) Faculty of Information Technology University of Moratuwa
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <Link to="/features" style={{
          padding: '1rem 2rem',
          background: '#3498db',
          color: 'white',
          border: 'none',
          fontSize: '1.2rem',
          borderRadius: '50px',
          cursor: 'pointer',
          textDecoration: 'none'
        }}>
          Explore Features
        </Link>
        <Link to="/auth" style={{
          padding: '1rem 2rem',
          background: 'transparent',
          color: 'white',
          border: '2px solid white',
          fontSize: '1.2rem',
          borderRadius: '50px',
          cursor: 'pointer',
          textDecoration: 'none'
        }}>
          Get Started
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;