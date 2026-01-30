// Initialisation AOS
AOS.init({ once: true, offset: 100 });

// Configuration Particules
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00d4ff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.3 },
        "size": { "value": 2 },
        "line_linked": { "enable": true, "distance": 150, "color": "#00d4ff", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 1.5 }
    },
    "interactivity": {
        "events": { "onhover": { "enable": true, "mode": "grab" } }
    },
    "retina_detect": true
});

// Menu Burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});