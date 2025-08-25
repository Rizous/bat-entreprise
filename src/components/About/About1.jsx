import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};


const About1 = () => {
    const [activeValue, setActiveValue] = useState(0);

    const services = [
        {
            title: "Génie civil & Batiment",
            desc: "Conception et réalisation d'ouvrages modernes, durables et sécurisés.",
            icon: "fas fa-building",
            color: "from-orange-500 to-orange-700",
            image: "https://batinews.fr/upload/post/img-ac33becc-a5ad-507d-a0f7-c167a93bb824.jpg",
            features: [
                "Construction neuve",
                "Rénovation",
                "Etudes architecturales et calculs de structure"
            ]
        },
        {
            title: "Routes & VRD",
            desc: "Construction de routes et voiries pour une meilleure mobilité urbaine et rurale.",
            icon: "fas fa-road",
            color: "from-gray-600 to-gray-800",
            image: "https://tse4.mm.bing.net/th/id/OIP.TmFP4XaAKkNSpiUffeFUJgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
            features: [
                "Routes bitumées",
                "Voiries urbaines",
                "Aménagements"
            ]
        },
        {
            title: "Hydraulique",
            desc: "Études et travaux d'adduction d'eau, assainissement et ouvrages hydrauliques.",
            icon: "fas fa-water",
            color: "from-blue-500 to-blue-700",
            image: "https://tse2.mm.bing.net/th/id/OIP.H8Rl84T1YVjeTLsnVjgg4AHaE8?w=1200&h=800&rs=1&pid=ImgDetMain&o=7&rm=3",
            features: [
                "Réseaux d'eau potable",
                "Assainissement",
                "Ouvrages hydrauliques"
            ]
        },
        {
            title: "Électricité",
            desc: "Installations électriques industrielles et domestiques conformes aux normes.",
            icon: "fas fa-bolt",
            color: "from-yellow-500 to-yellow-600",
            image: "https://th.bing.com/th/id/R.cc7f42112f8b71f312be4a8f3983a16e?rik=GjQ8l1pdzsa%2fVw&riu=http%3a%2f%2fhrbatipro.fr%2fwp-content%2fuploads%2f2022%2f12%2fman-an-electrical-technician-working-in-switchboard-with-fuses-uses-tablet.jpg&ehk=j80VM3DVZ%2fCUdaIPkpYC0GEOGE2H31sJ1KgjLhJCjwk%3d&risl=&pid=ImgRaw&r=0",
            features: [
                "Installation basse tension",
                "Tableaux électriques",
                "Éclairage public"
            ]
        }
    ];

    const values = [
        {
            title: "Innovation",
            desc: "Nous adoptons les meilleures technologies pour des projets durables et avant-gardistes.",
            icon: "fas fa-brain",
            color: "from-purple-500 to-purple-700",
            image: "https://th.bing.com/th/id/OIP.7GqekJn48dB_cGqApfK4_wHaEK?w=295&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        },
        {
            title: "Qualité",
            desc: "Nous garantissons un haut niveau de qualité dans toutes nos réalisations, avec un contrôle rigoureux.",
            icon: "fas fa-medal",
            color: "from-yellow-500 to-yellow-600",
            image: "https://th.bing.com/th/id/R.44421303492dd0308ad40272c5c8951f?rik=qeUNxUcFu6a5%2bA&riu=http%3a%2f%2fwww.compta.com%2fblog%2fwp-content%2fuploads%2f2016%2f02%2fBTP.jpg&ehk=3YfEfRG0RUPC6lp9PYshKp4kq3FI8dFQLSyFrcbcevU%3d&risl=&pid=ImgRaw&r=0",
        },
        {
            title: "Engagement",
            desc: "Nous plaçons la satisfaction du client et le respect des délais au cœur de notre mission quotidienne.",
            icon: "fas fa-handshake",
            color: "from-green-500 to-green-700",
            image: "https://www.be2biz.fr/wp-content/uploads/b4efc7e6-abf8-4cfb-b9fc-7177bd4e8f4b.png",
        },
    ];

    const stats = [
        { number: "12", label: "Ans d'expérience" },
        { number: "350+", label: "Projets réalisés" },
        { number: "150+", label: "Clients satisfaits" },
        { number: "40+", label: "Experts techniques" },
    ];

    // Animation au défilement pour les cartes de service
    useEffect(() => {
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
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            {/* Hero Section avec belle image */}
            <div
                className="relative py-32 px-6 text-white bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80')"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500-700/80 to-green-950-600/80"></div>
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        À Propos de BAT Enterprise
                    </motion.h1>
                    <motion.p
                        className="text-xl max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Bâtisseurs d'infrastructures modernes pour la Côte d'Ivoire et l'Afrique de l'Ouest
                    </motion.p>
                </div>
            </div>

            <section className="py-16 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    {/* Notre Histoire */}
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-foot highlight-hover">Notre Histoire</h2>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Fondée en 2012, BAT Enterprise SARL s'est rapidement imposée comme un acteur majeur
                                dans le secteur du BTP en Côte d'Ivoire. Notre croissance repose sur un engagement
                                indéfectible envers l'excellence, l'innovation et la satisfaction client.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Aujourd'hui, nous sommes fiers de contribuer au développement des infrastructures
                                de notre pays et de la sous-région, avec une équipe de plus de 40 experts dévoués
                                à la réalisation de projets de qualité.
                            </p>
                        </div>
                    </motion.div>

                    {/* Statistiques */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerChildren}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-200"
                                variants={fadeUp}
                                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            >
                                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Mission et Vision */}
                    <motion.div
                        className="flex flex-col lg:flex-row gap-10 mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                    >
                        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                                    <i className="fas fa-bullseye text-white text-xl"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-secondary highlight-hover">Notre Mission</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Bâtir l'avenir de la Côte d'Ivoire à travers des infrastructures modernes,
                                durables et innovantes qui répondent aux besoins des populations et favorisent
                                le développement économique et social de la région.
                            </p>
                        </div>

                        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center mr-4">
                                    <i className="fas fa-eye text-white text-xl"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-secondary highlight-hover">Notre Vision</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Devenir le partenaire de référence en matière de construction et d'infrastructures
                                en Afrique de l'Ouest, reconnu pour notre excellence, notre innovation et notre
                                engagement envers le développement durable.
                            </p>
                        </div>
                    </motion.div>

                    {/* Domaines d'expertise - Nouvelle section avec les cartes de service */}
                    <motion.div
                        className="mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                    >
                        <h3 className="text-3xl font-bold mb-12 text-center text-secondary highlight-hover">Nos Domaines d'Expertise</h3>
                        <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <motion.article
                                    key={index}
                                    className="service-card bg-white rounded-lg overflow-hidden shadow-md animate-item"
                                    variants={fadeUp}
                                    whileHover={{ y: -8 }}
                                >
                                    <div className="service-img h-48 overflow-hidden reveal-animation relative">
                                        <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                            <div className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white text-2xl`}>
                                                <i className={service.icon}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-content p-6">
                                        <h3 className="text-xl font-bold mb-3 highlight-hover">{service.title}</h3>
                                        <p className="mb-4 animate-text">{service.desc}</p>
                                        <ul className="service-features list-none mt-4">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="py-1 relative pl-6 animate-text">{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>

                    {/* Nos valeurs */}
                    <motion.div
                        className="mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                    >
                        <h3 className="text-3xl font-bold mb-12 text-center text-secondary highlight-hover">Nos Valeurs</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    className={`bg-white rounded-lg overflow-hidden text-center cursor-pointer transition-all duration-300 border-2 ${
                                        activeValue === index ? "border-primary shadow-md" : "border-gray-200"
                                    } group`}
                                    variants={fadeUp}
                                    whileHover={{ y: -5 }}
                                    onClick={() => setActiveValue(index)}
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={value.image}
                                            alt={value.title}
                                            className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                            <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${value.color} text-white text-xl`}>
                                                <i className={value.icon}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h4>
                                        <p className="text-gray-600 text-sm">{value.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About1;