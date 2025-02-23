import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './Login.css';
import loginImage from '../../img/login_LE_upscale_balanced_x4.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Redirect if already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/'); // Redirect if already logged in
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignUp) {
      localStorage.setItem('userData', JSON.stringify(formData));
      toast.success('Account created successfully! Now login.');
      setIsSignUp(false);
    } else {
      const storedUser = JSON.parse(localStorage.getItem('userData'));

      if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
        localStorage.setItem('isLoggedIn', 'true'); // Store login state
        toast.success('Login successful! Redirecting...');
        setTimeout(() => navigate('/'), 1500);
      } else {
        toast.error('Invalid email or password.');
      }
    }
  };

  return (
    <div className='body'>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container">
        <div className="left-panel">
          <img src={loginImage} alt="Login Background" className="left-panel-image" />
          <div className="overlay-text">
            <h2>{isSignUp ? 'Hello!' : 'Welcome Back!'}</h2>
            <p>{isSignUp ? 'Sign up to explore more features.' : 'Login to continue your journey'}</p>
          </div>
        </div>

        <div className="right-panel">
          <h3 className='login-header'>{isSignUp ? 'Sign Up' : 'Login'}</h3>

          <form className="form" onSubmit={handleSubmit}>
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
                  required
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
                required
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
                required
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
