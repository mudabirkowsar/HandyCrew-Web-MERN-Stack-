const express = require("express")
const router = express.Router();

const { authMiddleware } = require("../middleware/authMiddleware");
const Provider = require("../models/Provider");

router.post("/", authMiddleware, async (req, res) => {
    try {
        const provider = new Provider({
            user: req.body.id,
            ...req.body,
        });

        await Provider.save();
        res.status(201).json({
            message: "Regestered Successfully",
            provider,
        })
    } catch (error) {
        res.status(400).json({
            message: "Error creating provider",
            error: error.message,
        })
    }
})

router.get("/", async (req, res) => {
    try {
        const providers = await Provider.find()
        res.json(providers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching providers" });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const provider = await Provider.findById(req.params.id);
        if (!provider) return res.status(404).json({ message: "Provider not found" });
        res.json(provider);
    } catch (error) {
        res.status(500).json({ message: "Error fetching provider" });
    }
});

module.exports = router;