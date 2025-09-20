const express = require("express")
const router = express.Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/User")


router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                message: "User already Exists",
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign({ id: user._id, name: user.name, role: user.role, email: user.email, location: user.location }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        })

        res.status(201).json({
            message: "User Regestred Successfully",
            token,
            user: { id: user._id, name: user.name, email: user.email }
        })

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
})


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({
                success: false,
                message: "User not found",
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({
                success: false,
                message: "Invalid Credentials",
            });
        }

        const token = jwt.sign({ id: user._id, name: user.name, role: user.role, email: user.email, location: user.location }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        })

        res.json({
            success: true,
            message: "Login Successfully",
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role }
        })
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message, success: false });
    }
})

// routes/user.js
router.put("/update", async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "No token provided" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: req.body },
            { new: true, runValidators: true }
        ).select("-password");

        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: "Error updating profile", error: err.message });
    }
});


router.get("/me", async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "No token provided" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");

        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (err) {
        res.status(401).json({ message: "Invalid token", error: err.message });
    }
});


module.exports = router;