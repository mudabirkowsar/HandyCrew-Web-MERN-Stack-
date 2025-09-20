import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCurrentUser, updateUser } from "../../../api/api";
import "./UpdatePage.css";
import { toast } from "react-toastify";

function UpdatePage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        city: "",
        state: "",
        zipcode: ""
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await getCurrentUser();
                const user = res.data;

                setFormData({
                    name: user.name || "",
                    phone: user.phone || "",
                    city: user.location?.city || "",
                    state: user.location?.state || "",
                    zipcode: user.location?.zipcode || "",
                });
            } catch (err) {
                console.error("Error fetching user", err);
            }
        };
        fetchUser();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await updateUser({
                name: formData.name,
                phone: formData.phone,
                location: {
                    city: formData.city,
                    state: formData.state,
                    zipcode: formData.zipcode,
                },
            });
            toast("Profile updated successfully!");
            console.log("Updated User:", res.data);
        } catch (err) {
            console.error("Error updating profile", err.response?.data || err.message);
        }
    };

    return (
        <div className="update-page">
            <h2>Update Profile</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
                <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
                <input type="text" name="zipcode" placeholder="Zipcode" value={formData.zipcode} onChange={handleChange} />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}

export default UpdatePage;
