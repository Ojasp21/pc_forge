import React from "react";
import "./ppc.css";

const ProfessionalPC = () => {
  return (
    <div className="professional-pc-container">
      <h1>Professional PC</h1>
      <p>Select your ideal professional PC setup:</p>

      {/* Container 1 */}
      <div className="professional-pc-section">
        <h2>Workstation PC</h2>
        <p>
          Designed for professionals requiring high processing power for tasks like video editing, 3D modeling, and large-scale data analysis.
        </p>
        <a href="/prof-container1">
          <button>Explore Workstation PC</button>
        </a>
      </div>

      {/* Container 2 */}
      <div className="professional-pc-section">
        <h2>Creative Studio PC</h2>
        <p>
          Perfect for creative professionals working on graphic design, video production, and animation with advanced performance and multi-tasking capabilities.
        </p>
        <a href="/prof-container2">
          <button>Explore Creative Studio PC</button>
        </a>
      </div>
    </div>
  );
};

export default ProfessionalPC;
