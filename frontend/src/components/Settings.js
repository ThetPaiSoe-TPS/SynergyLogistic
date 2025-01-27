import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false
  });
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [language, setLanguage] = useState('en');
  const [loginHistory, setLoginHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    // Image upload logic
  };

  const handlePasswordChange = async (event) => {
    // Password change logic
  };

  const toggleTwoFactor = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  const handleNotificationChange = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="settings-container">
      <div className="settings-sidebar">
        <h2>Settings</h2>
        <nav className="settings-nav">
          <button 
            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <i className="fas fa-user"></i>
            Profile Settings
          </button>
          <button 
            className={`nav-item ${activeTab === 'account' ? 'active' : ''}`}
            onClick={() => setActiveTab('account')}
          >
            <i className="fas fa-cog"></i>
            Account Preferences
          </button>
          <button 
            className={`nav-item ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <i className="fas fa-shield-alt"></i>
            Security
          </button>
          <button 
            className={`nav-item ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <i className="fas fa-bell"></i>
            Notifications
          </button>
          <button 
            className={`nav-item ${activeTab === 'api' ? 'active' : ''}`}
            onClick={() => setActiveTab('api')}
          >
            <i className="fas fa-code"></i>
            API & Integrations
          </button>
          <button 
            className={`nav-item ${activeTab === 'billing' ? 'active' : ''}`}
            onClick={() => setActiveTab('billing')}
          >
            <i className="fas fa-credit-card"></i>
            Billing
          </button>
          <button 
            className={`nav-item ${activeTab === 'support' ? 'active' : ''}`}
            onClick={() => setActiveTab('support')}
          >
            <i className="fas fa-headset"></i>
            Support
          </button>
        </nav>
      </div>

      <div className="settings-content">
        {activeTab === 'profile' && (
          <div className="settings-section">
            <h2>Profile Settings</h2>
            <div className="profile-upload">
              <div className="upload-area">
                <img src="https://cdn-icons-png.flaticon.com/512/456/456283.png" alt="Profile" />
                <div className="upload-overlay">
                  <i className="fas fa-camera"></i>
                  <span>Change Photo</span>
                </div>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
              </div>
            </div>
            <div className="settings-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input type="text" value="Administrator" disabled />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="settings-section">
            <h2>Security Settings</h2>
            <div className="security-options">
              <div className="security-card">
                <div className="card-header">
                  <h3>Two-Factor Authentication</h3>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={twoFactorEnabled}
                      onChange={toggleTwoFactor}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <p>Add an extra layer of security to your account</p>
              </div>

              <div className="security-card">
                <h3>Change Password</h3>
                <form className="password-form">
                  <div className="form-group">
                    <label>Current Password</label>
                    <input type="password" />
                  </div>
                  <div className="form-group">
                    <label>New Password</label>
                    <input type="password" />
                  </div>
                  <div className="form-group">
                    <label>Confirm New Password</label>
                    <input type="password" />
                  </div>
                  <button type="submit" className="btn-primary">Update Password</button>
                </form>
              </div>

              <div className="security-card">
                <h3>Login History</h3>
                <div className="login-history">
                  {/* Sample login history items */}
                  <div className="history-item">
                    <div className="device-info">
                      <i className="fas fa-desktop"></i>
                      <div>
                        <h4>Windows PC - Chrome</h4>
                        <p>Minneapolis, MN, USA</p>
                      </div>
                    </div>
                    <span className="timestamp">2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'account' && (
          <div className="settings-section">
            <h2>Account Preferences</h2>
            <div className="preferences-grid">
              <div className="preference-card">
                <div className="card-header">
                  <h3>Theme</h3>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <p>Switch between light and dark mode</p>
              </div>

              <div className="preference-card">
                <h3>Language</h3>
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Add other tab content sections */}
      </div>
    </div>
  );
}

export default Settings; 