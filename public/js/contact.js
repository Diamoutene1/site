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

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton de menu et la barre de navigation
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    // Ajouter un événement de clic au bouton du menu
    menuToggle.addEventListener('click', function() {
        // Alterner la classe 'active' sur la barre de navigation
        navbar.classList.toggle('active');
        
        // Alterner la classe 'open' sur le bouton du menu pour changer son apparence
        menuToggle.classList.toggle('open');
    });
});


