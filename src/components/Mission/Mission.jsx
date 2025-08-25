import React from 'react';


const Mission = () => {
    return (
        <>
            <div className="wave-divider">
                <div className="wave wave-reverse"></div>
            </div>
            <section id="mission" className="mission section-padding bg-darker-bg">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6 text-secondary highlight-hover">Notre mission</h2>
                    <p className="text-white animate-text">
                        Chez <strong className="pulse-color">BAT Enterprise</strong>, notre mission est de contribuer au développement durable de la Côte d'Ivoire à travers des projets de construction fiables, innovants et respectueux des normes.
                        Nous visons l'excellence dans la conception et la réalisation d'ouvrages publics et privés, en plaçant la qualité, la sécurité et la satisfaction client au cœur de nos priorités.
                    </p>
                </div>
            </section>
            <div className="wave-divider">
                <div className="wave"></div>
            </div>
        </>
    );
};

export default Mission;