import React, { useState } from 'react';
import './containercss/GamingContainer1.css';


const components = [
  {
    title: 'Gaming PC Build - Basic',
    image: 'path/to/basic-build-image.jpg', // Add image path here
    specs: [
      'Processor: AMD Ryzen 5 5600X',
      'Graphics Card: NVIDIA RTX 3060',
      'RAM: 16GB DDR4',
      'Storage: 512GB NVMe SSD',
      'Motherboard: MSI B450 TOMAHAWK MAX',
    ],
  },
  {
    title: 'Gaming PC Build - Advanced',
    image: 'path/to/advanced-build-image.jpg', // Add image path here
    specs: [
      'Processor: Intel Core i7-12700K',
      'Graphics Card: NVIDIA RTX 3080',
      'RAM: 32GB DDR5',
      'Storage: 1TB NVMe SSD',
      'Motherboard: ASUS ROG STRIX Z690-E',
    ],
  },
  {
    title: 'Gaming PC Build - Ultimate',
    image: 'path/to/ultimate-build-image.jpg', // Add image path here
    specs: [
      'Processor: AMD Ryzen 9 7950X',
      'Graphics Card: NVIDIA RTX 4090',
      'RAM: 64GB DDR5',
      'Storage: 2TB NVMe SSD',
      'Motherboard: MSI MEG X670E GODLIKE',
    ],
  },
];

const GamingContainer1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < components.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="gaming-container">
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {components.map((component, index) => (
          <div className="slide" key={index}>
            <h1>{component.title}</h1>
            <img src={component.image} alt={component.title} className="component-image" />
            <p>Specifications:</p>
            <ul>
              {component.specs.map((spec, specIndex) => (
                <li key={specIndex}>{spec}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button
        className={`arrow left ${currentIndex === 0 ? 'disabled' : ''}`}
        onClick={handlePrevious}
        disabled={currentIndex === 0}
      >
        <span className="material-icons">chevron_left</span>
      </button>
      <button
        className={`arrow right ${currentIndex === components.length - 1 ? 'disabled' : ''}`}
        onClick={handleNext}
        disabled={currentIndex === components.length - 1}
      >
        <span className="material-icons">chevron_right</span>
      </button>
    </div>
  );
};

export default GamingContainer1;
