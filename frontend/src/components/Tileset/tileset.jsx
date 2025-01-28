import './tileset.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParts } from '../../context/PartsContext';
import axiosInstance from '../../axiosInstance';

export function Tileset() {
  const [categories, setCategories] = useState([]);
  const { addedParts, addPart, removePart } = useParts();
  const [selectedParts, setSelectedParts] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get('/parts/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const toggleSelectedPart = (part) => {
    const isAdded = selectedParts[part._id];
    setSelectedParts((prev) => ({
      ...prev,
      [part._id]: !isAdded,
    }));

    if (!isAdded) {
      addPart(part);
    } else {
      removePart(part._id);
    }
  };

  return (
    <div className="tileset-container">
      <h1 className="header text-3xl mt-5">Pick Your Parts</h1>
      <div id="container">
        <div id="added-parts">
          <h2>Added Parts</h2>
          <ul id="parts-list">
            {addedParts.map((part) => (
              <li key={part._id}>
                <span>
                  <strong>{part.category}:</strong> {part.title.split(' ').slice(0, 10).join(' ')}...
                </span>
                <button onClick={() => removePart(part._id)} className="remove-part">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div id="outer" className="flex">
          {categories.map((category) => (
            <Link key={category} to={`/build/${category}`} className="item">
              <div
                className={`tile-content relative ${selectedParts[category] ? 'selected' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleSelectedPart({ _id: category, category });
                }}
              >
                <h3>{category}</h3>
                {selectedParts[category] && (
                  <div className="tick-icon">&#x2713;</div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
