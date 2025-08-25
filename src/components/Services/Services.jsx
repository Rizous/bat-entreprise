import React, { useEffect } from 'react';


const Services = () => {
    useEffect(() => {
        // Animation au défilement
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.animate-item, .animate-text');
        animatedElements.forEach(el => {
            observer.observe(el);
        });

        return () => {
            animatedElements.forEach(el => {
                observer.unobserve(el);
            });
        };
    }, []);

    return (
        <section id="services" className="services section-padding">
            <div className="container mx-auto px-6">
                <div className="section-header text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 highlight-hover">Nos services</h2>
                    <p className="section-subtitle text-gray-600 text-lg animate-text">Découvrez notre expertise multidisciplinaire</p>
                </div>
                <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <article className="service-card bg-white rounded-lg overflow-hidden shadow-md animate-item">
                        <div className="service-img h-48 overflow-hidden reveal-animation">
                            <img src="https://batinews.fr/upload/post/img-ac33becc-a5ad-507d-a0f7-c167a93bb824.jpg" alt="Construction de bâtiment" loading="lazy" className="w-full h-full object-cover" />
                        </div>
                        <div className="service-content p-6">
                            <h3 className="text-xl font-bold mb-3 highlight-hover">Génie civil & Batiment</h3>
                            <p className="mb-4 animate-text">Conception et réalisation d'ouvrages modernes, durables et sécurisés.</p>
                            <ul className="service-features list-none mt-4">
                                <li className="py-1 relative pl-6 animate-text">Construction neuve</li>
                                <li className="py-1 relative pl-6 animate-text">Rénovation</li>
                                <li className="py-1 relative pl-6 animate-text">Etudes architecturales et calculs de structure</li>
                            </ul>
                        </div>
                    </article>

                    <article className="service-card bg-white rounded-lg overflow-hidden shadow-md animate-item">
                        <div className="service-img h-48 overflow-hidden reveal-animation">
                            <img src="https://tse4.mm.bing.net/th/id/OIP.TmFP4XaAKkNSpiUffeFUJgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Construction de route en Côte d'Ivoire" loading="lazy" className="w-full h-full object-cover" />
                        </div>
                        <div className="service-content p-6">
                            <h3 className="text-xl font-bold mb-3 highlight-hover">Routes & VRD</h3>
                            <p className="mb-4 animate-text">Construction de routes et voiries pour une meilleure mobilité urbaine et rurale.</p>
                            <ul className="service-features list-none mt-4">
                                <li className="py-1 relative pl-6 animate-text">Routes bitumées</li>
                                <li className="py-1 relative pl-6 animate-text">Voiries urbaines</li>
                                <li className="py-1 relative pl-6 animate-text">Aménagements</li>
                            </ul>
                        </div>
                    </article>

                    <article className="service-card bg-white rounded-lg overflow-hidden shadow-md animate-item">
                        <div className="service-img h-48 overflow-hidden reveal-animation">
                            <img src="https://tse2.mm.bing.net/th/id/OIP.H8Rl84T1YVjeTLsnVjgg4AHaE8?w=1200&h=800&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Travaux hydrauliques en Afrique" loading="lazy" className="w-full h-full object-cover" />
                        </div>
                        <div className="service-content p-6">
                            <h3 className="text-xl font-bold mb-3 highlight-hover">Hydraulique</h3>
                            <p className="mb-4 animate-text">Études et travaux d'adduction d'eau, assainissement et ouvrages hydrauliques.</p>
                            <ul className="service-features list-none mt-4">
                                <li className="py-1 relative pl-6 animate-text">Réseaux d'eau potable</li>
                                <li className="py-1 relative pl-6 animate-text">Assainissement</li>
                                <li className="py-1 relative pl-6 animate-text">Ouvrages hydrauliques</li>
                            </ul>
                        </div>
                    </article>

                    <article className="service-card bg-white rounded-lg overflow-hidden shadow-md animate-item">
                        <div className="service-img h-48 overflow-hidden reveal-animation">
                            <img src="https://th.bing.com/th/id/R.cc7f42112f8b71f312be4a8f3983a16e?rik=GjQ8l1pdzsa%2fVw&riu=http%3a%2f%2fhrbatipro.fr%2fwp-content%2fuploads%2f2022%2f12%2fman-an-electrical-technician-working-in-switchboard-with-fuses-uses-tablet.jpg&ehk=j80VM3DVZ%2fCUdaIPkpYC0GEOGE2H31sJ1KgjLhJCjwk%3d&risl=&pid=ImgRaw&r=0" alt="Technicien électricien au travail" loading="lazy" className="w-full h-full object-cover" />
                        </div>
                        <div className="service-content p-6">
                            <h3 className="text-xl font-bold mb-3 highlight-hover">Électricité</h3>
                            <p className="mb-4 animate-text">Installations électriques industrielles et domestiques conformes aux normes.</p>
                            <ul className="service-features list-none mt-4">
                                <li className="py-1 relative pl-6 animate-text">Installation basse tension</li>
                                <li className="py-1 relative pl-6 animate-text">Tableaux électriques</li>
                                <li className="py-1 relative pl-6 animate-text">Éclairage public</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Services;