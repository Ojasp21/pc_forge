import React from "react";
import "./epc.css";

const EditingPC = () => {
  return (
    <div className="editing-pc-container">
      <h1>Editing PC</h1>
      <p>Select your preferred editing PC type:</p>

      {/* Container 1 */}
      <div className="editing-pc-section">
        <h2>High-End Video Editing</h2>
        <p>
          Designed for professionals working with 4K video, complex animations, 
          and multi-track editing. This build ensures smooth rendering and fast processing.
        </p>
        <a href="/editing-container1">
          <button>Explore High-End Video Editing</button>
        </a>
      </div>

      {/* Container 2 */}
      <div className="editing-pc-section">
        <h2>Content Creation & Photo Editing</h2>
        <p>
          Perfect for content creators and photographers, with optimal performance for editing HD photos 
          and videos, as well as handling design software like Photoshop and Lightroom.
        </p>
        <a href="/editing-container2">
          <button>Explore Content Creation</button>
        </a>
      </div>
    </div>
  );
};

export default EditingPC;
