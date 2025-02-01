import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance.js";
import Cards from "./cards";
import "./Allcards.css";

export default function Allcards() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/parts/accessories/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching accessory categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="cards-container">
      {categories.map((category) => (
        <Link
          to={`/accessories/${category.replace(/&/g, "and").replace(/\s+/g, "-")}`}
          key={category}
          className="card-link"
        >
          <Cards title={category} />
        </Link>
      ))}
    </div>
  );
}
