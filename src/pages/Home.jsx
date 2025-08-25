import React from 'react';
import Hero from '../components/Hero/Hero.jsx';
import About from '../components/About/About.jsx';
import Services from '../components/Services/Services.jsx';
import Mission from '../components/Mission/Mission.jsx';
import Portfolio from '../components/Portfolio/Portfolio.jsx';
import Team from '../components/Team/Team.jsx';
import Contact from '../components/Contact/Contact.jsx';

const Home = () => {
    console.log('Home rendered');
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Mission />
            <Portfolio />
            <Team />
            <Contact />
        </>
    );
};

export default Home;