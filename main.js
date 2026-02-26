// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // Change icon between bars and times
                                const icon = menuToggle.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
      });
});

// Scroll Reveal Animation (using Intersection Observer)
const observerOptions = {
      threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
                if (entry.isIntersecting) {
                              entry.target.classList.add('revealed');
                              observer.unobserve(entry.target); // Only animate once
                }
      });
}, observerOptions);

// Select elements to reveal - adding the fade-in class to existing sections
document.querySelectorAll('.section, .timeline-item, .stat-card').forEach(el => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
});

// Form Submission Handling (Preventing actual refresh)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
        
                const btn = contactForm.querySelector('button');
                const originalText = btn.innerText;
                btn.innerText = 'Sending...';
                btn.disabled = true;

                                           // Simulate API call
                                           setTimeout(() => {
                                                         btn.innerText = 'Message Sent Successfully';
                                                         btn.style.backgroundColor = '#2ecc71';
                                                         contactForm.reset();

                                                                  setTimeout(() => {
                                                                                    btn.innerText = originalText;
                                                                                    btn.disabled = false;
                                                                                    btn.style.backgroundColor = '';
                                                                  }, 3000);
                                           }, 1500);
      });
}
