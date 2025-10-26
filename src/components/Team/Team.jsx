import React, { useEffect, useRef } from 'react';

const Team = () => {
    const teamRef = useRef(null);

    useEffect(() => {
        // Animation au défilement avec Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animatedElements = entry.target.querySelectorAll('.animate-item, .animate-text');
                    animatedElements.forEach(el => {
                        el.classList.add('animate');
                    });
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        if (teamRef.current) {
            observer.observe(teamRef.current);
        }

        return () => {
            if (teamRef.current) {
                observer.unobserve(teamRef.current);
            }
        };
    }, []);

    return (
        <section id="team" className="team section-padding" ref={teamRef}>
            <div className="container mx-auto px-6">
                <div className="section-header text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 highlight-hover">Notre équipe</h2>
                    <p className="section-subtitle text-gray-600 text-lg">Des professionnels à votre service</p>
                    <p className="mt-4 max-w-3xl mx-auto">Chez BAT Enterprise, notre force réside dans une équipe compétente et engagée. Ingénieurs, techniciens et artisans unissent leur savoir-faire pour garantir des projets de qualité, livrés dans les délais et dans le respect des normes. Plus qu'un prestataire, nous sommes un partenaire de confiance, à vos côtés à chaque étape de votre projet.</p>
                </div>
                <div className="team-grid grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
                    <article className="team-member bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row animate-item">
                        <div className="member-photo flex-none w-full md:w-40">
                            <img src="/image/DG-BAT.jpg" alt="Directeur général" loading="lazy" className="w-full h-48 md:h-full object-cover" />
                        </div>
                        <div className="member-info p-6 flex-1">
                            <h3 className="text-xl font-bold highlight-hover">M. Amon Fian</h3>
                            <p className="position text-secondary font-semibold mb-2 pulse-color">Gérant</p>
                            <p>plus de 20 ans d'expérience dans le BTP en Côte d'Ivoire.</p>
                        </div>
                    </article>

                    <article className="team-member bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row animate-item">
                        <div className="member-photo flex-none w-full md:w-40">
                            <img src="/image/DT-BAT.png" alt="Directeur technique" loading="lazy" className="w-full h-48 md:h-full object-cover" />
                        </div>
                        <div className="member-info p-6 flex-1">
                            <h3 className="text-xl font-bold highlight-hover">M. Djeni Kpele</h3>
                            <p className="position text-secondary font-semibold mb-2 pulse-color">Directeur technique</p>
                            <p>Ingénieur Hydraulicien <br />
                            Spécialiste en Forages Hydrogéologue </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Team;