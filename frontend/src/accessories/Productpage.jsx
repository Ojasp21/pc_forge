import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './product.css';

export default function ProductsPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDescription, setShowDescription] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:2000/api/category/${encodeURIComponent(categoryName)}`);
        if (!response.ok) throw new Error('Failed to fetch products');
        
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  const handleBuyNow = (amazonLink) => {
    if (amazonLink) {
      window.open(amazonLink, "_blank"); // Opens Amazon link in a new tab
    } else {
      alert("Amazon link not available for this product.");
    }
  };

  const handleAddToCart = (productId) => {
    alert(`Added product ID: ${productId} to cart`);
  };

  const toggleDescription = (productId) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  return (
    <div className="products-container">
      <h1>{categoryName} Products</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>Price: ₹{product.price.toLocaleString("en-IN")}</p>
              
              <button onClick={() => handleBuyNow(product.amazonLink)}>Buy Now</button>
              <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
              <button onClick={() => toggleDescription(product._id)}>
                {showDescription[product._id] ? 'Hide Description' : 'Show Description'}
              </button>

              {showDescription[product._id] && <p>{product.description}</p>}
            </div>
          ))
        ) : (
          !loading && <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}