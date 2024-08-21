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

    // Afficher un message lorsque l'utilisateur clique sur un lien de contact
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche la redirection immédiate
        alert('Merci de vouloir me contacter ! Je vous répondrai dans les plus brefs délais.');
        window.location.href = link.href; // Redirige après le message d'alerte
    });
});

