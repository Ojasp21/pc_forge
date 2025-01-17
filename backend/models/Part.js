
// const mongoose = require('mongoose');

// // const partSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   category: { type: String, required: true },
// //   price: { type: Number, required: true },
// //   description: { type: String, required: true },
// //   image: { type: String }, 
// // });

// const partSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   price: { type: String, required: true },
//   rating: { type: String, required: true },
//   link: { type: String, required: true },
//   image_url: { type: String, required: true },
// });

// module.exports = mongoose.model('Part', partSchema);



const mongoose = require('mongoose');
const { Schema } = mongoose;

const partSchema = new Schema({
  category: {type: String, required:true},
  title: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: String, required: true },
  link: { type: String, required: true },
  image_url: { type: String, required: true },
  details: { type: Schema.Types.Mixed }, // Flexible field for dynamic details
});

const Part = mongoose.model('Part', partSchema);
module.exports = Part;