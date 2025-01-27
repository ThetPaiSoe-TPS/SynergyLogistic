import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ClientLogin.css';
import { logos, warehouseImage } from '../assets/images';  // Import warehouseImage

function ClientLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.message || 'Login failed';
        console.error('Login error response:', data); // Debug log
        throw new Error(errorMessage);
      }

      // Save token and redirect only if login was successful
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        console.log('Stored user data:', data.user); // Debug log
        navigate('/');
      } else {
        throw new Error('No token received from server');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${warehouseImage})`
    }}>
      <div className="login-box">
        <img 
          src={logos.synergy}
          alt="Synergy Logistics" 
          className="login-logo" 
        />
        
        <h2>Client Login</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                className="password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span 
                className="toggle-password" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="login-footer">
          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          <div className="register-link">
            Don't have an account? <a href="/register">Register here</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientLogin; 