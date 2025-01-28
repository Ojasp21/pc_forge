import './TilePage.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useParts } from '../../context/PartsContext';
import axiosInstance from '../../axiosInstance';

function TilePage() {
  const { category } = useParams();
  const { addPart, addedParts, removePart } = useParts();
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedParts, setExpandedParts] = useState({});

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await axiosInstance.get(`/parts/category/${category}`);
        setParts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching parts for category:', error);
        setLoading(false);
      }
    };

    fetchParts();
  }, [category]);

  const toggleDescription = (id) => {
    setExpandedParts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isSelected = (part) => addedParts.some((p) => p._id === part._id);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="parts-list">
      <h2 className="category-heading">
        {category} Parts
      </h2>
      {parts.length > 0 ? (
        parts.map((part) => (
          <div
            key={part._id}
            className={`part ${isSelected(part) ? 'selected' : ''}`}
          >
            <div className="part-image-container h-full align-top">
              <img src={part.image_url} alt={part.title} className="part-image" />
            </div>
            <div className="part-content">
              <h3 className="part-title">{part.title}</h3>
              <p className="part-price">Price: ₹{part.price}</p>
              <p className="part-rating">Rating: {part.rating}</p>
              <div className="part-buttons">
                <a
                  href={part.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buy-now"
                >
                  Buy Now
                </a>
                <button
                  onClick={() => (isSelected(part) ? removePart(part._id) : addPart(part))}
                  className="add-to-list"
                >
                  {isSelected(part) ? 'Remove from List' : 'Add to List'}
                </button>
                <button
                  onClick={() => toggleDescription(part._id)}
                  className="toggle-description"
                >
                  {expandedParts[part._id] ? 'Hide Description' : 'Show Description'}
                </button>
              </div>
              {expandedParts[part._id] && (
                <table className="part-details">
                  <tbody>
                    {Object.entries(part.details).map(([key, value]) => (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {isSelected(part) && <div className="tick-icon">✔</div>}
            </div>
          </div>
        ))
      ) : (
        <p className="no-parts">No parts available in this category</p>
      )}
    </div>
  );
}

export default TilePage;


// import './TilePage.css';
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import usePartStore from '../../store/usePartStore'; // Adjust path based on your file structure
// import axiosInstance from '../../axiosInstance';

// function TilePage() {
//   const { category } = useParams();
//   const { addPart, addedParts, removePart } = usePartStore((state) => ({
//     addPart: state.addPart,
//     addedParts: state.addedParts,
//     removePart: state.removePart,
//   }));
//   const [parts, setParts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [expandedParts, setExpandedParts] = useState({});

//   useEffect(() => {
//     const fetchParts = async () => {
//       try {
//         const response = await axiosInstance.get(`/parts/category/${category}`);
//         setParts(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching parts for category:', error);
//         setLoading(false);
//       }
//     };

//     fetchParts();
//   }, [category]);

//   const toggleDescription = (id) => {
//     setExpandedParts((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const isSelected = (part) => addedParts.some((p) => p._id === part._id);

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   return (
//     <div className="parts-list">
//       <h2 className="category-heading">{category} Parts</h2>
//       {parts.length > 0 ? (
//         parts.map((part) => (
//           <div
//             key={part._id}
//             className={`part ${isSelected(part) ? 'selected' : ''}`}
//           >
//             <div className="part-image-container h-full align-top">
//               <img src={part.image_url} alt={part.title} className="part-image" />
//             </div>
//             <div className="part-content">
//               <h3 className="part-title">{part.title}</h3>
//               <p className="part-price">Price: ₹{part.price}</p>
//               <p className="part-rating">Rating: {part.rating}</p>
//               <div className="part-buttons">
//                 <a
//                   href={part.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="buy-now"
//                 >
//                   Buy Now
//                 </a>
//                 <button
//                   onClick={() =>
//                     isSelected(part) ? removePart(part._id) : addPart(part)
//                   }
//                   className="add-to-list"
//                 >
//                   {isSelected(part) ? 'Remove from List' : 'Add to List'}
//                 </button>
//                 <button
//                   onClick={() => toggleDescription(part._id)}
//                   className="toggle-description"
//                 >
//                   {expandedParts[part._id] ? 'Hide Description' : 'Show Description'}
//                 </button>
//               </div>
//               {expandedParts[part._id] && (
//                 <table className="part-details">
//                   <tbody>
//                     {Object.entries(part.details).map(([key, value]) => (
//                       <tr key={key}>
//                         <td>{key}</td>
//                         <td>{value}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}
//               {isSelected(part) && <div className="tick-icon">✔</div>}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className="no-parts">No parts available in this category</p>
//       )}
//     </div>
//   );
// }

// export default TilePage;
