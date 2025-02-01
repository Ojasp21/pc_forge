// import React, { useEffect } from "react";
// import { gsap } from "gsap"; 
// import "./TextContent.css";

// const TextContent = () => {
//   useEffect(() => {
//     gsap.fromTo(
//         ".text-title span",
//         { opacity: 0, x: -50 },
//         { opacity: 1, x: 0, duration: 0.5, stagger: 0.07, ease: "power2.out" }
//       );
  
//       gsap.fromTo(
//         ".text-subtitle",
//         { opacity: 0 },
//         { opacity: 1, duration: 1, delay: 0.6 } 
//       );
      
//       gsap.fromTo(
//         ".features-title",
//         { opacity: 0 },
//         { opacity: 1, duration: 1, delay: 1 }
//       );
  
//       gsap.fromTo(
//         ".features-list li",
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 1.2 }
//       );
//     }, []);
  
//   console.log("Hello");
//   return (
//     <>
//       <h1 className="text-title">
//         { "BUILD YOUR DREAM PC WITH EASE".split("").map((char, index) => (
//           <span key={index}>{char}</span>
//         ))}
//       </h1>
//       <div className="container2">
//         {/* Text Section */}
//         <div className="text-section">
//           <p className="text-subtitle">
//             Whether it’s for gaming, productivity, or performance, we help you
//             create the perfect setup.
//           </p>

//           <div className="features">
//             <h3 className="features-title">Why Choose Us?</h3>
//             <ul className="features-list">
//               <li>
//                 <strong>Custom Builds:</strong> Tailor your components to your
//                 needs.
//               </li>
//               <li>
//                 <strong>Compatibility Check:</strong> Ensures everything works
//                 together.
//               </li>
//               <li>
//                 <strong>Expert Recommendations:</strong> Get suggestions for your
//                 perfect PC.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="image-section">
//           <img
//             className="customGif"
//             src="/src/images/bg1.jpeg"
//             alt="Custom PC"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default TextContent;







// import React, { useEffect, useState } from "react";
// import { gsap } from "gsap"; 
// import "./TextContent.css";

// const TextContent = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const images = ["/src/images/bg1.jpeg", "/src/images/bg2.jpeg", "/src/images/bg3.jpeg"];

//   useEffect(() => {
//     // Text animations with GSAP
//     gsap.fromTo(
//       ".text-title span",
//       { opacity: 0, x: -50 },
//       { opacity: 1, x: 0, duration: 0.5, stagger: 0.07, ease: "power2.out" }
//     );
  
//     gsap.fromTo(
//       ".text-subtitle",
//       { opacity: 0 },
//       { opacity: 1, duration: 1, delay: 0.6 } 
//     );
      
//     gsap.fromTo(
//       ".features-title",
//       { opacity: 0 },
//       { opacity: 1, duration: 1, delay: 1 }
//     );
  
//     gsap.fromTo(
//       ".features-list li",
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 1.2 }
//     );

//     // Image slideshow effect
//     const imageInterval = setInterval(() => {
//       setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(imageInterval); // Cleanup on component unmount
//   }, []);

//   return (
//     <>
//       <h1 className="text-title">
//         { "BUILD YOUR DREAM PC WITH EASE".split("").map((char, index) => (
//           <span key={index}>{char}</span>
//         ))}
//       </h1>
//       <div className="container2">
//         {/* Text Section */}
//         <div className="text-section">
//           <p className="text-subtitle">
//             Whether it’s for gaming, productivity, or performance, we help you
//             create the perfect setup.
//           </p>

//           <div className="features">
//             <h3 className="features-title">Why Choose Us?</h3>
//             <ul className="features-list">
//               <li>
//                 <strong>Custom Builds:</strong> Tailor your components to your
//                 needs.
//               </li>
//               <li>
//                 <strong>Compatibility Check:</strong> Ensures everything works
//                 together.
//               </li>
//               <li>
//                 <strong>Expert Recommendations:</strong> Get suggestions for your
//                 perfect PC.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="image-section">
//           <img
//             className="customGif"
//             src={images[currentImage]}
//             alt="Custom PC"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default TextContent;






import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import "./TextContent.css";

const TextContent = () => {
  const images = [
    "/src/images/bg1.jpeg",
    "/src/images/bg2.jpeg",
    "/src/images/bg3.jpeg",
    "/src/images/bg4.jpeg",
    "/src/images/bg5.jpeg",
  ];

  const { scrollYProgress } = useScroll();

  const imageIndex = useTransform(scrollYProgress, [0, 0.4], [0, images.length - 1]);
  
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const unsubscribe = imageIndex.onChange((value) => {
      setCurrentImage(Math.floor(value)); // Round to the nearest whole number
    });
    return () => unsubscribe();
  }, [imageIndex]);

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]); // Fade out the image faster

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

  return (
    <>
      {/* Motion applied to fade out on scroll */}
      <motion.h1 className="text-title" style={{ opacity, y }}>
        {"BUILD YOUR DREAM PC WITH EASE".split("").map((char, index) => (
          <motion.span key={index} style={{ opacity, y }}>
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <div className="container2">
        <motion.div className="text-section" style={{ opacity, y }}>
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
        </motion.div>

        {/* Image Section with Framer Motion */}
        <div className="image-section">
          <motion.img
            // style={{ imageOpacity, y }}
            key={currentImage}
            src={images[currentImage]}
            alt="Custom PC"
            className="customGif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 1,
              ease: [0.25, 1, 0.5, 1],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TextContent;

















