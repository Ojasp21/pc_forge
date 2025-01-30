import express from "express";
import Build from "../models/Build.js";
import Part from "../models/Part.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

// Get User's Build
router.get("/", protectRoute, async (req, res) => {
    try {
        const build = await Build.findOne({ userId: req.user.id })
            .populate('parts');
            
        res.json(build || { userId: req.user.id, parts: [] });
    } catch (error) {
        console.error("Error fetching build:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Add Part to Build
router.post("/add", protectRoute, async (req, res) => {
    const { partId } = req.body;

    try {
        let build = await Build.findOne({ userId: req.user.id });
        if (!build) {
            build = new Build({ userId: req.user.id, parts: [] });
        }

        const part = await Part.findById(partId);
        if (!part) {
            return res.status(404).json({ message: "Part not found" });
        }

        // Get all parts to check category
        const populatedBuild = await Build.findOne({ userId: req.user.id }).populate('parts');
        
        // Check if a part of the same category already exists
        if (populatedBuild && populatedBuild.parts.some(existingPart => existingPart.category === part.category)) {
            return res.status(400).json({ 
                message: `Only one ${part.category} allowed per build` 
            });
        }

        // Add the part ID directly to the parts array
        build.parts.push(partId);
        await build.save();

        // Return the updated and populated build
        const updatedBuild = await Build.findOne({ userId: req.user.id })
            .populate('parts');
            
        res.json(updatedBuild);
    } catch (error) {
        console.error("Error adding part:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Remove Part from Build
router.post("/remove", protectRoute, async (req, res) => {
    const { partId } = req.body;

    try {
        let build = await Build.findOne({ userId: req.user.id });
        if (!build) {
            return res.status(404).json({ message: "Build not found" });
        }

        // Remove the part ID directly
        build.parts = build.parts.filter(part => part.toString() !== partId);
        await build.save();

        // Return the updated and populated build
        const updatedBuild = await Build.findOne({ userId: req.user.id })
            .populate('parts');
            
        res.json(updatedBuild);
    } catch (error) {
        console.error("Error removing part:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Reset Build
router.delete("/reset", protectRoute, async (req, res) => {
    try {
        await Build.findOneAndDelete({ userId: req.user.id });
        res.json({ message: "Build reset successfully" });
    } catch (error) {
        console.error("Error resetting build:", error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;