import React, { useState } from "react";
import "../CSS/register.css";
import { Link } from "react-router-dom";
import axios from "axios"

const Register = () => {
  const [register, setRegister] = useState({
    FullName:"",
    Email:"",
    Password:"",
    ConfirmPassword:"",
  });

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
    
  };

  const handleRegisterData =async(e) => {
    e.preventDefault();
        try {
            // this console.log is working and...
            console.log(`the register data:`,register)
            
    //  const result = await axios.post("https://farmerbackend-2.onrender.com/auth/register", register);
        const result = await axios.post("http://localhost:3004/auth/register", register);

            
        console.log("Server Response:", result.data);

       
        setTimeout(() => {
            alert("Registration successful!");
        }, 100); 

       
        setRegister({
            FullName:"",
            Email:"",
            Password:"",
            ConfirmPassword:"",
        });

        } catch (error) {
            console.log(error);
        }
    };


    // console.log("User Registered:", register)
   


  return (
    <div className="body">
      <div className="container">
        <div className="register-box">
          <h2>Register</h2>
          <form method="POST" onSubmit={handleRegisterData}>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="FullName"
                value={register.FullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="Email"
                value={register.Email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="Password"
                value={register.Password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="ConfirmPassword"
                value={register.ConfirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </div>
            <div className="reg-btn">
            <button type="submit">Register</button>
            </div>
          </form>
          <p className="login-text">
            Already have an account? <Link to="/Login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
