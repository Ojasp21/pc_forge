import React from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
import  useBuildStore  from "../store/useBuildStore.js";
const Checkout = () => {
    const navigate = useNavigate();
    const { addedParts, removePart } = useBuildStore();
    return (
        <div className="checkout-container">
            <h2 className="checkout-header">Your Cart</h2>
            
            {addedParts.length > 0 ? (
                <>
                    <ul className="checkout-list">
                        {addedParts.map((part) => (
                            <li key={part._id} className="checkout-item">
                                <img src={part.image_url} alt={part.title} className="checkout-image" />
                                <div className="checkout-details">
                                    <h3>{part.title}</h3>
                                    <p>Price: ₹{part.price}</p>
                                    <button className="remove-button" onClick={() => removePart(part._id)}>
                                        Remove
                                    </button>
                                    <button 
                                        className="buy-now-button" 
                                        onClick={() => window.open(part.link, "_blank")}
                                        >
                                        Buy Now
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {/* <h3 className="checkout-total">Total: ₹{totalPrice.toLocaleString("en-IN")}</h3> */}
                    
                </>
            ) : (
                <p className="empty-cart">Your cart is empty.</p>
            )}

            <button className="back-button" onClick={() => navigate(-1)}> Back</button>
        </div>
    );
};

export default Checkout;
