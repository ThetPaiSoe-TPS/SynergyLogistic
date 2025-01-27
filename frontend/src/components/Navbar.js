import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { logos } from '../assets/images';  // Import logos object

function Navbar() {
  const [isSupplyChainOpen, setIsSupplyChainOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Only track if page is scrolled for background change
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      
      setIsLoggedIn(!!token);
      setIsAdmin(user.isAdmin || false);
      setCurrentUser(user);
      
      console.log('Auth Status:', { isLoggedIn: !!token, isAdmin: user.isAdmin }); // Debug log
    };

    checkAuthStatus();
    // Add event listener for storage changes
    window.addEventListener('storage', checkAuthStatus);
    return () => window.removeEventListener('storage', checkAuthStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setIsAdmin(false);
    setCurrentUser(null);
    navigate('/');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left side - Logo */}
        <div className="navbar-left">
          <a href="/" className="logo">
            <img 
              src={logos.synergy}  // Use synergy logo from logos object
              alt="Synergy Logistics" 
            />
            <h1>Synergy Logistics</h1>
          </a>
        </div>

        {/* Right side - Navigation items */}
        <div className="navbar-right">
          {/* Top row - Secondary navigation */}
          <div className="navbar-top">
            <div className="secondary-nav">
            <div className="nav-auth">
            {isLoggedIn ? (
              <div className="user-menu-container">
                <div 
                  className="user-menu-trigger"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <div className="user-avatar">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/456/456283.png" 
                      alt="User Avatar" 
                    />
                  </div>
                  <div className="user-info">
                    <span className="user-name">
                      {currentUser?.companyName || 'User'}
                    </span>
                    <span className="user-role">
                      {isAdmin ? 'Administrator' : 'Client'}
                    </span>
                  </div>
                  <i className={`fas fa-chevron-${isUserMenuOpen ? 'up' : 'down'}`}></i>
                </div>

                {isUserMenuOpen && (
                  <div className="user-menu">
                    <div className="user-menu-header">
                      <strong>{currentUser?.companyName}</strong>
                      <span>{currentUser?.email}</span>
                    </div>
                    
                    <div className="user-menu-items">

                      {isAdmin && (
                        <Link to="/admin" className="menu-item">
                          <i className="fas fa-user-shield"></i>
                          Admin Dashboard
                        </Link>
                      )}
                      <Link to="/profile" className="menu-item">
                        <i className="fas fa-user"></i>
                        My Profile
                      </Link>
                      <Link to="/settings" className="menu-item">
                        <i className="fas fa-cog"></i>
                        Settings
                      </Link>
                      <button onClick={handleLogout} className="menu-item logout">
                        <i className="fas fa-sign-out-alt"></i>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/client-login" className="login-btn">
                <i className="fas fa-sign-in-alt"></i>
                Login
              </Link>
            )}
          </div>
          
              <Link to="/client-login">Client Login</Link>
              <Link to="/locations">Locations</Link>
              <Link to="/careers" className="nav-link">CAREERS</Link>
              <button className="btn-contact">Contact Us</button>
              <button className="btn-quote">Get A Quote</button>
            </div>
          </div>

          {/* Bottom row - Main navigation */}
          <div className="navbar-bottom">
            <div className="main-nav">
              <div 
                className="nav-item dropdown"
                onMouseEnter={() => setIsSupplyChainOpen(true)}
                onMouseLeave={() => setIsSupplyChainOpen(false)}
              >
                <button className="nav-link dropdown-toggle">
                  SUPPLY CHAIN <span className="arrow">▼</span>
                </button>
                {isSupplyChainOpen && (
                  <div className="dropdown-menu">
                    <Link to="/supply-chain-overview" className="dropdown-item">Supply Chain Overview</Link>
                    <Link to="/warehousing-overview" className="dropdown-item">Warehousing Overview</Link>
                    <Link to="/warehouse-services" className="dropdown-item">Warehouse Services</Link>
                    <Link to="/warehouse-locations" className="dropdown-item">Warehouse Locations</Link>
                    <Link to="/logistics-overview" className="dropdown-item">Logistics Overview</Link>
                    <Link to="/logistics-services" className="dropdown-item">Logistics Services</Link>
                    <Link to="/logistics-certifications" className="dropdown-item">Logistics Certifications</Link>
                    <Link to="/why-synergy" className="dropdown-item">Why Synergy?</Link>
                  </div>
                )}
              </div>
              <div 
                className="nav-item dropdown"
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                <button className="nav-link dropdown-toggle">
                  INDUSTRIES <span className="arrow">▼</span>
                </button>
                {isIndustriesOpen && (
                  <div className="dropdown-menu">
                    <Link to="/industries-overview" className="dropdown-item">Industries Overview</Link>
                    <Link to="/food-beverage" className="dropdown-item">Food & Beverage</Link>
                    <Link to="/industrial" className="dropdown-item">Industrial</Link>
                    <Link to="/medical" className="dropdown-item">Medical</Link>
                    <Link to="/consumer-goods" className="dropdown-item">Consumer Goods</Link>
                  </div>
                )}
              </div>
              <div 
                className="nav-item dropdown"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <button className="nav-link dropdown-toggle">
                  ABOUT <span className="arrow">▼</span>
                </button>
                {isAboutOpen && (
                  <div className="dropdown-menu">
                    <Link to="/about-overview" className="dropdown-item">About Overview</Link>
                    <Link to="/values-culture" className="dropdown-item">Values & Culture</Link>
                    <Link to="/women-owned-business" className="dropdown-item">Women Owned Business</Link>
                    <Link to="/120-years" className="dropdown-item">120 Years</Link>
                    <Link to="/sustainability" className="dropdown-item">Sustainability</Link>
                  </div>
                )}
              </div>
              <div 
                className="nav-item dropdown"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <button className="nav-link dropdown-toggle">
                  RESOURCES <span className="arrow">▼</span>
                </button>
                {isResourcesOpen && (
                  <div className="dropdown-menu">
                    <Link to="/company-resources" className="dropdown-item">Company Resources</Link>
                    <Link to="/blog-news" className="dropdown-item">Blog & News</Link>
                    <Link to="/case-studies" className="dropdown-item">Case Studies</Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* <div className="nav-auth">
            {isLoggedIn ? (
              <div className="user-menu-container">
                <div 
                  className="user-menu-trigger"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <div className="user-avatar">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/456/456283.png" 
                      alt="User Avatar" 
                    />
                  </div>
                  <div className="user-info">
                    <span className="user-name">
                      {currentUser?.companyName || 'User'}
                    </span>
                    <span className="user-role">
                      {isAdmin ? 'Administrator' : 'Client'}
                    </span>
                  </div>
                  <i className={`fas fa-chevron-${isUserMenuOpen ? 'up' : 'down'}`}></i>
                </div>

                {isUserMenuOpen && (
                  <div className="user-menu">
                    <div className="user-menu-header">
                      <strong>{currentUser?.companyName}</strong>
                      <span>{currentUser?.email}</span>
                    </div>
                    
                    <div className="user-menu-items">
                      {isAdmin && (
                        <Link to="/admin" className="menu-item">
                          <i className="fas fa-user-shield"></i>
                          Admin Dashboard
                        </Link>
                      )}
                      <Link to="/profile" className="menu-item">
                        <i className="fas fa-user"></i>
                        My Profile
                      </Link>
                      <Link to="/settings" className="menu-item">
                        <i className="fas fa-cog"></i>
                        Settings
                      </Link>
                      <button onClick={handleLogout} className="menu-item logout">
                        <i className="fas fa-sign-out-alt"></i>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/client-login" className="login-btn">
                <i className="fas fa-sign-in-alt"></i>
                Login
              </Link>
            )}
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 