const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        name: {
            type: String,
            required: true,
        },
        serviceType: {
            type: String,
            required: true,
        },
        experience: {
            type: Number,
            required: true,
            default: 0,
        },
        rating: {
            type: Number,
            default: 0,
        },
        pricePerHour: {
            type: Number,
            required: true,
        },
        phone: {
            type: String, // ✅ changed from Number → to allow +91..., etc.
            required: true,
        },
        email: {
            type: String,
            required: true,
        },

        location: {
            city: String,
            state: String,
            zipcode: String,
            latitude: Number,
            longitude: Number,
        },

        availability: {
            monday: { start: String, end: String, off: { type: Boolean, default: false } },
            tuesday: { start: String, end: String, off: { type: Boolean, default: false } },
            wednesday: { start: String, end: String, off: { type: Boolean, default: false } },
            thursday: { start: String, end: String, off: { type: Boolean, default: false } },
            friday: { start: String, end: String, off: { type: Boolean, default: false } },
            saturday: { start: String, end: String, off: { type: Boolean, default: false } },
            sunday: { start: String, end: String, off: { type: Boolean, default: false } },
        },

        profileImage: {
            type: String, // ✅ no longer required
        },

        servicesOffered: [String],

        isVerified: {
            type: Boolean,
            default: false,
        },

        reviews: [
            {
                user: String,
                rating: Number,
                comment: String,
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Provider", providerSchema);
