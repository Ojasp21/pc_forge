import React from "react";
import "./ProfessionalPC.css";

const ProfessionalPC = () => {
  return (
    <>
    <img className="profbg" src="/src/images/Prof.jpg" alt="" />
    <div className="professional-pc-container">
      <h1>Professional PC</h1>
      <p>Select the professional PC that fits your specific needs:</p>

      <div className="professional-pc-sections-container">
        {/* Workstation PC Container */}
        <div className="professional-pc-section">
          <h2>Workstation PC</h2>
          <p>
            Built for professionals who demand robust performance in fields like video editing, 3D modeling, and data analysis. This workstation is designed to handle demanding software and large files with ease, helping you get the job done faster and more efficiently.
          </p>
          <a href="/prof-container1">
            <button>Explore Workstation PC</button>
          </a>
        </div>

        {/* Creative Studio PC Container */}
        <div className="professional-pc-section">
          <h2>Creative Studio PC</h2>
          <p>
            Ideal for creative professionals who require powerful performance for graphic design, video production, and animation. This PC is optimized for multitasking, ensuring seamless workflows for all your creative projects while delivering high-quality results.
          </p>
          <a href="/prof-container2">
            <button>Explore Creative Studio PC</button>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfessionalPC;
