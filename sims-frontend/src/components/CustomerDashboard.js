import React, { useState, useEffect } from 'react';

const CustomerDashboard = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [editUser, setEditUser] = useState({ name: '', phone: '', address: '' });
  const [projects] = useState([
    { 
      id: 1, 
      name: 'Living Room Redesign', 
      room: 'Living Room', 
      status: 'In Progress', 
      progress: 65, 
      budget: 500000,
      image: '/images/living-room-modern.jpg'
    },
    { 
      id: 2, 
      name: 'Master Bedroom', 
      room: 'Bedroom', 
      status: 'Planning', 
      progress: 25, 
      budget: 350000,
      image: '/images/bedroom-luxury.jpg'
    },
  ]);

  const [designers] = useState([
    { id: 1, name: 'Nimal Perera', rating: 4.9, projects: 45, image: '/images/designer-1.jpg' },
    { id: 2, name: 'Kumari Silva', rating: 4.8, projects: 38, image: '/images/designer-2.jpg' },
    { id: 3, name: 'Rohan Fernando', rating: 4.7, projects: 52, image: '/images/designer-3.jpg' },
  ]);

  const [featuredDesigns] = useState([
    { id: 1, title: 'Modern Minimalist', image: '/images/living-room-modern.jpg' },
    { id: 2, title: 'Luxury Classic', image: '/images/bedroom-luxury.jpg' },
    { id: 3, title: 'Contemporary Chic', image: '/images/kitchen-contemporary.jpg' },
  ]);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Get user info from localStorage or JWT token
    const token = localStorage.getItem('token');
    const userInfo = localStorage.getItem('user');
    
    if (token && userInfo) {
      const parsedUser = JSON.parse(userInfo);
      setUser(parsedUser);
      setEditUser({ 
        name: parsedUser.name || '', 
        phone: parsedUser.phone || '', 
        address: parsedUser.address || '' 
      });
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCreateProject = () => {
    console.log('Navigate to Create Project');
  };

  const handleContinueProject = () => {
    console.log('Navigate to Projects List');
  };

  const handleProjectClick = (projectId) => {
    console.log('Open project:', projectId);
  };

  const handleProfileEdit = () => {
    setShowProfileEdit(true);
  };

  const handleProfileSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editUser)
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setShowProfileEdit(false);
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };

  const handleProfileCancel = () => {
    setEditUser({ 
      name: user.name || '', 
      phone: user.phone || '', 
      address: user.address || '' 
    });
    setShowProfileEdit(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundContainer}>
        <div style={{...styles.blob1, transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`}} />
        <div style={{...styles.blob2, transform: `translate(${-scrollY * 0.08}px, ${-scrollY * 0.06}px)`}} />
      </div>

      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logoSection}>
            <div style={styles.logoIcon}>
              🏠
            </div>
            <div>
              <h1 style={styles.logoTitle}>InteriorAI</h1>
              <p style={styles.logoSubtitle}>Design Your Dream Space</p>
            </div>
          </div>
          <div style={styles.headerActions}>
            <button style={styles.iconButton}>
              🔔
              <span style={styles.notificationDot}></span>
            </button>
            <button style={styles.iconButton}>
              ⚙️
            </button>
            <div style={styles.userProfile}>
              <div style={styles.avatar}>
                👤
              </div>
              <div style={styles.userInfo}>
                <p style={styles.userName}>{user.name || 'User'}</p>
                <p style={styles.userRole}>Customer</p>
              </div>
              <button onClick={handleProfileEdit} style={styles.editProfileButton}>
                ✏️
              </button>
            </div>
          </div>
        </div>
      </header>

      <main style={styles.mainContent}>
        <div style={styles.welcomeSection}>
          <h2 style={styles.welcomeTitle}>
            Welcome Back, {user.name || 'User'}! <span style={styles.waveEmoji}>👋</span>
          </h2>
          <p style={styles.welcomeSubtitle}>Ready to bring your interior design dreams to life?</p>
        </div>

        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statHeader}>
              <div style={{...styles.statIcon, background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'}}>
                📁
              </div>
              <span style={styles.statNumber}>2</span>
            </div>
            <h3 style={styles.statLabel}>Active Projects</h3>
            <div style={styles.statBadge}>
              📈
              <span>+1 this month</span>
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statHeader}>
              <div style={{...styles.statIcon, background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'}}>
                📈
              </div>
              <span style={styles.statNumber}>45%</span>
            </div>
            <h3 style={styles.statLabel}>Average Progress</h3>
            <div style={styles.statBadge}>
              📈
              <span>+12% from last week</span>
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statHeader}>
              <div style={{...styles.statIcon, background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)'}}>
                📷
              </div>
              <span style={styles.statNumber}>12</span>
            </div>
            <h3 style={styles.statLabel}>3D Visualizations</h3>
            <div style={styles.statBadge}>
              ✨
              <span>3 new renders ready</span>
            </div>
          </div>
        </div>

        <div style={styles.actionGrid}>
          <button style={styles.createProjectCard} onClick={handleCreateProject}>
            <div style={styles.cardOverlay}></div>
            <div style={styles.floatingParticles}>
              <div style={{...styles.particle, top: '40px', left: '40px'}}></div>
              <div style={{...styles.particle, top: '80px', right: '80px'}}></div>
              <div style={{...styles.particle, bottom: '80px', left: '80px'}}></div>
            </div>
            <div style={styles.cardContent}>
              <div style={styles.createIcon}>
                ➕
              </div>
              <h3 style={styles.cardTitle}>Create New Project</h3>
              <p style={styles.cardDescription}>Start designing your dream interior with AI assistance</p>
              <div style={styles.cardAction}>
                <span>Get Started</span>
                ➡️
              </div>
            </div>
          </button>

          <button style={styles.continueProjectCard} onClick={handleContinueProject}>
            <div style={styles.cardContent}>
              <div style={styles.continueIcon}>
                📁
              </div>
              <h3 style={{...styles.cardTitle, color: '#1f2937'}}>Continue Project</h3>
              <p style={{...styles.cardDescription, color: '#6b7280'}}>Resume working on your existing interior designs</p>
              <div style={{...styles.cardAction, color: '#4f46e5'}}>
                <span>View Projects</span>
                ➡️
              </div>
            </div>
          </button>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h3 style={styles.sectionTitle}>
              Recent Projects
              ✨
            </h3>
            <button style={styles.viewAllButton}>
              View All
              ➡️
            </button>
          </div>

          <div style={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.id} style={styles.projectCard} onClick={() => handleProjectClick(project.id)}>
                <div style={styles.projectImageContainer}>
                  <img 
                    src={project.image} 
                    alt={project.name}
                    style={styles.projectImage}
                    onError={(e) => {
                      e.target.src = '/images/living-room-modern.jpg';
                    }}
                  />
                  <div style={styles.projectImageOverlay}></div>
                  <div style={styles.projectStatus}>
                    <span style={project.status === 'In Progress' ? styles.statusInProgress : styles.statusPlanning}>
                      {project.status}
                    </span>
                  </div>
                  <div style={styles.projectInfo}>
                    <h4 style={styles.projectName}>{project.name}</h4>
                    <p style={styles.projectRoom}>{project.room}</p>
                  </div>
                </div>

                <div style={styles.projectDetails}>
                  <div style={styles.progressSection}>
                    <div style={styles.progressHeader}>
                      <span style={styles.progressLabel}>Progress</span>
                      <span style={styles.progressValue}>{project.progress}%</span>
                    </div>
                    <div style={styles.progressBar}>
                      <div style={{...styles.progressFill, width: `${project.progress}%`}}>
                        <div style={styles.progressShimmer}></div>
                      </div>
                    </div>
                  </div>

                  <div style={styles.projectFooter}>
                    <div>
                      <p style={styles.budgetLabel}>Budget</p>
                      <p style={styles.budgetValue}>Rs. {project.budget.toLocaleString()}</p>
                    </div>
                    <button style={styles.continueButton}>
                      Continue
                      ➡️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h3 style={styles.sectionTitle}>
              🏆
              Top Designers
            </h3>
          </div>

          <div style={styles.designersGrid}>
            {designers.map((designer) => (
              <div key={designer.id} style={styles.designerCard}>
                <div style={styles.designerContent}>
                  <div style={styles.designerImageContainer}>
                    <img 
                      src={designer.image} 
                      alt={designer.name}
                      style={styles.designerImage}
                      onError={(e) => {
                        e.target.src = '/images/person.jpg';
                      }}
                    />
                    <div style={styles.designerRating}>
                      ⭐
                      {designer.rating}
                    </div>
                  </div>
                  <h4 style={styles.designerName}>{designer.name}</h4>
                  <p style={styles.designerProjects}>{designer.projects} Projects</p>
                  <button style={styles.designerButton}>View Profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.featuredSection}>
          <h3 style={styles.sectionTitle}>
            📷
            Trending Designs
          </h3>
          <div style={styles.featuredGrid}>
            {featuredDesigns.map((design) => (
              <div key={design.id} style={styles.featuredCard}>
                <img 
                  src={design.image} 
                  alt={design.title}
                  style={styles.featuredImage}
                  onError={(e) => {
                    e.target.src = '/images/living-room-modern.jpg';
                  }}
                />
                <div style={styles.featuredOverlay}></div>
                <div style={styles.featuredContent}>
                  <h4 style={styles.featuredTitle}>{design.title}</h4>
                  <button style={styles.featuredButton}>
                    View Details
                    ➡️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Profile Edit Modal */}
      {showProfileEdit && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3 style={styles.modalTitle}>Edit Profile</h3>
            <div style={styles.modalContent}>
              <input
                type="text"
                placeholder="Name"
                value={editUser.name}
                onChange={(e) => setEditUser({...editUser, name: e.target.value})}
                style={styles.modalInput}
              />
              <input
                type="tel"
                placeholder="Phone"
                value={editUser.phone}
                onChange={(e) => setEditUser({...editUser, phone: e.target.value})}
                style={styles.modalInput}
              />
              <input
                type="text"
                placeholder="Address"
                value={editUser.address}
                onChange={(e) => setEditUser({...editUser, address: e.target.value})}
                style={styles.modalInput}
              />
              <div style={styles.modalButtons}>
                <button onClick={handleProfileSave} style={styles.saveButton}>
                  Save Changes
                </button>
                <button onClick={handleProfileCancel} style={styles.cancelButton}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #ddd6fe 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundContainer: {
    position: 'fixed',
    inset: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
  },
  blob1: {
    position: 'absolute',
    width: '384px',
    height: '384px',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))',
    borderRadius: '50%',
    filter: 'blur(80px)',
    top: '10%',
    left: '5%',
    transition: 'transform 0.1s ease-out',
  },
  blob2: {
    position: 'absolute',
    width: '384px',
    height: '384px',
    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))',
    borderRadius: '50%',
    filter: 'blur(80px)',
    bottom: '10%',
    right: '5%',
    transition: 'transform 0.1s ease-out',
  },
  header: {
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(229, 231, 235, 0.5)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  },
  headerContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(79, 70, 229, 0.3)',
    transition: 'transform 0.3s',
  },
  logoTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: 0,
  },
  logoSubtitle: {
    fontSize: '12px',
    color: '#6b7280',
    margin: 0,
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  iconButton: {
    padding: '8px',
    background: 'transparent',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.3s',
  },
  notificationDot: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    width: '8px',
    height: '8px',
    background: '#ef4444',
    borderRadius: '50%',
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingLeft: '16px',
    borderLeft: '1px solid #e5e7eb',
  },
  avatar: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  userName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1f2937',
    margin: 0,
  },
  userRole: {
    fontSize: '12px',
    color: '#6b7280',
    margin: 0,
  },
  mainContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '32px 24px',
    position: 'relative',
    zIndex: 10,
  },
  welcomeSection: {
    marginBottom: '32px',
  },
  welcomeTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  waveEmoji: {
    display: 'inline-block',
  },
  welcomeSubtitle: {
    fontSize: '18px',
    color: '#6b7280',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  statCard: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(229, 231, 235, 0.5)',
    transition: 'all 0.3s',
    cursor: 'pointer',
  },
  statHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  statIcon: {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  statNumber: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1f2937',
  },
  statLabel: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#6b7280',
    margin: 0,
  },
  statBadge: {
    marginTop: '8px',
    fontSize: '12px',
    color: '#10b981',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  actionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  createProjectCard: {
    position: 'relative',
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)',
    borderRadius: '24px',
    padding: '32px',
    textAlign: 'left',
    overflow: 'hidden',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 20px 25px rgba(79, 70, 229, 0.3)',
    transition: 'all 0.5s',
  },
  continueProjectCard: {
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderRadius: '24px',
    padding: '32px',
    textAlign: 'left',
    overflow: 'hidden',
    border: '1px solid #e5e7eb',
    cursor: 'pointer',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.5s',
  },
  cardOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
    transform: 'translateX(-100%)',
  },
  floatingParticles: {
    position: 'absolute',
    inset: 0,
    opacity: 0.2,
  },
  particle: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    background: 'white',
    borderRadius: '50%',
  },
  cardContent: {
    position: 'relative',
    zIndex: 10,
  },
  createIcon: {
    width: '64px',
    height: '64px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  continueIcon: {
    width: '64px',
    height: '64px',
    background: 'linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '8px',
  },
  cardDescription: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '16px',
  },
  cardAction: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontWeight: '500',
    gap: '8px',
  },
  section: {
    marginBottom: '32px',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: 0,
  },
  viewAllButton: {
    color: '#4f46e5',
    fontSize: '14px',
    fontWeight: '500',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '24px',
  },
  projectCard: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(229, 231, 235, 0.5)',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  projectImageContainer: {
    position: 'relative',
    height: '192px',
    overflow: 'hidden',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  projectImageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
  },
  projectStatus: {
    position: 'absolute',
    top: '16px',
    right: '16px',
  },
  statusInProgress: {
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '500',
    background: 'rgba(59, 130, 246, 0.9)',
    color: 'white',
  },
  statusPlanning: {
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '500',
    background: 'rgba(234, 179, 8, 0.9)',
    color: 'white',
  },
  projectInfo: {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    color: 'white',
  },
  projectName: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 0 4px 0',
  },
  projectRoom: {
    fontSize: '14px',
    margin: 0,
  },
  projectDetails: {
    padding: '24px',
  },
  progressSection: {
    marginBottom: '16px',
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  progressLabel: {
    fontSize: '14px',
    color: '#6b7280',
    fontWeight: '500',
  },
  progressValue: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#1f2937',
  },
  progressBar: {
    width: '100%',
    height: '10px',
    background: '#e5e7eb',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)',
    borderRadius: '10px',
    position: 'relative',
  },
  progressShimmer: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
  },
  projectFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '16px',
    borderTop: '1px solid #e5e7eb',
  },
  budgetLabel: {
    fontSize: '12px',
    color: '#6b7280',
    margin: '0 0 4px 0',
  },
  budgetValue: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#1f2937',
    margin: 0,
  },
  continueButton: {
    padding: '10px 20px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s',
  },
  designersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
  },
  designerCard: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(229, 231, 235, 0.5)',
    transition: 'all 0.3s',
  },
  designerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  designerImageContainer: {
    position: 'relative',
    marginBottom: '16px',
  },
  designerImage: {
    width: '96px',
    height: '96px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid rgba(79, 70, 229, 0.2)',
  },
  designerRating: {
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '4px 12px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  designerName: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#1f2937',
    margin: '0 0 4px 0',
  },
  designerProjects: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '12px',
  },
  designerButton: {
    width: '100%',
    padding: '10px 16px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  featuredSection: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderRadius: '24px',
    padding: '32px',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(229, 231, 235, 0.5)',
  },
  featuredGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginTop: '24px',
  },
  featuredCard: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    height: '256px',
    cursor: 'pointer',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s',
  },
  featuredOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%)',
    opacity: 0,
    transition: 'opacity 0.3s',
  },
  featuredContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '24px',
    color: 'white',
    transform: 'translateY(16px)',
    transition: 'transform 0.3s',
  },
  featuredTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  featuredButton: {
    padding: '8px 16px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s',
  },
  editProfileButton: {
    padding: '8px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '8px',
    transition: 'all 0.3s',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    background: 'white',
    borderRadius: '16px',
    padding: '32px',
    maxWidth: '400px',
    width: '90%',
    boxShadow: '0 20px 25px rgba(0, 0, 0, 0.3)',
  },
  modalTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '24px',
    textAlign: 'center',
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  modalInput: {
    padding: '12px 16px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'border-color 0.3s',
  },
  modalButtons: {
    display: 'flex',
    gap: '12px',
    marginTop: '16px',
  },
  saveButton: {
    flex: 1,
    padding: '12px 24px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  cancelButton: {
    flex: 1,
    padding: '12px 24px',
    background: '#e5e7eb',
    color: '#374151',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
};

export default CustomerDashboard;