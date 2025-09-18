const express = require("express")
const { protect } = require("../middleware/authMiddleware");
const Contact = require("../models/Contact");
const router = express.Router()

router.post("/", protect, async (req, res) => {
    // const { name, email, subject, message } = req.body;

    try {
        const contact = new Contact({
            ...req.body,
        });
        await contact.save();

        res.status(201).json({
            message: "Message sent successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
})

module.exports = router;