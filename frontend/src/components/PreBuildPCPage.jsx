import React from "react";
import "./PreBuildPCPage.css";

const PrebuildPCPage = () => {
  return (
    <div className="container">
      <div className="pc-section">
        <h2>Gaming PC</h2>
        <img src="src/assets/gaming.jpg" alt="Gaming PC" style={{marginTop: '20px'}}/>
        <div className="intro">
          <p>
            The ultimate gaming experience awaits! Designed for seamless performance in modern AAA titles and esports games, this PC delivers immersive visuals and blazing-fast responsiveness.
          </p>
          <p><strong>Uses:</strong> Competitive gaming, live streaming, and virtual reality (VR) experiences.</p>
          <p><strong>Abilities:</strong> Handles resource-intensive games, ultra settings, and multi-monitor setups with ease.</p>
        </div>
        <a href="/gaming">
          <button>Explore Gaming PC<i className="arrow-icon">➔</i></button>
        </a>
      </div>

      <div className="pc-section">
        <h2>Professional PC</h2>
        <img src="src/assets/prof.jpg" alt="Professional PC" />
        <div className="intro">
          <p>
            Power and efficiency combine in this PC, crafted for professionals who demand reliability for high-performance workflows.
          </p>
          <p><strong>Uses:</strong> Software development, data analysis, and engineering simulations.</p>
          <p><strong>Abilities:</strong> Multitasks effortlessly, supports virtual environments, and accelerates computation-heavy tasks.</p>
        </div>
        <a href="/professional">
          <button>Explore Professional PC<i className="arrow-icon">➔</i></button>
        </a>
      </div>

      <div className="pc-section">
        <h2>Editing PC</h2>
        <img src="src/assets/edit.jpg" alt="Editing PC" style={{marginBottom: '20px'}}/>
        <div className="intro">
          <p>
            Unleash your creativity with a PC tailored for photo and video editing, 3D rendering, and content creation.
          </p>
          <p><strong>Uses:</strong> Professional video editing, 3D modeling, and digital art creation.</p>
          <p><strong>Abilities:</strong> Renders projects quickly, manages large media files, and ensures smooth creative workflows.</p>
        </div>
        <a href="/editing">
          <button>Explore Editing PC <i className="arrow-icon">➔</i></button>
        </a>
      </div>
    </div>
  );
};

export default PrebuildPCPage;
