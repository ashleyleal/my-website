// Home.js
import React from "react";
import "../globals.scss";

function Home() {
  return (
    <div className="home-card">
    <div className="image-column">
      <img src="/assets/me.png" alt="Ashley Leal" layout="responsive" />
    </div>
    <div className="text-column">
      <h2>WELCOME! MY NAME IS</h2>
      <h1>ASHLEY LEAL</h1>
      <p>
        I'm an engineering student based in Toronto, Ontario, and am
        currently seeking opportunities for summer 2024 SWE internships.
      </p>
    </div>
  </div>
  );
}

export default Home;