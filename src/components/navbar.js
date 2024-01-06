// Navbar.js
import React from "react";
import "../globals.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-content">
        {
          <h3>ASHLEY LEAL</h3>
        }

        <div className="nav-links">
          <a href="/">HOME</a>
          <a href="/about">PROJECTS</a>
          <a href="/education">EDUCATION</a>
          <a href="/skills">SKILLS</a>
          <a href="/achievements">ACHIEVEMENTS</a>
          <a href="/experience">EXPERIENCE</a>
        </div>

        <div className="nav-icons">
          <a href="https://github.com/ashleyleal" target="_blank">
            <div class="image-container">
              <img
                src="/assets/Github.png"
                alt="My Github"
                class="default-image"
              />
              <img
                src="/assets/GithubDark.png"
                alt="My Github"
                class="hover-image"
              />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/ashleynicoleleal/" target="_blank">
            <div class="image-container">
              <img
                src="/assets/LinkedIn.png"
                alt="My LinkedIn"
                class="default-image"
              />
              <img
                src="/assets/LinkedInDark.png"
                alt="My LinkedIn"
                class="hover-image"
              />
            </div>
          </a>

          <a href="mailto:ashley.leal@mail.utoronto.ca?" target="_blank">
            <div class="image-container">
              <img
                src="/assets/Email.png"
                alt="My Email"
                class="default-image"
              />
              <img
                src="/assets/EmailDark.png"
                alt="My Email"
                class="hover-image"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
