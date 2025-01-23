import React, { useState } from 'react';
import './containercss/GamingContainer1.css';
import CPU from './containerimg/BudgetEditing/CPU.jpg';
import PSU from './containerimg/BudgetEditing/PSU.jpg';
import RAM from './containerimg/BudgetEditing/RAM.jpg';
import GPU from './containerimg/BudgetEditing/GPU.jpg';
import MB from './containerimg/BudgetEditing/MB.jpg';
import Storage from './containerimg/BudgetEditing/Storage.jpg';
import Case from './containerimg/BudgetEditing/Case.jpg';

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
      'Price: ₹13,000',
    ],
    description:
      'The AMD Ryzen 5 5600 is a great choice for photo editing, offering solid performance for most editing tasks.',
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
      'Price: ₹20,000',
    ],
    description:
      'The NVIDIA GTX 1660 Super provides sufficient performance for photo editing and light content creation tasks.',
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
      'Features: WiFi 6, PCIe 4.0, USB 3.2 Gen 1',
      'Price: ₹10,000',
    ],
    description:
      'A compact and affordable motherboard with excellent features for AM4 CPUs and content creation workloads.',
    amazonLink: 'https://www.amazon.in/s?k=MSI+B550M+PRO-VDH+WiFi',
  },
  {
    title: 'RAM',
    image: RAM,
    specs: [
      'Model: Corsair Vengeance LPX DDR4 16GB',
      'Configuration: 2x8GB',
      'Speed: 3200MHz',
      'Compatibility: DDR4 motherboards',
      'Price: ₹6,500',
    ],
    description:
      'Corsair Vengeance LPX RAM is perfect for smooth multitasking and efficient photo editing workflows.',
    amazonLink: 'https://www.amazon.in/s?k=Corsair+Vengeance+LPX+DDR4+16GB',
  },
  {
    title: 'Storage',
    image: Storage,
    specs: [
      'Model: WD Black SN770 1TB NVMe SSD',
      'Read Speed: Up to 5150 MB/s',
      'Write Speed: Up to 4900 MB/s',
      'Price: ₹8,000',
    ],
    description:
      'A high-performance SSD for fast load times and efficient photo editing project management.',
    amazonLink: 'https://www.amazon.in/s?k=WD+Black+SN770+1TB',
  },
  {
    title: 'Power Supply Unit (PSU)',
    image: PSU,
    specs: [
      'Model: Cooler Master MWE 550 V2',
      'Wattage: 550W',
      'Certification: 80+ Bronze',
      'Features: Non-modular',
      'Price: ₹3,500',
    ],
    description:
      'A budget-friendly PSU delivering stable power for a content creation PC.',
    amazonLink: 'https://www.amazon.in/s?k=Cooler+Master+MWE+550',
  },
  {
    title: 'Case',
    image: Case,
    specs: [
      'Model: DeepCool Matrexx 40',
      'Material: Steel and tempered glass',
      'Features: Compact design, good airflow',
      'Price: ₹3,000',
    ],
    description:
      'A compact and stylish case with good airflow for efficient cooling in a content creation PC.',
    amazonLink: 'https://www.amazon.in/s?k=DeepCool+Matrexx+40',
  },
];

const EditingContainer2 = () => {
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
            backgroundImage: `url(/src/components/containers/containerimg/BGImages/${index}.jpg)`,
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

export default EditingContainer2;







