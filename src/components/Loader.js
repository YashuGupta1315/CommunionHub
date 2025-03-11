import React from "react";
import "./Loader.css";
// Use correct path

function Loader() {
  return (
    <div className="loader-container">
      <img src="/assets/images/logoo.png" alt="Loading..." className="rotating-logo" />
    </div>
  );
}

export default Loader;
