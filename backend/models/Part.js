


import mongoose from "mongoose";

const { Schema } = mongoose;

const partSchema = new Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: String, required: true },
  link: { type: String, required: true },
  image_url: { type: String, required: true },
  details: { type: Schema.Types.Mixed },
});

const Part = mongoose.model("Part", partSchema);
export default Part;
