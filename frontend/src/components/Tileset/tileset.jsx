import './tileset.css';
      import { useEffect, useState } from 'react';
      import { Link } from 'react-router-dom';
      import { useParts } from '../../context/PartsContext';
      import axiosInstance from '../../axiosInstance';
      
      export function Tileset() {
        const [categories, setCategories] = useState([]);
        const { addedParts, removePart } = useParts();
      
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
      
        // Helper function to parse and clean prices
        const parsePrice = (price) => {
          if (!price) return 0;
          return parseFloat(price.replace(/,/g, '').replace(/[^0-9.]/g, '')) || 0;
        };
      
        // Calculate total price
        const totalPrice = addedParts.reduce((sum, part) => sum + parsePrice(part.price), 0);
      
        return (
          <div className="tileset-container ">
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
                      <button onClick={() => removePart(part._id)} className="remove-part">Remove</button>
                    </li>
                  ))}
                </ul>
                <h3 className="total-price">Total Price: ₹{totalPrice.toLocaleString('en-IN')}</h3>
              </div>
              <div id="outer" className='flex'>
                {categories.map((category) => (
                  <Link key={category} to={`/build/${category}`} className="item">
                    <div className="tile-content ">
                      <h3>{category}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      }