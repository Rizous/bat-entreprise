import React from 'react';
import { useAnimations } from '../Hooks/useAnimations';
import './Hero.css';

const Hero = () => {
    useAnimations();

    return (
        <section className="hero relative h-[80vh] min-h-[600px] bg-gradient-to-r from-black/70 to-black/70 bg-cover bg-center flex flex-col justify-center text-center" style={{ marginTop: '90px', backgroundImage: 'url(https://img.freepik.com/premium-photo/best-building-contractor-block-shot-young-man-using-smartphone-while-working-construction-site_590464-22487.jpg?w=996)' }}>
            <div className="particles" id="particles"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 max-w-4xl mx-auto hero-title" id="animated-headline">
                    {/* Les mots seront ajoutés dynamiquement par JavaScript */}
                </h1>
                <p className="text-xl text-white mb-8 max-w-2xl mx-auto animate-pulse">Expertise. Fiabilité. Excellence.</p>
                <a href="#contact" className="btn btn-primary inline-block px-8 py-4 bg-secondary text-white font-semibold rounded-md text-lg bounce-soft">Nous contacter</a>
            </div>
        </section>
    );
};

export default Hero;