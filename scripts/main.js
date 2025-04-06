document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const arrow = document.querySelector('#splash-screen .arrow');
    const sections = document.querySelectorAll('section');

    // Handle splash screen arrow click
    arrow.addEventListener('click', () => {
        splashScreen.style.opacity = '0'; // Fade out the splash screen
        setTimeout(() => {
            splashScreen.style.display = 'none'; // Hide the splash screen after fade-out
            mainContent.classList.remove('hidden'); // Show the main content
            mainContent.style.display = 'block'; // Ensure main content is visible
            animateSections();
        }, 500); // Match the CSS transition duration
    });

    // Animate sections sequentially
    function animateSections() {
        let delay = 0;
        sections.forEach((section) => {
            setTimeout(() => {
                section.classList.add('visible');
            }, delay);
            delay += 1000; // Delay between sections
        });
    }

    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your EmailJS credentials
        const response = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            name,
            email,
            message,
        }, 'YOUR_PUBLIC_KEY');

        alert('Message sent successfully!');
        document.getElementById('contact-form').reset();
    } catch (error) {
        console.error('Failed to send message:', error);
        alert('Failed to send message. Please try again later.');
    }
});
