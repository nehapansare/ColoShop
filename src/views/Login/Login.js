import React, { useState } from 'react';
import './Login.css';
import loginImage from '../../img/login_LE_upscale_balanced_x4.jpg';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className='body'>
    <div className="container">
      {/* Left Panel with Full Image */}
      <div className="left-panel">
        <img src={loginImage} alt="Login Background" className="left-panel-image" />
        <div className="overlay-text">
          <h2>{isSignUp ? 'Hello!' : 'Welcome Back!'}</h2>
          <p>{isSignUp ? 'Sign up to explore more features.' : 'Login to continue your journey'}</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <h3 className='login-header'>{isSignUp ? 'Sign Up' : 'Login'}</h3>
        <form className="form">
          {isSignUp && (
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter username"
              />
            </div>
          )}

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="submit-btn">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>

          <p className="toggle-text">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button type="button" onClick={() => setIsSignUp(!isSignUp)} className="toggle-btn">
              {isSignUp ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
