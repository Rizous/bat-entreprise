import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('no-scroll');
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('no-scroll');
    };

    return (
        <header className="bg-primary fixed top-0 left-0 right-0 z-50 shadow-lg" style={{ height: '90px' }}>
            <nav className="navbar h-full flex justify-between items-center px-6 py-0" aria-label="Navigation principale">
                <Link to="/" className="logo text-white text-3xl font-bold flex items-center" aria-label="BAT Enterprise - Retour à l'accueil" style={{ height: '100%' }}>
                    <span className="transition-all duration-300">BAT Enterprise</span>
                </Link>
                <button
                    className={`mobile-menu-toggle md:hidden text-white text-2xl flex flex-col justify-center items-center w-10 h-10 ${isMenuOpen ? 'open' : ''}`}
                    aria-expanded={isMenuOpen}
                    aria-controls="nav-links"
                    style={{ height: '40px', width: '40px' }}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Menu</span>
                    <span className="bar block w-8 h-1 bg-white my-1 transition-all duration-300"></span>
                    <span className="bar block w-8 h-1 bg-white my-1 transition-all duration-300"></span>
                    <span className="bar block w-8 h-1 bg-white my-1 transition-all duration-300"></span>
                </button>
<ul
  id="nav-links"
  className={`nav-links ${
    isMenuOpen
      ? 'flex flex-col absolute top-[90px] left-0 w-full bg-primary z-40 space-y-6 py-6'
      : 'hidden'
  } md:flex md:static md:flex-row md:items-center md:space-x-10 md:space-y-0 md:py-0`}
>
  <li>
    <Link
      to="/"
      className={`text-white text-lg font-medium px-2 ${location.pathname === '/' ? 'active' : ''}`}
      onClick={closeMenu}
    >
      Accueil
    </Link>
  </li>
  <li>
    <Link
      to="/realisation"
      className={`text-white text-lg font-medium px-2 ${location.pathname === '/services' ? 'active' : ''}`}
      onClick={closeMenu}
    >
      Réalisation
    </Link>
  </li>
  <li>
    <Link
      to="/about"
      className={`text-white text-lg font-medium px-2 ${location.pathname === '/about' ? 'active' : ''}`}
      onClick={closeMenu}
    >
      À propos
    </Link>
  </li>
  <li>
    <Link
      to="/team"
      className={`text-white text-lg font-medium px-2 ${location.pathname === '/team' ? 'active' : ''}`}
      onClick={closeMenu}
    >
      Équipe
    </Link>
  </li>
  <li>
    <Link
      to="/contact"
      className={`text-white text-lg font-medium px-2 ${location.pathname === '/contact' ? 'active' : ''}`}
      onClick={closeMenu}
    >
      Contact
    </Link>
  </li>
</ul>

            </nav>
        </header>
    );
};

export default Header;