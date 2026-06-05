// import React from 'react';
// import "../CSS/Footer.css";
// // import './App.css'; // Ensure you import your CSS file

// const Footer = () => {
//   return (
//     <footer className= "main-footer">
//             <div className="cont-footer">
//             {/* <p > Made 💗 by Gaurav singh and 🔥Aryan singh</p> */}
//             <p>made for farmers</p>
//             </div>
//           </footer>
//   );
// };
// export default Footer;


import styles from "../CSS/footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.top}>

        {/* Logo & About */}
        <div className={styles.brand}>
          <h2>🚜 AgroRent</h2>

          <p>
            Smart farming starts here.
            Rent modern farming equipment
            easily and affordably.
          </p>

          <div className={styles.socials}>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Inventory</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3>Services</h3>

          <ul>
            <li>Tractor Rental</li>
            <li>Farm Tools</li>
            <li>Equipment Booking</li>
            <li>Fast Delivery</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3>Contact</h3>

          <ul>
            <li>📍 Mathura, India</li>
            <li>📞 +91 9876543210</li>
            <li>✉️ agrorent@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>
          © 2026 AgroRent. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;

