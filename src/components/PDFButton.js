// Button.js
import React from "react";
import "../globals.scss";

const PDFButton = (props) => {
  return (
    <button onClick={() => window.open(props.pdf, '_blank')}>
        <h3>{props.prompt}</h3>
    </button>
  );
};

export default PDFButton;
