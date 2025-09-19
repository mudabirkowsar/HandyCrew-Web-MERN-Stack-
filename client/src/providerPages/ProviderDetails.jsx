import React, { useEffect, useState } from "react";
import "./ProviderDetails.css";
import { provider } from "../api/api";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function ProviderDetails() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        serviceType: "",
        experience: "",
        rating: "",
        pricePerHour: "",
        phone: "",
        email: "",
        location: {
            city: "",
            state: "",
            zipcode: "",
            latitude: "",
            longitude: "",
        },
        availability: {
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: "",
            saturday: "",
            sunday: "",
        },
        profileImage: "",
        servicesOffered: "",
        isVerified: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.includes("location.")) {
            const key = name.split(".")[1];
            setFormData((prev) => ({
                ...prev,
                location: { ...prev.location, [key]: value },
            }));
        } else if (name.includes("availability.")) {
            const key = name.split(".")[1];
            setFormData((prev) => ({
                ...prev,
                availability: { ...prev.availability, [key]: value },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: type === "checkbox" ? checked : value,
            }));
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                ...formData,
                servicesOffered: formData.servicesOffered.split(",").map(s => s.trim()),
            };

            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("Please login first");
                navigate("/login");
                return;
            }

            const response = await provider(payload);
            if (response.data.success) {
                navigate("/provider-dashboard");
                toast.success(response.data.message || "Provider details submitted successfully");
            } else {
                toast.error(response.data.message || "Error submitting provider details");
            }
        } catch (error) {
            toast.error("Error submitting provider details or user already exists");
        }
    };


    return (
        <div className="provider-details-page">
            <h2>Provider Registration</h2>

            {/* Info Note */}
            <p className="note-text">
                Please fill in all your details carefully. Accurate information increases your chances of getting hired,
                builds trust with customers, and helps us verify your profile quickly.
            </p>

            <form onSubmit={handleSubmit} className="provider-form">

                {/* Personal Info */}
                <section>
                    <h3>Personal Information</h3>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Service Type</label>
                        <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a Service</option>
                            <option value="Plumber">Plumber</option>
                            <option value="Electrician">Electrician</option>
                            <option value="Mechanical">Mechanical</option>
                            <option value="AC and Cooling">AC and Cooling</option>
                            <option value="Carpentry">Carpentry</option>
                            <option value="Cleaning">Cleaning</option>
                            <option value="Painter">Painter</option>
                            <option value="Beautician">Beautician</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Experience (Years)</label>
                        <input type="number" name="experience" value={formData.experience} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Rating</label>
                        <input type="number" step="0.1" name="rating" value={formData.rating} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Price per Hour ($)</label>
                        <input type="number" name="pricePerHour" value={formData.pricePerHour} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                </section>

                {/* Location */}
                <section>
                    <h3>Location</h3>
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" name="location.city" value={formData.location.city} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <input type="text" name="location.state" value={formData.location.state} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Zipcode</label>
                        <input type="text" name="location.zipcode" value={formData.location.zipcode} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Latitude</label>
                        <input type="number" name="location.latitude" value={formData.location.latitude} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Longitude</label>
                        <input type="number" name="location.longitude" value={formData.location.longitude} onChange={handleChange} />
                    </div>
                </section>

                <section>
                    <h3>Availability</h3>
                    <div className="availability-group">
                        {Object.keys(formData.availability).map((day) => (
                            <div className="availability-item" key={day}>
                                <label>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
                                <div className="time-inputs">
                                    <input
                                        type="time"
                                        value={formData.availability[day]?.start || ""}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                availability: {
                                                    ...prev.availability,
                                                    [day]: {
                                                        ...prev.availability[day],
                                                        start: e.target.value,
                                                        off: false,
                                                    },
                                                },
                                            }))
                                        }
                                    />
                                    <input
                                        type="time"
                                        value={formData.availability[day]?.end || ""}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                availability: {
                                                    ...prev.availability,
                                                    [day]: {
                                                        ...prev.availability[day],
                                                        end: e.target.value,
                                                        off: false,
                                                    },
                                                },
                                            }))
                                        }
                                    />
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={formData.availability[day]?.off || false}
                                            onChange={(e) =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    availability: {
                                                        ...prev.availability,
                                                        [day]: {
                                                            ...prev.availability[day],
                                                            off: e.target.checked,
                                                        },
                                                    },
                                                }))
                                            }
                                        />
                                        Day Off
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Services */}
                <section>
                    <h3>Other Details</h3>
                    <div className="form-group">
                        <label>Profile Image URL</label>
                        <input type="url" name="profileImage" value={formData.profileImage} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Services Offered (comma separated)</label>
                        <input type="text" name="servicesOffered" value={formData.servicesOffered} onChange={handleChange} placeholder="Leak Repair, Pipe Replacement, Drain Cleaning" />
                    </div>
                    <div className="form-group checkbox">
                        <input type="checkbox" name="isVerified" checked={formData.isVerified} onChange={handleChange} />
                        <label>Verified Provider</label>
                    </div>
                </section>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default ProviderDetails;
