// Mobile Menu & Interactive Features
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close nav on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // FAQ accordions exclusive toggle
    const faqDetails = document.querySelectorAll('.faq-item');
    faqDetails.forEach((targetDetail) => {
        targetDetail.addEventListener('click', () => {
            faqDetails.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute('open');
                }
            });
        });
    });

    // Contact Form Submission Handler
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');

    if (contactForm && formAlert) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                formAlert.className = 'form-alert error';
                formAlert.textContent = 'Please fill out all required fields.';
                formAlert.style.display = 'block';
                return;
            }

            // Simulate successful form submission
            formAlert.className = 'form-alert success';
            formAlert.textContent = 'Thank you, ' + name + '! Your message has been sent successfully to Jay Internet Center support. We will get back to you shortly.';
            formAlert.style.display = 'block';

            contactForm.reset();

            setTimeout(() => {
                formAlert.style.display = 'none';
            }, 6000);
        });
    }
});
