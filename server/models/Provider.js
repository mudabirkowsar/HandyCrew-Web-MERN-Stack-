const mongoose = require("mongoose")

const providerSchema = new mongoose.Schema({
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
        default: 0
    },
    pricePerHour: {
        type: Number,
        required: true,
    },
    phone: {
        type: Number,
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
        monday: String,
        tuesday: String,
        wednesday: String,
        thursday: String,
        friday: String,
        saturday: String,
        sunday: String,
    },
    profileImage: {
        type: String,
        required: true,
    },
    servicesOffered: [String],
    isVerified: {
        type: Boolean,
        default: false
    },
    reviews: [
        {
            user: String,
            rating: Number,
            comment: String,
        },
    ],

}, { timestamps: true })

module.exports = mongoose.model("Provider", providerSchema);