// import React from 'react';
import logo from '../assets/cetLogo.svg'; // Make sure the path to the logo is correct
import './styles/navbar.css';
import Venue from '../pages/Venue'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <h3>ICCC</h3> */}
        <img src={logo} alt="Conference Logo" />
        <h3> College of Engineering Trivandrum </h3>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Committee</a></li>
        <li><a href="#">Authors</a></li>
        <li><a href="#">KeyNote Speakers</a></li>
        <li><a href="#">Paper Submission</a></li>
        <li><a href="#">Venue</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
