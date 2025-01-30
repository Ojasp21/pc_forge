

import { Link } from "react-router-dom";
import Cards from "./cards";
import "./Allcards.css";

const categories = ["Mouse & Mouse Pads", "Keyboard", "Monitor", "Speaker", "Headphones", "Webcameras"];

export default function Allcards() {
  return (
    <div className="cards-container">
      {categories.map((category) => (
        <Link to={`/category/${category}`} key={category} className="card-link">
          <Cards title={category} />
        </Link>
      ))}
    </div>
  );
}
