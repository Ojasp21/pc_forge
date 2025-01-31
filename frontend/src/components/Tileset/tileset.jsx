import { AiOutlineLoading } from "react-icons/ai"; 
import "./tileset.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import useBuildStore from "../../store/useBuildStore";
import { useAuthStore } from "../../store/useAuthStore";

export function Tileset({ setCartData }) {
    const [categories, setCategories] = useState([]);
    const { addedParts, removePart, fetchBuild } = useBuildStore();
    const { authUser } = useAuthStore();
    const [compatibilityResponse, setCompatibilityResponse] = useState("");
    const [showResponse, setShowResponse] = useState(false);
    const [ compLoading, setCompLoading ] = useState(false);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axiosInstance.get("/parts/categories");
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        if (authUser) {
            fetchBuild();
        }
    }, [authUser]);

    const parsePrice = (price) => {
        if (!price) return 0;
        return parseFloat(price.replace(/,/g, "").replace(/[^0-9.]/g, "")) || 0;
    };

    const totalPrice = addedParts.reduce(
        (sum, part) => sum + parsePrice(part.price),
        0
    );
    const handleCheckCompatibility = async () => {
        try {
            setCompLoading(true);
            // Extract only `title` and `category` from addedParts
            const parts = addedParts.map(part => ({
                category: part.category,
                title: part.title
            }));
    
            const response = await axiosInstance.post("/langflow/run-flow",  {parts} );
            console.log(response);
            // Update the state with compatibility response
            setCompatibilityResponse(response.data || "Compatibility check complete!");

        } catch (error) {
            console.error("Error checking compatibility:", error);
            setCompatibilityResponse("Error checking compatibility. Please try again.");
            setShowResponse(true);
        } finally {
            setCompLoading(false);
            setShowResponse(true);
        }
    };
    

    useEffect(() => {
        if (setCartData) {
            setCartData({ addedParts, removePart, totalPrice });
        }
    }, [addedParts, totalPrice, setCartData]);
    

    return (
        <div className="tileset-container">
            <h1 className="header text-3xl mt-5">Pick Your Parts</h1>
            <div id="container">
                <div id="added-parts">
                    <h2>Added Parts</h2>
                    <ul id="parts-list">
                        {categories.map((category) => (
                            <li key={category}>
                                <strong className="text-xl text-white">{category}</strong>
                                {addedParts
                                    .filter(part => part.category === category)
                                    .map((part) => (
                                        <div key={part._id}>
                                            <span>
                                                {part.title ? part.title.split(" ").slice(0, 10).join(" ") : "Unknown Part"}...
                                            </span>
                                            <button
                                                onClick={() => removePart(part._id)}
                                                className="remove-part"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))
                                }
                                {addedParts.filter(part => part.category === category).length === 0 && (
                                    <span>No parts in this category</span>
                                )}
                            </li>
                        ))}
                    </ul>
                    <h3 className="total-price">
                        Total Price: ₹{totalPrice.toLocaleString("en-IN")}
                    </h3>
                </div>

                <div id="outer" className="flex">
                    {categories.map((category) => (
                        <Link
                            key={category}
                            to={`/build/${category}`}
                            className="item"
                        >
                            <div className="tile-content">
                                <h3>{category}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="compatibility-box p-4 mt-5 w-[90%] mx-auto bg-gray-800 text-white rounded-lg shadow-lg items-center justify-center flex gap-1 flex-col">
                <h2 className=" text-2xl text-green-300 font-extrabold text-center">Compatibility Check</h2>
                {compLoading ? <div className="animate-spin flex items-center justify-center"><AiOutlineLoading size={"2rem"}/></div> : showResponse && <p className="mt-2 text-base">{compatibilityResponse}</p>}
                <button onClick={handleCheckCompatibility} className="mt-3 px-4 py-2  bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
                    Check Compatibility
                </button>
            </div>
        </div>
        );
}
