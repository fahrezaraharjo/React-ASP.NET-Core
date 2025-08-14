import React from 'react';
import './App.css';
import LoginForm from "./components/sections/LoginForm";
import { ToastContainer } from './components/Toast/ToastContainer';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import VibrationReportPage from './pages/VibrationReportPage';
import Navbar from './components/ui/Navbar';

const AppContent: React.FC = () => {
    const location = useLocation();

    return (
        <>
            <ToastContainer />

            {/* Tampilkan Navbar kalau bukan di /login */}
            {location.pathname !== '/login' && <Navbar />}

            <Routes>
                {/* Default ke /login */}
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/report" element={<VibrationReportPage />} />
            </Routes>
        </>
    );
};

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
