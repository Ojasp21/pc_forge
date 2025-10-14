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
import { Cpu, Monitor, Box, Database } from "lucide-react";
import "./TextContent.css";

const TextContent = () => {
  const images = [
    "/images/bg1.jpeg",
    "/images/bg2.jpeg",
    "/images/bg3.jpeg",
    "/images/bg4.jpeg",
    "/images/bg5.jpeg",
  ];

  const { scrollYProgress } = useScroll();
  const imageIndex = useTransform(scrollYProgress, [0, 0.4], [0, images.length - 1]);
  const [currentImage, setCurrentImage] = useState(0);
  const [hoveredStats, setHoveredStats] = useState(null);

  const stats = [
    { icon: <Cpu className="w-6 h-6" />, label: "Processors", count: "10+" },
    { icon: <Monitor className="w-6 h-6" />, label: "Graphics", count: "10+" },
    { icon: <Box className="w-6 h-6" />, label: "Components", count: "100+" },
    { icon: <Database className="w-6 h-6" />, label: "Storage", count: "10+" },
  ];

  useEffect(() => {
    const unsubscribe = imageIndex.onChange((value) => {
      setCurrentImage(Math.floor(value));
    });

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

    gsap.fromTo(
      ".stats-container",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 1.4 }
    );

    return () => unsubscribe();
  }, [imageIndex]);

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"]);

  return (
    <div className="relative">
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, rgba(0,0,255,0.1) 0%, rgba(0,255,255,0.1) 100%)",
          opacity: 0.1,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.h1 className="text-title" style={{ opacity, y }}>
        {"BUILD YOUR DREAM PC WITH EASE".split("").map((char, index) => (
          <motion.span key={index} style={{ opacity, y }}>
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.div 
        className="stats-container flex justify-center gap-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-item bg-gray-800/30 p-4 rounded-lg backdrop-blur-sm hover:bg-gray-800/50 transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredStats(index)}
            onHoverEnd={() => setHoveredStats(null)}
          >
            <div className="flex items-center gap-2">
              {stat.icon}
              <div>
                <div className="text-blue-400 font-bold">{stat.count}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            </div>
            {hoveredStats === index && (
              <motion.div
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-2 py-1 rounded text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                View All
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="container2">
        <motion.div className="text-section" style={{ opacity, y }}>
          <p className="text-subtitle">
            Whether it's for gaming, productivity, or performance, we help you
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

        <div className="image-section">
          <motion.img
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
    </div>
  );
};

export default TextContent;