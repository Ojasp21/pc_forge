// // import { useState, createContext, useContext } from "react";

// // const PartsContext = createContext();


// // const PartsProvider = ({ children }) => {
  // //   const [parts, setParts] = useState([]); 
  // //   return (
    // //     <PartsContext.Provider value={{ parts, setParts }}>
    // //       {children}
    // //     </PartsContext.Provider>
    // //   );
    // // };
    
    
    // // const useParts = () => useContext(PartsContext);
    
    
    // // export const Tileset = () => {
// //   const { parts } = useParts();

// //   return (
  // //     <div>
  // //       <h1>Pick Your Parts</h1>
  // //       <div id="container">
  // //         <div id="added-parts">
  // //           <h2>Added Parts</h2>
  // //           <ul id="parts-list">
  // //             {parts.map((part, index) => (
    // //               <li key={index}>{part}</li>
    // //             ))}
    // //           </ul>
    // //         </div>
    // //         <div id="outer">
    // //           {Array.from({ length: 11 }, (_, index) => (
      // //             <Link to={`/tile/${index + 1}`} key={index}>
      // //               <div className="item" id={`tile-${index + 1}`}>
      // //                 Tile {index + 1}
      // //               </div>
      // //             </Link>
      // //           ))}
      // //         </div>
      // //       </div>
      // //     </div>
      // //   );
      // // };
      
      
      // // export const TilePage = () => {
        // //   const { number } = useParams(); 
        // //   const { parts, setParts } = useParts();

        // //   const handleAddTile = (tileNumber) => {
          // //     if (!parts.includes(tileNumber)) {
            // //       setParts((prevParts) => [...prevParts, tileNumber]);
            // //     }
            // //   };
            
            // //   return (
              // //     <div>
              // //       <h1>Tile {number}</h1>
              // //       <div id="container">
              // //         <div id="added-parts">
              // //           <h2>Added Parts</h2>
              // //           <ul id="parts-list">
              // //             {parts.map((part, index) => (
                // //               <li key={index}>{part}</li>
                // //             ))}
                // //           </ul>
                // //         </div>
                // //         <div id="outer">
                // //           {Array.from({ length: 5 }, (_, index) => (
                  // //             <div
                  // //               className="item"
                  // //               key={index + 1}
                  // //               onClick={() => handleAddTile(parseInt(number, 10) * 100 + index + 1)} // Unique identifier for inner tiles
                  // //             >
                  // //               Tile {number}.{index + 1}
                  // //             </div>
                  // //           ))}
                  // //         </div>
                  // //       </div>
                  // //       <Link to="/build">Back to Tileset</Link>
                  // //     </div>
                  // //   );
                  // // };
                  
                  
                  
                  // import { useState } from "react";
                  // import { Link, useParams } from "react-router-dom";
                  // import "./tileset.css";
                  
                  // export const Tileset = () => {
                    //   const [parts, setParts] = useState([]);
                    //   const tilenames = [
                      //     'CPU', 'GPU', 'Motherboard', 'Memory', 'Storage', 'Cabinet', 'Fans and Cooling', 'Power Supply','OS', 'Monitor','Mouse and Keyboard'
                      //   ]
//   return (
  //     <div className="pt-5">
  //       <h1 className=" text-2xl">Pick Your Parts</h1>
  //       <div id="container">
  //         <div id="added-parts">
  //           <h2>Added Parts</h2>
  //           <ul id="parts-list">
  //             {parts.map((part, index) => (
    //               <li key={index}>{part}</li>
    //             ))}
    //           </ul>
    //         </div>
    //         <div id="outer">
    //           {Array.from({ length: 11 }, (_, index) => (
      //             <Link to={`/tile/${index + 1}`} key={index}>
      //               <div className="item text-3xl" id={`tile-${index + 1}`}>
      //                 {/* Tile {index + 1} */}
      //                 {tilenames[index]}
      //               </div>
      //             </Link>
      //           ))}
      //         </div>
      //       </div>
      //     </div>
      //   );
      // };
      
      // export const TilePage = () => {
        //   const { number } = useParams();
        //   const [parts, setParts] = useState([]);
        
        //   const handleAddTile = (tileNumber) => {
          //     if (!parts.includes(tileNumber)) {
            //       setParts((prevParts) => [...prevParts, tileNumber]);
//     }
//   };

//   return (
  //     <div>
  //       <h1>Tile {number}</h1>
  //       <div id="container">
  //         <div id="added-parts">
  //           <h2>Added Parts</h2>
  //           <ul id="parts-list">
  //             {parts.map((part, index) => (
    //               <li key={index}>{part}</li>
    //             ))}
    //           </ul>
    //         </div>
    //         <div id="outer">
    //           {Array.from({ length: 5 }, (_, index) => (
      //             <div
      //               className="item"
      //               key={index + 1}
      //               onClick={() => handleAddTile(parseInt(number, 10) * 100 + index + 1)} // Unique identifier for inner tiles
      //             >
      //               Tile {number}.{index + 1}
      //             </div>
      //           ))}
      //         </div>
      //       </div>
      //       <Link to="/build/">Back to Tileset</Link>
      //     </div>
      //   );
      // import "./tileset.css";
      // // };
      // import { useEffect, useState } from 'react';
      // import { Link } from 'react-router-dom';
      // import axiosInstance from '../../axiosInstance.js'; // Import the axios instance
      
      // export function Tileset() {
      //   const [categories, setCategories] = useState([]);
      
      //   // Fetch categories from the backend (assuming you have an endpoint for this)
      //   useEffect(() => {
      //     const fetchCategories = async () => {
      //       try {
      //         const response = await axiosInstance.get('/api/categories'); // Adjust API endpoint as needed
      //         setCategories(response.data);
      //       } catch (error) {
      //         console.error('Error fetching categories:', error);
      //       }
      //     };
      
      //     fetchCategories();
      //   }, []);
      
      //   return (
      //     <div className="tileset-container mt-5">
      //       <h1 className="header text-3xl">Pick Your Parts</h1>
      //       <div id="container">
      //         <div id="added-parts">
      //           <h2>Added Parts</h2>
      //           <ul id="parts-list">
      //             {/* Add dynamically added parts here */}
      //           </ul>
      //         </div>
      //         <div id="outer">
      //           {categories.map((category) => (
      //             <Link key={category} to={`/build/${category}`} className="item">
      //               <div className="tile-content">
      //                 <h3>{category}</h3>
      //               </div>
      //             </Link>
      //           ))}
      //         </div>
      //       </div>
      //     </div>
      //   );
      // }
      
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
      