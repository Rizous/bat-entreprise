import { useEffect } from 'react';

export const useAnimations = () => {
    useEffect(() => {
        // Animation du titre principal
        const animateHeadline = () => {
            const headline = document.getElementById('animated-headline');
            if (!headline) return;

            const text = "Votre partenaire pour des projets de construction durables";
            const words = text.split(' ');

            headline.innerHTML = '';

            words.forEach((word, index) => {
                const wordSpan = document.createElement('span');
                wordSpan.textContent = word;
                wordSpan.classList.add('hero-word');
                wordSpan.style.animationDelay = `${index * 0.2}s`;
                headline.appendChild(wordSpan);

                if (index < words.length - 1) {
                    headline.appendChild(document.createTextNode(' '));
                }
            });

            setTimeout(() => {
                headline.classList.add('text-glow');
            }, words.length * 200 + 1000);
        };

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

        // Animation de particules
        const createParticles = () => {
            const particlesContainer = document.getElementById('particles');
            if (!particlesContainer) return;

            const particleCount = 30;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');

                const size = Math.random() * 4 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;

                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;

                particle.style.animationDelay = `${Math.random() * 15}s`;

                particlesContainer.appendChild(particle);
            }
        };

        // Barre de progression
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            const progress = document.querySelector('.progress');
            if (progress) {
                progress.style.width = scrolled + '%';
            }
        };

        // Animation pour les textes des sections
        const initTextAnimations = () => {
            const textsToAnimate = document.querySelectorAll('#about p, #mission p, .section-subtitle');
            textsToAnimate.forEach((text, index) => {
                text.classList.add('animate-text');
                text.style.setProperty('--item-index', index);
            });

            const textObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            }, { threshold: 0.3 });

            textsToAnimate.forEach(text => {
                textObserver.observe(text);
            });
        };

        // Ajouter la classe highlight-hover aux titres
        const addHoverEffects = () => {
            const titles = document.querySelectorAll('h2, h3, .footer-logo');
            titles.forEach(title => {
                title.classList.add('highlight-hover');
            });
        };

        animateHeadline();
        createParticles();
        initTextAnimations();
        addHoverEffects();
        window.addEventListener('scroll', handleScroll);

        return () => {
            animatedElements.forEach(el => {
                observer.unobserve(el);
            });
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};