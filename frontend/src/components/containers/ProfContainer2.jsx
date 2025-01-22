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
      'Model: AMD Ryzen 5 5600',
      'Cores/Threads: 6 cores, 12 threads',
      'Base Clock: 3.5 GHz',
      'Boost Clock: Up to 4.4 GHz',
      'TDP: 65W',
      'Price: ₹12,500',
    ],
    description:
      'AMD Ryzen 5 5600 offers great value for creative professionals with its multi-threaded performance and efficiency.',
    amazonLink: 'https://www.amazon.in/s?k=AMD+Ryzen+5+5600',
  },
  {
    title: 'Graphics Card (GPU)',
    image: GPU,
    specs: [
      'Model: NVIDIA GTX 1660 Super',
      'VRAM: 6GB GDDR6',
      'Core Clock: 1530 MHz',
      'Boost Clock: 1785 MHz',
      'Power Draw: 125W',
      'Price: ₹19,000',
    ],
    description:
      'NVIDIA GTX 1660 Super is a budget-friendly GPU perfect for accelerating creative workflows like video editing and rendering.',
    amazonLink: 'https://www.amazon.in/s?k=NVIDIA+GTX+1660+Super',
  },
  {
    title: 'Motherboard',
    image: MB,
    specs: [
      'Model: MSI B550M PRO-VDH WiFi',
      'Socket: AM4',
      'Chipset: B550',
      'Form Factor: Micro-ATX',
      'Features: PCIe 4.0, Wi-Fi 6, USB 3.2 Gen 2',
      'Price: ₹9,000',
    ],
    description:
      'This motherboard provides excellent connectivity and support for modern storage and networking needs.',
    amazonLink: 'https://www.amazon.in/s?k=MSI+B550M+PRO-VDH+WiFi',
  },
  {
    title: 'RAM',
    image: RAM,
    specs: [
      'Model: Corsair Vengeance LPX 16GB',
      'Configuration: 2x8GB',
      'Speed: 3200MHz',
      'Compatibility: DDR4 motherboards',
      'Price: ₹5,500',
    ],
    description:
      'Corsair Vengeance LPX offers reliable performance and speed for multitasking and creative work.',
    amazonLink: 'https://www.amazon.in/s?k=Corsair+Vengeance+LPX+16GB',
  },
  {
    title: 'Storage',
    image: Storage,
    specs: [
      'Model: Western Digital SN570 1TB NVMe SSD',
      'Read Speed: Up to 3500 MB/s',
      'Write Speed: Up to 3000 MB/s',
      'Price: ₹5,000',
    ],
    description:
      'Western Digital SN570 is a fast and reliable NVMe SSD, perfect for storing and accessing large creative project files.',
    amazonLink: 'https://www.amazon.in/s?k=Western+Digital+SN570+1TB',
  },
  {
    title: 'Power Supply Unit (PSU)',
    image: PSU,
    specs: [
      'Model: Cooler Master MWE 550 V2',
      'Wattage: 550W',
      'Certification: 80+ Bronze',
      'Features: Compact and efficient',
      'Price: ₹3,500',
    ],
    description:
      'A reliable PSU that ensures stable power delivery for this budget-friendly build.',
    amazonLink: 'https://www.amazon.in/s?k=Cooler+Master+MWE+550+V2',
  },
  {
    title: 'Case',
    image: Case,
    specs: [
      'Model: Ant Esports ICE-200TG',
      'Material: Steel and tempered glass',
      'Features: Compact design, good airflow',
      'Price: ₹2,700',
    ],
    description:
      'A stylish and affordable case with excellent airflow and cable management options.',
    amazonLink: 'https://www.amazon.in/s?k=Ant+Esports+ICE-200TG',
  },
];

const ProfContainer2 = () => {
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
          <div className="slide" key={index}>
            <h1 className="component-title">{component.title}</h1>
            <img
              src={component.image}
              alt={component.title}
              className="component-image"
            />
            <p className="component-description">{component.description}</p>
            <ul className="spec-list">
              {component.specs.map((spec, specIndex) => (
                <li key={specIndex} className="spec-item">
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Final Slide with Buy Now buttons and descriptions */}
        <div className="slide">
          <h1 className="component-title">Complete Your Build</h1>
          <table className="buy-now-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Model</th>
                <th>Buy Now</th>
              </tr>
            </thead>
            <tbody>
              {components.map((component, index) => (
                <tr key={index}>
                  <td>{component.title}</td>
                  <td>{component.specs[0].split(': ')[1]}</td>
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

export default ProfContainer2;





