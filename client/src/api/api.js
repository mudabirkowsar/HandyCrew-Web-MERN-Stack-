import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
})

// 🔹 Automatically add token (if logged in)
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export const getCurrentUser = () => API.get("/auth/me");

export const registerUser = (userData) => API.post("/auth/signup", userData);

export const loginUser = (userData) => API.post("/auth/login", userData);

export const updateUser = (userData) => API.put("/auth/update", userData);

export const contact = (contactData) => API.post("/contact", contactData);

export const provider = (providerData) => API.post("/providers", providerData);

export const getAllProviders = () => API.get("/providers");

export const getProviderById = (id) => API.get(`/providers/${id}`);

export const getDashboardData = () => API.get("/dashboard");

