import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import MainLayout from '../mainLayout/MainLayout';
import ServicePage from '../pages/servicePage/ServicePage';
import AboutPage from '../pages/aboutPage/AboutPage';
import ContactPage from '../pages/contactPage/ContactPage';
import HomeScreenMain from '../pages/homePage/HomeScreenMain';

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
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;
