import React from 'react';


const About = () => {
    return (
        <>
            <div className="wave-divider">
                <div className="wave wave-reverse"></div>
            </div>
            <section id="about" className="about section-padding bg-darker-bg">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6 text-secondary highlight-hover">Qui sommes-nous ?</h2>
                    <p className="text-white animate-text">
                        <strong className="pulse-color">BAT Enterprise SARL</strong> est une entreprise ivoirienne de BTP spécialisée en hydraulique, bâtiment, électricité et routes. Nous mettons notre expertise et notre savoir-faire au service de vos projets, de la conception à la réalisation.
                    </p>
                </div>
            </section>
            <div className="wave-divider">
                <div className="wave"></div>
            </div>
        </>
    );
};

export default About;