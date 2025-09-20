const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Provider = require("../models/Provider");

router.get("/dashboard", async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "No token provided" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        const provider = await Provider.findOne({ user: userId }).populate("user", "-password");
        // const provider = await Provider.findOne({ user: userId })

        if (!provider) return res.status(404).json({ message: "Provider not found" });

        res.status(200).json(provider);
    } catch (err) {
        res.status(401).json({ message: "Invalid token", error: err.message });
    }
});

module.exports = router;
