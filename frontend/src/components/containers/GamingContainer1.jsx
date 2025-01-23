import React, { useState } from 'react';
import './containercss/GamingContainer1.css';
import CPU from './containerimg/highGradeGaming/CPU.jpg';
import PSU from './containerimg/highGradeGaming/PSU.jpg';
import Cooling from './containerimg/highGradeGaming/Cooling.png';
import RAM from './containerimg/highGradeGaming/RAM.jpeg';
import GPU from './containerimg/highGradeGaming/GPU.webp';
import MB from './containerimg/highGradeGaming/MB.webp';
import Storage from './containerimg/highGradeGaming/Storage.webp';
import Case from './containerimg/highGradeGaming/Case.webp';

const components = [
  {
    title: 'Processor (CPU)',
    image: CPU,
    specs: [
      'Model: AMD Ryzen 7 7700X',
      'Cores/Threads: 8 cores, 16 threads',
      'Base Clock: 4.5 GHz',
      'Boost Clock: Up to 5.4 GHz',
      'TDP: 105W',
      'Price: ₹45,000',
    ],
    description: "AMD Ryzen 7 7700X",
    amazonLink: 'https://www.amazon.in/s?k=AMD+Ryzen+7+7700X',
  },
  {
    title: 'Graphics Card (GPU)',
    image: GPU,
    specs: [
      'Model: NVIDIA RTX 4070 Ti',
      'VRAM: 12GB GDDR6X',
      'Ray Tracing: 3rd Gen Cores',
      'Boost Clock: 2.61 GHz',
      'Power Draw: 285W',
      'Price: ₹80,000',
    ],
    description: "NVIDIA RTX 4070 Ti",
    amazonLink: 'https://www.amazon.in/s?k=NVIDIA+RTX+4070+Ti',
  },
  {
    title: 'Motherboard',
    image: MB,
    specs: [
      'Model: MSI MAG B550 TOMAHAWK WIFI',
      'Socket: AM4',
      'Chipset: B550',
      'Form Factor: ATX',
      'Features: PCIe 4.0, WiFi 6, USB 3.2 Gen 2',
      'Price: ₹15,000',
    ],
    description: "MSI MAG B550 TOMAHAWK WIFI",
    amazonLink: 'https://www.amazon.in/s?k=MSI+MAG+B550+TOMAHAWK+WIFI',
  },
  {
    title: 'RAM',
    image: RAM,
    specs: [
      'Model: Corsair Vengeance DDR4 32GB',
      'Configuration: 2x16GB',
      'Speed: 3600MHz',
      'Compatibility: DDR4 motherboards',
      'Price: ₹13,000',
    ],
    description: "Corsair Vengeance DDR4 32GB",
    amazonLink: 'https://www.amazon.in/s?k=Corsair+Vengeance+DDR4+32GB',
  },
  {
    title: 'Storage',
    image: Storage,
    specs: [
      'SSD: Samsung 970 EVO Plus 1TB NVMe',
      'Read Speed: Up to 3500 MB/s',
      'Write Speed: Up to 3300 MB/s',
      'HDD: Seagate Barracuda 2TB',
      'Price: ₹10,000 (SSD), ₹4,500 (HDD)',
    ],
    description: "Samsung 970 EVO Plus 1TB NVMe, Seagate Barracuda 2TB",
    amazonLink: 'https://www.amazon.in/s?k=Samsung+970+EVO+Plus+1TB',
  },
  {
    title: 'Cooling',
    image: Cooling,
    specs: [
      'Model: Corsair iCUE H100i Elite Capellix',
      'Type: 240mm AIO Liquid Cooler',
      'Features: RGB Lighting, Low Noise',
      'Compatibility: Multiple CPU sockets',
      'Price: ₹14,000',
    ],
    description: "Corsair iCUE H100i Elite Capellix",
    amazonLink: 'https://www.amazon.in/s?k=Corsair+iCUE+H100i+Elite',
  },
  {
    title: 'Case',
    image: Case,
    specs: [
      'Model: NZXT H510 Mid Tower ATX',
      'Material: Steel with tempered glass',
      'Features: Good airflow, cable management',
      'Price: ₹8,000',
    ],
    description: "NZXT H510 Mid Tower ATX",
    amazonLink: 'https://www.amazon.in/s?k=NZXT+H510',
  },
  {
    title: 'Power Supply Unit (PSU)',
    image: PSU,
    specs: [
      'Model: Corsair RM850x',
      'Wattage: 850W',
      'Certification: 80+ Gold',
      'Features: Fully modular cables',
      'Price: ₹9,000',
    ],
    description: "Corsair RM850x",
    amazonLink: 'https://www.amazon.in/s?k=Corsair+RM850x',
  },
];

const GamingContainer1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < components.length) {
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
          
          <div className="slide" key={index} style={{
            backgroundImage: `url(/src/components/containers/containerimg/BGImages/GamingBG/${index}.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
            opacity : 0.9,     
            zIndex : -1,        
          }}>
            <div className="outer-box">
            <h1 className="component-title" style={{marginTop: "50px"}}>{component.title}</h1>
            <div className='comp'>
            <img 
              src={component.image}
              alt={component.title}
              className="component-image"
            />
            {/* <p className="component-description">{component.description}</p> */}
            <ul className="spec-list">
              {component.specs.map((spec, specIndex) => (
                <li key={specIndex} className="spec-item">
                  {spec}
                </li>
              ))}
            </ul>
            </div>
            <div className='mb-10'>
              <a href={component.amazonLink} target='_blank'>
            <button type="button" className="buy">
            Buy Now </button> </a>
            <button type="button" className="buy">
            🛒Add to Cart</button>
            </div>
          </div>
          </div>
        ))}

        {/* Final Slide with Buy Now buttons and descriptions */}
        <div className="slide">
          <h1 className="component-title">Complete Your Build</h1>
          <table className="buy-now-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Description</th>
                <th>Here You Go</th>
              </tr>
            </thead>
            <tbody>
              {components.map((component, index) => (
                <tr key={index}>
                  <td>{component.title}</td>
                  <td>{component.description}</td>
                  <td>
                    <a
                      href={component.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="buy-now-button"
                    >
                      Buy Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button
        className={`arrow left ${currentIndex === 0 ? 'disabled' : ''}`}
        onClick={handlePrevious}
        disabled={currentIndex === 0}
      >
        <span className="material-icons">chevron_left</span>
      </button>
      <button
        className={`arrow right ${currentIndex === components.length ? 'disabled' : ''}`}
        onClick={handleNext}
        disabled={currentIndex === components.length}
      >
        <span className="material-icons">chevron_right</span>
      </button>
    </div>
  );
};

export default GamingContainer1;


