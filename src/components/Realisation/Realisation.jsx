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
                image: "https://tse3.mm.bing.net/th/id/OIP.5immtxEYEBJj6MLBz6ZpwQHaE4?rs=1&pid=ImgDetMain&o=7&rm=3",
                title: "Réalisation d'une pompe villagoise",
                description: "Mise en place d'un système d'irrigation moderne pour optimiser l'utilisation de l'eau dans une exploitation agricole."
            },
            {
                image: "https://tse1.mm.bing.net/th/id/OIP.PR3KLJJHBXptiVQi_aFLQAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
                title: "Construction d'une station de traitement d'eau potable",
                description: "Construction d'une station pour alimenter une communauté en eau sûre et propre."
            },
            {
                image: "https://tse4.mm.bing.net/th/id/OIP.MD5LBwOnvTBvjbZ9nSg9_AHaJ4?w=1200&h=1600&rs=1&pid=ImgDetMain&o=7&rm=3",
                title: "Aménagement d'un réseau d'assainissement",
                description: "Amélioration des conditions sanitaires d'une zone résidentielle."
            }
        ],
        Bâtiment: [
            {
                image: "https://tse4.mm.bing.net/th/id/OIP.uT6VuAlag5ccK-DhNcz4yAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
                title: "Construction d'un complexe résidentiel",
                description: "Logements modernes et espaces communs agréables."
            },
            {
                image: "https://tse1.mm.bing.net/th/id/OIP.gDZpOSEjYk0aFS-nMaen2gHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3",
                title: "Rénovation d'un bâtiment administratif",
                description: "Rénovation pour améliorer l'esthétique et le fonctionnement du bâtiment."
            },
            {
                image: "https://www.techarena.co.ke/wp-content/uploads/2024/05/PAIX-Data-centres-ghana.webp",
                title: "Aménagement d'un espace commercial",
                description: "Espaces attrayants pour accueillir différents types de commerces."
            }
        ],
        Électricité: [
            {
                image: "https://tse1.mm.bing.net/th/id/OIP.4gfEme7t_rpiGFHb2tTAyQHaEw?rs=1&pid=ImgDetMain&o=7&rm=3",
                title: "Installation d'un réseau électrique domestique",
                description: "Conception et mise en place d'un réseau électrique sécurisé et conforme aux normes pour un ensemble résidentiel."
            },
            {
                image: "https://tse4.mm.bing.net/th/id/OIP.8SwzUHIjqWLQa32GMuy4bAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
                title: "Installation de panneaux solaires",
                description: "Mise en place de panneaux photovoltaïques pour favoriser l'autonomie énergétique et les énergies renouvelables."
            },
            {
                image: "https://th.bing.com/th/id/OIP.O4-pbqeR18oqGCb0IrYauAHaE8?w=242&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                title: "Extension d'un réseau électrique public",
                description: "Travaux d'extension de lignes électriques pour desservir de nouveaux quartiers et améliorer la distribution d'électricité."
            }
        ],
        Routes: [
            {
                image: "https://th.bing.com/th/id/OIP.9K8n-CZqUYjG2_QbOXr8MgHaEZ?w=301&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                title: "Construction d'une route bitumée",
                description: "Travaux de construction d'une route bitumée pour relier des zones rurales à des centres urbains."
            },
            {
                image: "https://th.bing.com/th/id/OIP.fngx1XA0isxAleM9bAtWfwHaE7?w=283&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                title: "Construction d'un pont routier",
                description: "Réduction des embouteillages grâce à un pont moderne reliant deux axes stratégiques."
            },
            {
                image: "https://th.bing.com/th/id/OIP.TXnaqN4yaW1ozP1sj-KLrAHaFj?w=222&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
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