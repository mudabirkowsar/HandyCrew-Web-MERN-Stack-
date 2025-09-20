const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please add a valid email",
        ],
    },
    image:{
        type: String,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    phone:{
        type: Number,
    },
    location: {
        city: String,
        state: String,
        zipcode: String,
        latitude: Number,
        longitude: Number,
    },
    role: {
        type: String,
        enum: ["user", "provider", "admin"],
        default: "user"
    },
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema);