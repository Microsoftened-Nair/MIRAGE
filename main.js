const images = [
    'assets/vr.png',
    'assets/vr1.png',
    'assets/vr2.png',
  ];
  
  const vrElements = document.querySelector('.vr-elements');
  const numElements = 10;
  
  for (let i = 0; i < numElements; i++) {
      const element = document.createElement('div');
      element.classList.add('vr-element');
  
      // Randomly pick an image from the array
      const randomImage = images[Math.floor(Math.random() * images.length)];
      element.style.backgroundImage = `url('${randomImage}')`;
  
      // Random positioning
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
  
      // Random animation timing
      element.style.animationDuration = `${Math.random() * 10 + 5}s`;
      element.style.animationDelay = `${Math.random() * 5}s`;
  
      // Optional: adjust size to match image aspect or set fixed size
      element.style.width = '10%';  // or adjust based on your image dimensions
      element.style.height = '10%'; // or adjust based on your image dimensions
      element.style.backgroundRepeat = 'no-repeat';
  
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

