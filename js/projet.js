// Effet de zoom sur les projets
const projects = document.querySelectorAll('.project-item');

projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        project.style.transform = 'scale(1.05)';
        project.style.transition = 'transform 0.3s ease';
    });

    project.addEventListener('mouseout', () => {
        project.style.transform = 'scale(1)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.details-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling; // Récupère le div qui suit le bouton
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block'; // Affiche les détails
                this.textContent = 'Masquer les détails'; // Change le texte du bouton
            } else {
                details.style.display = 'none'; // Masque les détails
                this.textContent = 'Voir les détails'; // Restaure le texte du bouton
            }
        });
    });
});
