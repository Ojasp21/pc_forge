const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Part = require('./models/Part');

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://akashkawle2995:mongodb2995@cluster0.85no6.mongodb.net/pcforge?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

// API to get all parts
app.get('/api/parts', async (req, res) => {
  try {
    const parts = await Part.find({});
    res.json(parts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching parts' });
  }
});

// API to get parts by category
app.get('/api/parts/category/:category', async (req, res) => {
  try {
    const parts = await Part.find({ category: req.params.category });
    res.json(parts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching parts by category' });
  }
});
// Example route for categories (add this to your backend)
app.get('/api/categories', async (req, res) => {
  // Get distinct categories from the database
  const categories = await Part.distinct('category');
  res.json(categories);
});

// Start the server
const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
