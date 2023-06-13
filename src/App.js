import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ApartmentsPage from './pages/ApartmentsPage';
import ReservationPage from './pages/ReservationPage';
import ContactPage from './pages/ContactPage';



function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/apartments" element={<ApartmentsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/reservation" element={<ReservationPage />} />
            </Routes>
        </div>
    );
}

export default App;
