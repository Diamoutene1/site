// Animation de défilement pour les paragraphes
const paragraphs = document.querySelectorAll('.container p');

window.addEventListener('scroll', function() {
    paragraphs.forEach((p) => {
        const rect = p.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            p.style.opacity = 1;
            p.style.transform = 'translateY(0)';
            p.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        }
    });
});
