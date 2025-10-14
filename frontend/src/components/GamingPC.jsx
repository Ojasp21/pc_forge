import React from "react";
import "./GamingPC.css";

const GamingPC = () => {
  return (
    <>
    <img className="gamingbg" src="/images/Gaming.jpg" alt="" />
    <div className="gaming-pc-container">
      <h1>Gaming PC</h1>
      <p>Select your preferred gaming PC type:</p>

      <div className="gaming-pc-sections-container">
        {/* Container 1 */}
        <div className="gaming-pc-section">
          <h2>High-Performance Gaming</h2>
          <p>
            Perfect for gamers who demand ultra-high performance, with the ability
            to run AAA games on maximum settings and support 4K resolution.
          </p>
          <p>
            Experience lightning-fast load times, superior graphics, and 
            unmatched gaming performance. Push the limits of gaming and immerse 
            yourself in worlds like never before!
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
          <p>
            Enjoy seamless gameplay without breaking the bank. This is perfect 
            for casual gamers or those upgrading from older systems, delivering 
            excellent value and smooth performance.
          </p>
          <a href="/gaming-container2">
            <button>Explore Budget-Friendly</button>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default GamingPC;
