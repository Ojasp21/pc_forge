import express from "express";
import Part from "../models/Part.js";

const router = express.Router();

router.get('/parts/:id', async (req, res) => {
  try {
    const parts = await Part.find(req.params.id);
    if(!part){
      return res.status(404).json({message: 'Part not found'});
    }
    res.json(parts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching parts' });
  }
});

// API to get parts by category
router.get('/category/:category', async (req, res) => {
  try {
    const parts = await Part.find({ category: req.params.category });
    res.json(parts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching parts by category' });
  }
});


// Example route for categories (add this to your backend)
router.get('/categories', async (req, res) => {
  // Get distinct categories from the database
  const categories = await Part.distinct('category');
  res.json(categories);
});

export default router;