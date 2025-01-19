import React, { useEffect } from "react";
import { gsap } from "gsap"; 
import "./TextContent.css";

const TextContent = () => {
  useEffect(() => {
    gsap.fromTo(
        ".text-title span",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.07, ease: "power2.out" }
      );
  
      gsap.fromTo(
        ".text-subtitle",
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.6 } 
      );
      
      gsap.fromTo(
        ".features-title",
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1 }
      );
  
      gsap.fromTo(
        ".features-list li",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 1.2 }
      );
    }, []);
  
  console.log("Hello");
  return (
    <>
      <h1 className="text-title">
        { "BUILD YOUR DREAM PC WITH EASE".split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </h1>
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
    </>
  );
};

export default TextContent;
