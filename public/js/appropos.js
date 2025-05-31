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
// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
    // Animation des titres avec effet d'apparition en cascade
    const titles = document.querySelectorAll("h1, h2, h3");

    titles.forEach((title, index) => {
        title.style.opacity = 0;
        title.style.transform = "translateY(20px)";
        setTimeout(() => {
            title.style.transition = "all 0.6s ease-out";
            title.style.opacity = 1;
            title.style.transform = "translateY(0)";
        }, 200 * index);
    });

    // Ajout d'un effet de survol sur les blocs d'expérience
    const expBlocks = document.querySelectorAll(".exp-block");

    expBlocks.forEach(block => {
        block.addEventListener("mouseover", () => {
            block.style.backgroundColor = "rgba(255, 123, 84, 0.1)";
            block.style.transition = "background-color 0.3s ease-in-out";
        });

        block.addEventListener("mouseout", () => {
            block.style.backgroundColor = "transparent";
        });
    });

    // Scroll doux quand on clique sur un lien de navigation
    const navLinks = document.querySelectorAll("nav .navbar a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.hash !== "") {
                e.preventDefault();
                const target = document.querySelector(this.hash);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});
