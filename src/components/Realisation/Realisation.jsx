import React, { useEffect, useRef, useState } from "react";

const Realisation = () => {
    const [activeTab, setActiveTab] = useState("Hydraulique");
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const projectsData = {
        Hydraulique: [
            {
                image: "/image/H-1.png",
                title: "Travaux de forage",
                description: "Vue des travaux de foration (avancée par la tarière) et vue des déchets extraits des fonds de forage "
            },
            {
                image: "/image/H-2.png",
                title: "Construction d'une voie d'accès au forage",
                description: "Vue d’un engin (pelle mécanique) en travaux d’aménagement de la voie d’accès aux points de forage ."
            },
            {
                image: "/image/H-3.png",
                title: "Conception et Realisation d'un chateau d'eau",
                description: " Conception et Realisation d'un chateau d'eau pour l'amélioration des conditions sanitaires d'une zone résidentielle."
            }
        ],
        Bâtiment: [
            {
                image: "/image/B-1.png",
                title: "Construction d'un complexe hotelier",
                description: "Logements modernes et espaces communs agréables."
            },
            {
                image: "/image/B-2.png",
                title: "Etude-conception et travaux d’une Villa Triplex de 15 pièces ",
                description: "Projet de Construction d’une Villa Triplex de 15 pièces à Bingerville (Particulier) "
            },
            {
                image: "/image/B-3.png",
                title: "Etude-conception et travaux d’Immeuble R+3 (Particulier) ",
                description: "Projet de Construction d’Immeuble R+3"
            }
        ],
        Électricité: [
            {
                image: "/image/E-3.png",
                title: "Installation d'un réseau électrique domestique",
                description: "Conception et mise en place d'un réseau électrique sécurisé et conforme aux normes pour un ensemble résidentiel."
            },
            {
                image: "/image/E-1.png",
                title: "Travaux d'électrification rurale ",
                description: "Travaux d'électrification rurale dans le departement de Bouna(Région du bounkani)"
            },
            {
                image: "/image/E-2.png",
                title: "Realisation des travaux d'electrification urbaine et rurale",
                description: "Travaux d'extension de lignes électriques (Maître d’Ouvrage : CI-ENERGIES) "
            }
        ],
        Routes: [
            {
                image: "/image/R-1.png",
                title: "Construction d'une route bitumée",
                description: "Travaux de construction d'une route bitumée pour relier des zones rurales à des centres urbains."
            },
            {
                image: "/image/R-2.png",
                title: "Construction de route",
                description: "Travaux de construction d'une route"
            },
            {
                image: "/image/R-3.png",
                title: "Réhabilitation d'une voie dégradée",
                description: "Travaux de renforcement et de modernisation d'une route endommagée pour améliorer la circulation."
            }
        ]
    };

    const categories = ["Hydraulique", "Bâtiment", "Électricité", "Routes"];

    return (
        <section ref={sectionRef} className="max-w-6xl mx-auto px-6 py-12">
            {/* Titre avec animation */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-4xl font-bold text-secondary mb-2 highlight-hover">Nos Réalisations</h1>
                <p className="text-gray-600 mb-8 text-lg">
                    Découvrez nos projets phares, témoignages de notre expertise et engagement envers la qualité.
                </p>
            </div>

            {/* Onglets */}
            <div className={`flex gap-6 border-b border-gray-300 mb-8 overflow-x-auto transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`pb-2 whitespace-nowrap font-semibold transition-colors duration-300 ${activeTab === category ? 'border-b-4 border-orange-600 text-orange-600' : 'text-gray-500 hover:text-orange-600'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projets avec animation d'apparition séquentielle */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                {projectsData[activeTab].map((project, index) => (
                    <div
                        key={index}
                        className={`bg-white shadow-md rounded-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
                    >
                        <div className="overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>
                        <div className="p-4 flex flex-col">
                            <h3 className="text-lg font-semibold text-green-900 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Realisation;