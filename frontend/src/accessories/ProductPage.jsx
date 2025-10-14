import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosInstance.js";
import "./ProductPage.css";

export default function ProductPage() {
  const { category } = useParams();
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await axiosInstance.get(`/parts/accessories/category/${category}`);
        setParts(response.data);
      } catch (error) {
        console.error("Error fetching parts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchParts();
  }, [category]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="product-page">
      <h2 className="category-title">{category} Accessories</h2>
      <div className="product-list">
        {parts.length > 0 ? (
          parts.map((part) => (
            <div key={part._id} className="product-item">
              <img src={part.image_url} alt={part.title} className="product-image" />
              <div className="product-details">
                <h3 className="product-title">{part.title}</h3>
                <p className="product-price">Price: ₹{part.price}</p>
              </div>
              <a href={part.link} target="_blank" rel="noopener noreferrer" className="buy-now">
                Buy Now
              </a>
            </div>
          ))
        ) : (
          <p className="no-products">No products available in this category.</p>
        )}
      </div>
    </div>
  );
}
