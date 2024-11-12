const vrElements = document.querySelector('.vr-elements');
const numElements = 20;

for (let i = 0; i < numElements; i++) {
    const element = document.createElement('div');
    element.classList.add('vr-element');
    element.style.left = `${Math.random() * 100}%`;
    element.style.top = `${Math.random() * 100}%`;
    element.style.animationDuration = `${Math.random() * 10 + 5}s`;
    element.style.animationDelay = `${Math.random() * 5}s`;
    vrElements.appendChild(element);
}

// Animate VR elements
const elements = document.querySelectorAll('.vr-element');
elements.forEach(element => {
    element.style.animation = `float ${Math.random() * 10 + 5}s infinite alternate`;
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    elements.forEach(element => {
        const speed = Math.random() * 0.5 + 0.1;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

// Shrink header on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
    } else {
        header.style.padding = '20px 0';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});