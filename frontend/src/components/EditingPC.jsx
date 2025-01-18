import React from "react";
import "./EditingPC.css";

const EditingPC = () => {
  return (
    <div className="editing-pc-container">
      <h1>Editing PC</h1>
      <p>Select the editing PC that suits your workflow:</p>

      <div className="editing-pc-sections-container">
        {/* High-End Video Editing Container */}
        <div className="editing-pc-section">
          <h2>High-End Video Editing</h2>
          <p>
            Built for professionals dealing with 4K video, complex animations, and multi-track editing. This PC ensures you can render videos smoothly, process heavy files quickly, and edit in real-time without lag. Perfect for advanced post-production work and high-demand projects.
          </p>
          <a href="/editing-container1">
            <button>Explore High-End Video Editing</button>
          </a>
        </div>

        {/* Content Creation & Photo Editing Container */}
        <div className="editing-pc-section">
          <h2>Content Creation & Photo Editing</h2>
          <p>
            Ideal for content creators, photographers, and designers. This setup offers optimal performance for handling HD photos and videos, making it perfect for editing in applications like Photoshop, Lightroom, and other creative tools. Edit, enhance, and design without delay.
          </p>
          <a href="/editing-container2">
            <button>Explore Content Creation</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EditingPC;
