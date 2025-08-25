import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer bg-foot text-white py-8">
            <div className="container mx-auto px-6">
                <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div className="footer-col">
                        <h3 className="footer-logo text-2xl font-bold mb-4 highlight-hover">BAT Enterprise</h3>
                        <p className="animate-text">Votre partenaire en construction durable en Côte d'Ivoire.</p>
                    </div>

                    <div className="footer-col">
                        <h4 className="text-lg font-semibold mb-4 highlight-hover">Navigation</h4>
                        <ul className="footer-links list-none">
                            <li className="mb-2"><Link to="/" className="text-white/80 hover:text-white animate-text">Accueil</Link></li>
                            <li className="mb-2"><Link to="/services" className="text-white/80 hover:text-white animate-text">Services</Link></li>
                            <li className="mb-2"><Link to="/about" className="text-white/80 hover:text-white animate-text">À propos</Link></li>
                            <li className="mb-2"><Link to="/team" className="text-white/80 hover:text-white animate-text">Équipe</Link></li>
                            <li className="mb-2"><Link to="/contact" className="text-white/80 hover:text-white animate-text">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="text-lg font-semibold mb-4 highlight-hover">Contact</h4>
                        <address className="not-italic">
                            <p className="mb-2 animate-text">ABIDJAN – COCODY RIVIERA FAYA (Im. EPHRATA 1er Etage derrière CSU GENIE 2000), Côte d'Ivoire</p>
                            <p className="mb-2"><a href="mailto:batenterprise.sarl@yahoo.com" className="text-white/80 hover:text-white animate-text">batenterprise.sarl@yahoo.com</a></p>
                            <p className="mb-2"><a href="mailto:batconsulting.development@gmail.com" className="text-white/80 hover:text-white animate-text">batconsulting.development@gmail.com</a></p>
                            <p className="mb-2"><a href="tel:+2250708017000" className="text-white/80 hover:text-white animate-text">+225 07 08 01 70 00</a></p>
                            <p className="mb-2"><a href="tel:+2250708017000" className="text-white/80 hover:text-white animate-text">+225 01 70 88 88 91</a></p>
                        </address>
                    </div>

                    <div className="footer-col">
                        <h4 className="text-lg font-semibold mb-4 highlight-hover">Réseaux sociaux</h4>
                        <ul className="social-links flex gap-4 list-none">
                            <li><a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-secondary transition-colors bounce-soft" aria-label="Facebook">f</a></li>
                            <li><a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-secondary transition-colors bounce-soft" aria-label="LinkedIn">in</a></li>
                            <li><a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-secondary transition-colors bounce-soft" aria-label="Twitter">t</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="animate-text">&copy; 2025 BAT Enterprise SARL. Tous droits réservés.</p>
                    <ul className="legal-links flex gap-6 list-none mt-4 md:mt-0">
                        <li><a href="#" className="text-white/80 hover:text-white animate-text">Mentions légales</a></li>
                        <li><a href="#" className="text-white/80 hover:text-white animate-text">Politique de confidentialité</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;