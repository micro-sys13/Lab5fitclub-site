const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const scrollTopButton = document.querySelector('.scroll-top');
const form = document.querySelector('.fit-form');

if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mainNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

if (scrollTopButton) {
    window.addEventListener('scroll', () => {
        scrollTopButton.classList.toggle('show', window.scrollY > 350);
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

if (form) {
    form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            alert('Будь ласка, заповніть обов’язкові поля форми.');
        }
    });
}
