import React from 'react';
import "../CSS/header.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  // const { isLoggedIn, logout } = useAuth();
  const { isLoggedIn, logout, user } = useAuth();
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    // window.location.reload();
    logout();            // Update auth state
    navigate("/");  // Redirect to login page after logout
  };

  return (
    <div className='main-header'>
      <div className="content-1">
        <div className='logo'>
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className='navs'>


          {isLoggedIn ? (
            <>
              {role == "customer" && (
                <>
                  <NavLink to="/" className="nav-links">Home</NavLink>
                  <NavLink to="/about" className="nav-links">About</NavLink>
                  {/* <NavLink to="/onrent" className="nav-links">On Rent</NavLink> */}
                  {/* <NavLink to="/Account" className="nav-links">Account</NavLink > */}
                  <NavLink to="/viewtool" className="nav-links">Book Tools</NavLink>
                  <NavLink to="/contact" className="nav-links">Contact Us</NavLink>
                  {/* <NavLink to="/checkout" className="nav-links">Checkout</NavLink> */}
                  {/* <NavLink to="/myorder" className="nav-links">My Orders</NavLink> */}
                  {/* <NavLink onClick={handleLogout} className="nav-links">Logout</NavLink> */}
                  <button onClick={handleLogout} className="nav-links-1">Logout</button>
                </>
              )}

              {role == "owner" && (
                <>
                  <NavLink to="/" className="nav-links">Home</NavLink>
                  <NavLink to="/about" className="nav-links">About</NavLink>
                  <NavLink to="/contact" className="nav-links">Contact Us</NavLink>
                  <NavLink to="/onrent" className="nav-links">On Rent</NavLink>
                  <NavLink to="/mytools" className="nav-links">My Tools</NavLink>

                  <button onClick={handleLogout} className="nav-links-1">Logout</button>



                </>
              )}
            </>
          ) : (
            <>
              <NavLink to="/" className="nav-links">Login</NavLink>
              <NavLink to="/register" className="nav-links">Register</NavLink>
            </>
            // {/* )} */}/
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
