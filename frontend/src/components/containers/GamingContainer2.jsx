import React, { useState } from 'react';
import './containercss/GamingContainer1.css';
import CPU from './containerimg/BudgetGaming/CPU.jpg';
import PSU from './containerimg/BudgetGaming/PSU.jpg';
import Cooling from './containerimg/BudgetGaming/Cooling.jpg';
import RAM from './containerimg/BudgetGaming/RAM.jpg';
import GPU from './containerimg/BudgetGaming/GPU.jpg';
import MB from './containerimg/BudgetGaming/MB.jpg';
import Storage from './containerimg/BudgetGaming/Storage.jpg';
import Case from './containerimg/BudgetGaming/Case.jpg';

const components = [
  {
    title: 'Processor (CPU)',
    image: CPU,
    specs: [
      'Model: Intel Core i5-12400',
      'Cores/Threads: 6 cores, 12 threads',
      'Base Clock: 2.5 GHz',
      'Boost Clock: Up to 4.4 GHz',
      'TDP: 65W',
      'Price: ₹15,000',
    ],
    description:
      "Intel's Core i5-12400 is a solid choice for budget gaming PCs, offering excellent single-threaded performance.",
    amazonLink: 'https://www.amazon.in/s?k=Intel+Core+i5-12400',
  },
  {
    title: 'Graphics Card (GPU)',
    image: GPU,
    specs: [
      'Model: NVIDIA GTX 1650',
      'VRAM: 4GB GDDR5',
      'Core Clock: 1485 MHz',
      'Boost Clock: 1665 MHz',
      'Power Draw: 75W',
      'Price: ₹15,000',
    ],
    description:
      'The NVIDIA GTX 1650 provides decent 1080p gaming performance at an affordable price point.',
    amazonLink: 'https://www.amazon.in/s?k=NVIDIA+GTX+1650',
  },
  {
    title: 'Motherboard',
    image: MB,
    specs: [
      'Model: MSI B660M-A Pro',
      'Socket: LGA 1700',
      'Chipset: B660',
      'Form Factor: Micro-ATX',
      'Features: PCIe 4.0, USB 3.2 Gen 2',
      'Price: ₹9,000',
    ],
    description:
      'A reliable motherboard with all the necessary features for budget-friendly builds.',
    amazonLink: 'https://www.amazon.in/s?k=MSI+B660M-A+Pro',
  },
  {
    title: 'RAM',
    image: RAM,
    specs: [
      'Model: Corsair Vengeance LPX 16GB',
      'Configuration: 2x8GB',
      'Speed: 3200MHz',
      'Compatibility: DDR4 motherboards',
      'Price: ₹6,500',
    ],
    description:
      'Corsair Vengeance LPX ensures smooth multitasking and reliable performance for gaming.',
    amazonLink: 'https://www.amazon.in/s?k=Corsair+Vengeance+LPX+16GB',
  },
  {
    title: 'Storage',
    image: Storage,
    specs: [
      'Model: Crucial P3 500GB NVMe SSD',
      'Read Speed: Up to 3500 MB/s',
      'Write Speed: Up to 3000 MB/s',
      'Price: ₹4,500',
    ],
    description:
      'Fast storage solution to load games quickly and reduce system boot time.',
    amazonLink: 'https://www.amazon.in/s?k=Crucial+P3+500GB+NVMe',
  },
  {
    title: 'Cooling',
    image: Cooling,
    specs: [
      'Model: Stock Air Cooler',
      'Type: Air Cooling',
      'Compatibility: Intel LGA 1700 CPUs',
      'Price: Included with CPU',
    ],
    description:
      'The included stock cooler is sufficient for keeping the CPU cool under normal workloads.',
    amazonLink: '',
  },
  {
    title: 'Case',
    image: Case,
    specs: [
      'Model: Antec NX210',
      'Material: Steel and tempered glass',
      'Features: Good airflow, compact design',
      'Price: ₹2,500',
    ],
    description:
      'An affordable case with decent airflow and enough space for a budget build.',
    amazonLink: 'https://www.amazon.in/s?k=Antec+NX210',
  },
  {
    title: 'Power Supply Unit (PSU)',
    image: PSU,
    specs: [
      'Model: Ant Esports VS600',
      'Wattage: 600W',
      'Certification: 80+ Bronze',
      'Features: Non-modular cables',
      'Price: ₹2,500',
    ],
    description:
      'A budget-friendly PSU that provides reliable power delivery for entry-level gaming PCs.',
    amazonLink: 'https://www.amazon.in/s?k=Ant+Esports+VS600',
  },
];

const GamingContainer2 = () => {
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
            </div>
            {/* Removed Buy Now button from individual slides */}
          </div>
        ))}

        {/* Last Slide with Name and Model Only */}
        <div className="slide">
          <h1>All Parts Overview</h1>
          <table className="components-table">
            <thead>
              <tr>
                <th>Part</th>
                <th>Model</th>
                <th>Buy Now</th>
              </tr>
            </thead>
            <tbody>
              {components.map((component, index) => (
                <tr key={index}>
                  <td>{component.title}</td>
                  <td>{component.specs[0]}</td> {/* Display only the model name */}
                  <td>
                    {component.amazonLink && (
                      <a
                        href={component.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now-button"
                      >
                        Buy Now
                      </a>
                    )}
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

export default GamingContainer2;
