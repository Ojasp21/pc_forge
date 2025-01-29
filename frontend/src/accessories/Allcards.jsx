import Cards from "./cards";
import "./Allcards.css";

export default function Allcards() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Even space between the cards
        width: "100%", // Ensure the container takes full width
        gap: "20px", // Add spacing between the cards
        backgroundColor: "linear-gradient(to right, #01141D, #022739)", // Background gradient
        flexWrap: "wrap", // Allows cards to wrap to next line
      }}
    >
      <Cards title={"Gaming"} />
      <Cards title={"Custom"} />
      <Cards title={"Professional"} />
      <Cards title={"Performance"} />
      <Cards title={"Performance"} />
      <Cards title={"Performance"} />
    </div>
  );
}

