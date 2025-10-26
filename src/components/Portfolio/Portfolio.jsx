import React, { useEffect } from 'react';


const Portfolio = () => {
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

        const animatedElements = document.querySelectorAll('.animate-item');
        animatedElements.forEach(el => {
            observer.observe(el);
        });

        // Animation de la galerie au survol
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.querySelector('figcaption').classList.remove('translate-y-full');
            });

            item.addEventListener('mouseleave', () => {
                item.querySelector('figcaption').classList.add('translate-y-full');
            });
        });

        return () => {
            animatedElements.forEach(el => {
                observer.unobserve(el);
            });

            galleryItems.forEach(item => {
                item.removeEventListener('mouseenter', () => {});
                item.removeEventListener('mouseleave', () => {});
            });
        };
    }, []);

    return (
        <section id="portfolio" className="portfolio section-padding bg-light">
            <div className="container mx-auto px-6">
                <div className="section-header text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 highlight-hover">Nos réalisations</h2>
                    <p className="section-subtitle text-gray-600 text-lg animate-text">Découvrez nos projets récents</p>
                </div>
                <div className="gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <figure className="gallery-item rounded-lg overflow-hidden shadow-md relative animate-item">
                        <img src="/image/B-1.png" alt="Projet immobilier à Abidjan" loading="lazy" className="w-full h-64 object-cover" />
                        <figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 transform translate-y-full transition-transform duration-300">Projet immobilier</figcaption>
                    </figure>
                    <figure className="gallery-item rounded-lg overflow-hidden shadow-md relative animate-item">
                        <img src="/image/R-3.png" alt="Construction routière en Côte d'Ivoire" loading="lazy" className="w-full h-64 object-cover" />
                        <figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 transform translate-y-full transition-transform duration-300">Infrastructure routière</figcaption>
                    </figure>
                    <figure className="gallery-item rounded-lg overflow-hidden shadow-md relative animate-item">
                        <img src="/image/H-3.png" alt="Ouvrage d'art en construction" loading="lazy" className="w-full h-64 object-cover" />
                        <figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 transform translate-y-full transition-transform duration-300">Ouvrage d'art</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;