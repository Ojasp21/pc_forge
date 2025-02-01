import mongoose from "mongoose";

const { Schema } = mongoose;

const AccessoriesSchema = new Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: String, required: true },
  link: { type: String, required: true },
  image_url: { type: String, required: true }
});

const Accessories = mongoose.model("Accessories", AccessoriesSchema);
export default Accessories;
