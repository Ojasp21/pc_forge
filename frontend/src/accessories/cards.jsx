import './cards.css';

export default function Cards({ title }) {
  return (
    <div className="card">
     
      <h3 id="type">{title}</h3>

      {/* Buttons Section */}
      {/* <div className="buttons">
        <button className="btn buy-now">Buy Now</button>
        <button className="btn add-to-cart">Add to Cart</button>
        <button className="btn more-details">More Details</button>
      </div> */}
    </div>
  );
}

