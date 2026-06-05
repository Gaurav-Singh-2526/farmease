import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext"; //  Import
import '../CSS/login.css';

const Login = () => {
  const [Login, setLogin] = useState({
    Email: "",
    Password: ""
  });
  const [role, setRole] = useState("");

  const { login } = useAuth(); //  Use context
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLogin({ ...Login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login data is:", Login);


    try {
      // const result = await axios.post("https://farmerbackend-2.onrender.com/auth/login", Login);
      const result = await axios.post("http://localhost:3004/auth/login", Login);

      console.log("Server Response:", result.data);

      login(); //  Set auth context

      localStorage.setItem("role", role);
      localStorage.setItem("user", JSON.stringify(result.data.user));
      alert("Login successful!");
      // console.log(JSON.parse(localStorage.getItem("user")));
      // console.log("navigate to home");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed!");
    }

    setLogin({ Email: "", Password: "" });
  };

  return (
    <div className="body">
      <div className="container">
        <div className="register-box">
          <h2>Login</h2>
          <form method="POST" onSubmit={handleSubmit} action="/Login">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="Email"
                value={Login.Email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="Password"
                value={Login.Password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>
            <div className="input-group">

              <select onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>

                <option value="customer">
                  Rent Tools
                </option>
                <option value="owner">
                  Give on Rent
                </option>

              </select>
            </div>
            <div className="login-btn">

              <button type="submit">Login</button>
            </div>
          </form>
          <p className="login-text">
            Have not account? <Link to="/Register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
