const express = require("express")
const { protect } = require("../middleware/authMiddleware");
const Contact = require("../models/Contact");
const router = express.Router()

router.post("/", protect, async (req, res) => {
    const { email } = req.body;

    const existing = await Contact.findOne({ email });

    if (existing) {
        return res.status(500).json({
            success: false,
            message: "You have already sent a message. We will get back to you soon."
        });
    }

    try {
        const contact = new Contact({
            ...req.body,
        });
        await contact.save();

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
})

module.exports = router;