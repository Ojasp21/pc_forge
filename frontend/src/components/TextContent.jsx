import React from "react";
import "./TextContent.css";

const TextContent = () => {
  return (<>
    <h1 className="text-title">BUILD YOUR DREAM PC WITH EASE</h1>
    <div className="container2">
      {/* Text Section */}
      <div className="text-section">
        <p className="text-subtitle">
          Whether it’s for gaming, productivity, or performance, we help you
          create the perfect setup.
        </p>

        <div className="features">
          <h3 className="features-title">Why Choose Us?</h3>
          <ul className="features-list">
            <li>
              <strong>Custom Builds:</strong> Tailor your components to your
              needs.
            </li>
            <li>
              <strong>Compatibility Check:</strong> Ensures everything works
              together.
            </li>
            <li>
              <strong>Expert Recommendations:</strong> Get suggestions for your
              perfect PC.
            </li>
          </ul>
        </div>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <img
          className="customGif"
          src="/src/images/mainimg.jpeg"
          alt="Custom PC"
        />
      </div>
    </div>
  </>);
};

export default TextContent;
