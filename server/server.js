const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected "))
    .catch((err) => {
        console.log("Error in connection", err);
        process.exit(1);
    })

app.get("/", (req, res) => {
    res.send("Running huhu")
})

const authRoutes = require("./routes/authRoutes");
const providerRoutes = require("./routes/providerRoutes");
const contactRoutes = require("./routes/contactRoutes");
const dashobardRoutes = require("./routes/dashboardRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api", dashobardRoutes);

app.listen(process.env.PORT, () => {
    console.log("Running on port 5000")
})