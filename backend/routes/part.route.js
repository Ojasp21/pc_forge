import express from "express";
import Part from "../models/Part.js";
import Accessories from "../models/Accessories.js"
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



router.get('/categories', async (req, res) => {
  // Get distinct categories from the database
  const categories = await Part.distinct('category');
  res.json(categories);
});

router.get('/accessories/categories', async (req, res) => {
  try {
    const categories = await Accessories.distinct('category');
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching accessory categories' });
  }
});

router.get('/accessories/category/:category', async (req, res) => {
  try {
    const parts = await Accessories.find({ category: req.params.category });
    res.json(parts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching accessories by category' });
  }
});


export default router;