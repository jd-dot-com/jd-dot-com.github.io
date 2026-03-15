// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Navigation & Mobile Menu
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

let isMenuOpen = false;

mobileBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenu.style.opacity = '1';
        mobileMenu.style.pointerEvents = 'auto';
        gsap.fromTo('.mobile-link', { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 });
    } else {
        mobileMenu.style.opacity = '0';
        mobileMenu.style.pointerEvents = 'none';
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.style.opacity = '0';
        mobileMenu.style.pointerEvents = 'none';
    });
});

// Animations
window.addEventListener('load', () => {
    // Hero Entrance Animation
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-el', 
        { y: 100, opacity: 0, rotate: 2 }, 
        { y: 0, opacity: 1, rotate: 0, stagger: 0.2, duration: 1, ease: 'power4.out', delay: 0.2 }
    );

    // Header reveal
    gsap.fromTo('header', 
        { y: -100 }, 
        { y: 0, duration: 1, ease: 'power3.out', delay: 1 }
    );

    // Music Section Scroll Animations
    gsap.fromTo('.music-art', 
        { x: -100, opacity: 0, rotate: -5 },
        { 
            x: 0, opacity: 1, rotate: 0, duration: 1, ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '#music',
                start: 'top 75%'
            }
        }
    );

    gsap.fromTo('.music-content', 
        { x: 100, opacity: 0 },
        { 
            x: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: {
                trigger: '#music',
                start: 'top 75%'
            }
        }
    );

    // Services Section Scroll Animations
    gsap.fromTo('.service-card', 
        { y: 100, opacity: 0 },
        { 
            y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'power3.out',
            scrollTrigger: {
                trigger: '#services',
                start: 'top 70%'
            }
        }
    );

    // Contact Section Scroll Animations
    gsap.fromTo('.contact-form', 
        { y: 50, opacity: 0 },
        { 
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 80%'
            }
        }
    );
});