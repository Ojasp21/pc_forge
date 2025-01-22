import React, { useState } from 'react';
import CPU from './containerimg/HighEndProf/CPU.jpg';
import PSU from './containerimg/HighEndProf/PSU.jpg';
// import Cooling from './containerimg/BudgetGaming/Cooling.jpg';
import RAM from './containerimg/HighEndProf/RAM.jpg';
import GPU from './containerimg/HighEndProf/GPU.jpg';
import MB from './containerimg/HighEndProf/MB.jpg';
import Storage from './containerimg/HighEndProf/Storage.jpg';
import Case from './containerimg/HighEndProf/Case.jpg';

const components = [
  {
    title: 'Processor (CPU)',
    image: CPU,
    specs: [
      'Model: Intel Core i7-13700K',
      'Cores/Threads: 16 cores, 24 threads',
      'Base Clock: 3.4 GHz',
      'Boost Clock: Up to 5.4 GHz',
      'TDP: 125W',
      'Price: ₹42,000',
    ],
    description:
      'Intel Core i7-13700K is an excellent choice for professional workloads, offering exceptional performance in multi-threaded applications.',
    amazonLink: 'https://www.amazon.in/s?k=Intel+Core+i7-13700K',
  },
  {
    title: 'Graphics Card (GPU)',
    image: GPU,
    specs: [
      'Model: NVIDIA RTX 3060 Ti',
      'VRAM: 8GB GDDR6',
      'Core Clock: 1410 MHz',
      'Boost Clock: 1665 MHz',
      'Power Draw: 200W',
      'Price: ₹40,000',
    ],
    description:
      'The NVIDIA RTX 3060 Ti is a reliable choice for professional software acceleration and light gaming.',
    amazonLink: 'https://www.amazon.in/s?k=NVIDIA+RTX+3060+Ti',
  },
  {
    title: 'Motherboard',
    image: MB,
    specs: [
      'Model: ASUS TUF Z690-PLUS WIFI D4',
      'Socket: LGA 1700',
      'Chipset: Z690',
      'Form Factor: ATX',
      'Features: PCIe 4.0, WiFi 6, USB 3.2 Gen 2x2',
      'Price: ₹22,000',
    ],
    description:
      'A high-quality motherboard offering advanced features and excellent connectivity for professional use.',
    amazonLink: 'https://www.amazon.in/s?k=ASUS+TUF+Z690-PLUS+WIFI+D4',
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
    description:
      'Corsair Vengeance DDR4 RAM is designed for heavy multitasking and smooth performance in professional workloads.',
    amazonLink: 'https://www.amazon.in/s?k=Corsair+Vengeance+DDR4+32GB',
  },
  {
    title: 'Storage',
    image: Storage,
    specs: [
      'Model: Samsung 970 EVO Plus 1TB NVMe SSD',
      'Read Speed: Up to 3500 MB/s',
      'Write Speed: Up to 3300 MB/s',
      'Price: ₹10,000',
    ],
    description:
      'A fast and reliable storage solution for professionals handling large files and applications.',
    amazonLink: 'https://www.amazon.in/s?k=Samsung+970+EVO+Plus+1TB',
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
    description:
      'Corsair RM850x is a high-quality PSU, ensuring stable and reliable power delivery for professional setups.',
    amazonLink: 'https://www.amazon.in/s?k=Corsair+RM850x',
  },
  {
    title: 'Case',
    image: Case,
    specs: [
      'Model: NZXT H510',
      'Material: Steel and tempered glass',
      'Features: Compact design, excellent cable management',
      'Price: ₹6,500',
    ],
    description:
      'A sleek and sturdy case with great airflow and cable management options.',
    amazonLink: 'https://www.amazon.in/s?k=NZXT+H510',
  },
];

const ProfContainer1 = () => {
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
             <div className="outer-box">
            <h1 className="component-title"  style={{marginTop: "50px"}}>{component.title}</h1>
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

export default ProfContainer1;

