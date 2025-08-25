import React from 'react';



const Contact = () => {
    return (
        <section id="contact" className="cta section-padding bg-primary text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl  font-bold mb-4 highlight-hover">Vous avez un projet ?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto animate-text">Faites confiance à BAT Enterprise pour le concrétiser.</p>
                <div className="cta-buttons flex flex-col sm:flex-row justify-center gap-4">
                    <a href="mailto:contact@bat-enterprise.ci" className="btn btn-light px-8 py-4 bg-white text-primary font-semibold rounded-md text-lg bounce-soft">Demander un devis</a>
                    <a href="tel:+2250708017000" className="btn btn-outline-light px-8 py-4 border-2 border-white text-white font-semibold rounded-md bg-transparent text-lg bounce-soft">Nous appeler</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;