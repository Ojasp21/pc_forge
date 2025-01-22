import './TilePage.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useParts } from '../../context/PartsContext';
import axiosInstance from '../../axiosInstance';

function TilePage() {
  const { category } = useParams();
  const { addPart } = useParts();
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

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="parts-list">
      <h2 className="category-heading">{category} Parts</h2>
      {parts.length > 0 ? (
        parts.map((part) => (
          <div key={part._id} className="part ">
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
                <button onClick={() => addPart(part)} className="add-to-list">
                  Add to List
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
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Value</th>
                    </tr>
                  </thead>
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
