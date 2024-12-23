// Animation de survol pour les liens de contact
const contactLinks = document.querySelectorAll('.contact-info a');

contactLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff6f61';
        link.style.transition = 'color 0.3s ease';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '#4caf50';
    });
});

