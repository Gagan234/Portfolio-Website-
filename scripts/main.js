// Smooth scroll to anchors
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Typewriter effect for hero intro (pure JS)
const heroHeading = document.querySelector('.hero-text h1');
const text = heroHeading.textContent;
heroHeading.textContent = '';

let index = 0;
function typeEffect() {
  if (index < text.length) {
    heroHeading.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// Fade-in on scroll
const observerOptions = {
  threshold: 0.1
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  fadeInObserver.observe(section);
});
