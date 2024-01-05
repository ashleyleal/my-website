// Navbar.js
import React from 'react';
import "../App.scss";
// import {Link} from 'react-scroll';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-content">
        {
          <h3>ASHLEY LEAL</h3>
        }
        <a href="/">HOME</a>
        <a href="/about">PROJECTS</a>
        <a href="/education">EDUCATION</a>
        <a href="/skills">SKILLS</a>
        <a href="/achievements">ACHIEVEMENTS</a>
        <a href="/experience">EXPERIENCE</a>
      </div>
    </div>
    
  );
}

export default Navbar;