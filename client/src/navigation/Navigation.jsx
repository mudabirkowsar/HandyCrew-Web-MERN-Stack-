import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import MainLayout from '../mainLayout/MainLayout';
import ServicePage from '../pages/servicePage/ServicePage';
import AboutPage from '../pages/aboutPage/AboutPage';
import ContactPage from '../pages/contactPage/ContactPage';
import HomeScreenMain from '../pages/homePage/HomeScreenMain';
import Login from '../pages/loginSignup/Login';
import Signup from '../pages/loginSignup/Signup';
import ServiceDetailPage from '../pages/servicePage/ServiceDetailPage';
import ProviderDetail from '../pages/servicePage/ProviderDetail';
import ProviderDetails from '../providerPages/ProviderDetails';
import ProviderDashboard from '../providerPages/providerDashboard/ProviderDashboard';

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Wrap pages that should have Navbar inside MainLayout */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomeScreenMain />} />
                    <Route path="services" element={<ServicePage/>} />
                    <Route path="about" element={<AboutPage/>} />
                    <Route path="contact" element={<ContactPage/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="signup" element={<Signup/>} />

                    <Route path="service/:id" element={<ServiceDetailPage/>} />
                    <Route path="provider/:id" element={<ProviderDetail/>} />

                    <Route path="become-a-provider" element={<ProviderDetails/>} />
                    <Route path="provider-dashboard" element={<ProviderDashboard/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;
