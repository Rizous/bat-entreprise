import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import RealisationPage from './pages/RealisationPage.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

// ✅ Wrapper pour gérer les animations par page
function AnimatedRoutes() {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/realisation" element={<RealisationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    );
}

function App() {
    return (
        <Router basename="/BAT-Entreprise">
            <ScrollToTop />
            <div className="App">
                <Header />
                <main>
                    <AnimatedRoutes />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
