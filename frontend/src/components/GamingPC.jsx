import React from "react";
import "./gpc.css";

const GamingPC = () => {
  return (
    <div className="gaming-pc-container">
      <h1>Gaming PC</h1>
      <p>Select your preferred gaming PC type:</p>

      {/* Container 1 */}
      <div className="gaming-pc-section">
        <h2>High-Performance Gaming</h2>
        <p>
          Perfect for gamers who demand ultra-high performance, with the ability
          to run AAA games on maximum settings and support 4K resolution.
        </p>
        <a href="/gaming-container1">
          <button>Explore High-Performance</button>
        </a>
      </div>

      {/* Container 2 */}
      <div className="gaming-pc-section">
        <h2>Budget-Friendly Gaming</h2>
        <p>
          Ideal for gamers looking for a balance between performance and cost, 
          capable of running modern games smoothly at 1080p resolution.
        </p>
        <a href="/gaming-container2">
          <button>Explore Budget-Friendly</button>
        </a>
      </div>
    </div>
  );
};

export default GamingPC;
