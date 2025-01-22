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
      'Model: AMD Ryzen 9 7900',
      'Cores/Threads: 12 cores, 24 threads',
      'Base Clock: 3.7 GHz',
      'Boost Clock: Up to 5.4 GHz',
      'TDP: 65W',
      'Price: ₹38,000',
    ],
    description:
      'The AMD Ryzen 9 7900 is a powerhouse CPU with excellent multi-threaded performance, perfect for 4K video editing and rendering.',
    amazonLink: 'https://www.amazon.in/s?k=AMD+Ryzen+9+7900',
  },
  {
    title: 'Graphics Card (GPU)',
    image: GPU,
    specs: [
      'Model: NVIDIA RTX 4060 Ti',
      'VRAM: 8GB GDDR6',
      'Core Clock: 2310 MHz',
      'Boost Clock: 2535 MHz',
      'Power Draw: 160W',
      'Price: ₹40,000',
    ],
    description:
      'The NVIDIA RTX 4060 Ti is ideal for video editing software acceleration, offering CUDA and NVENC support for faster renders.',
    amazonLink: 'https://www.amazon.in/s?k=NVIDIA+RTX+4060+Ti',
  },
  {
    title: 'Motherboard',
    image: MB,
    specs: [
      'Model: ASUS TUF Gaming B650-PLUS WiFi',
      'Socket: AM5',
      'Chipset: B650',
      'Form Factor: ATX',
      'Features: PCIe 5.0, WiFi 6, USB 3.2 Gen 2x2',
      'Price: ₹18,000',
    ],
    description:
      'A reliable motherboard with advanced connectivity and features, supporting the latest AMD processors and PCIe 5.0.',
    amazonLink: 'https://www.amazon.in/s?k=ASUS+TUF+Gaming+B650-PLUS+WiFi',
  },
  {
    title: 'RAM',
    image: RAM,
    specs: [
      'Model: G.Skill Trident Z5 RGB DDR5 32GB',
      'Configuration: 2x16GB',
      'Speed: 6000MHz',
      'Compatibility: DDR5 motherboards',
      'Price: ₹15,000',
    ],
    description:
      'G.Skill Trident Z5 RGB DDR5 RAM provides blazing-fast speeds for demanding video editing applications.',
    amazonLink: 'https://www.amazon.in/s?k=G.Skill+Trident+Z5+DDR5+32GB',
  },
  {
    title: 'Storage',
    image: Storage,
    specs: [
      'Model: Samsung 980 Pro 2TB NVMe SSD',
      'Read Speed: Up to 7000 MB/s',
      'Write Speed: Up to 5100 MB/s',
      'Price: ₹16,000',
    ],
    description:
      'Samsung 980 Pro NVMe SSD offers exceptional speed and reliability, ensuring seamless editing and project management.',
    amazonLink: 'https://www.amazon.in/s?k=Samsung+980+Pro+2TB',
  },
  {
    title: 'Power Supply Unit (PSU)',
    image: PSU,
    specs: [
      'Model: Corsair RM750e',
      'Wattage: 750W',
      'Certification: 80+ Gold',
      'Features: Fully modular cables',
      'Price: ₹8,000',
    ],
    description:
      'Corsair RM750e delivers efficient and reliable power for high-end systems, ensuring stability during intensive workloads.',
    amazonLink: 'https://www.amazon.in/s?k=Corsair+RM750e',
  },
  {
    title: 'Case',
    image: Case,
    specs: [
      'Model: Lian Li Lancool II Mesh',
      'Material: Steel and tempered glass',
      'Features: Excellent airflow, spacious design',
      'Price: ₹7,500',
    ],
    description:
      'The Lian Li Lancool II Mesh case offers superior airflow and a professional design, perfect for video editing setups.',
    amazonLink: 'https://www.amazon.in/s?k=Lian+Li+Lancool+II+Mesh',
  },
];

const EditingContainer1 = () => {
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

export default EditingContainer1;






