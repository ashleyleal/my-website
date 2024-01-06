// Home.js
import React from "react";
import "../globals.scss";
import PDFButton from "./PDFButton.js";

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
        I'm an engineering student from Toronto, Ontario.
      </p>
      <PDFButton prompt="MY RESUME" pdf="/assets/Resume.pdf"/>
    </div>
  </div>
  );
}

export default Home;
