import React, { useState } from "react";
import login from '../../img/Home.png'

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Get all stored users
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the entered email and password match any user
    const user = existingUsers.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );

    if (user) {
      alert(`Welcome, ${user.name}! 🎉`);
      setLoginData({ email: "", password: "" }); // Clear form
    } else {
      alert("Invalid email or password! ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    
      <img src={login} className="loginImg"/>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <br /><br />
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
