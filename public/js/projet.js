// Effet de zoom sur les projets (optimisé avec requestAnimationFrame)
function initZoomEffects() {
    const projects = document.querySelectorAll('.project-item'); // Sélectionne tous les éléments de projet
    if (projects.length === 0) {
        console.error('Aucun projet trouvé dans le DOM.');
    } else {
        projects.forEach(project => {
            // Écoute l'événement "mouseover" pour zoomer sur le projet
            project.addEventListener('mouseover', () => {
                console.log(`Survol sur le projet : ${project.id}`); // Test du survol
                try {
                    requestAnimationFrame(() => {
                        project.style.transform = 'scale(1.05)'; // Applique un agrandissement au survol
                        project.style.transition = 'transform 0.3s ease'; // Ajoute une transition fluide
                    });
                } catch (error) {
                    console.error(`Erreur lors de l'animation de zoom pour le projet ${project.id}: `, error);
                }
            });

            // Écoute l'événement "mouseout" pour restaurer la taille normale du projet
            project.addEventListener('mouseout', () => {
                console.log(`Fin du survol du projet : ${project.id}`); // Test de la fin du survol
                try {
                    requestAnimationFrame(() => {
                        project.style.transform = 'scale(1)'; // Restaure la taille normale du projet
                    });
                } catch (error) {
                    console.error(`Erreur lors de la restauration du zoom pour le projet ${project.id}: `, error);
                }
            });
        });
    }
}

// Gestion de l'affichage des détails des projets après le chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.details-button'); // Sélectionne tous les boutons "Voir les détails"
    if (buttons.length === 0) {
        console.error('Aucun bouton "Voir les détails" trouvé dans le DOM.');
    } else {
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                console.log(`Bouton cliqué pour le projet : ${this.parentNode.id}`); // Affiche l'ID du projet dont le bouton est cliqué

                const details = this.nextElementSibling; // Récupère le div qui suit immédiatement le bouton
                // Vérifie si les détails sont déjà visibles ou cachés
                try {
                    if (details.style.display === 'none' || details.style.display === '') {
                        details.style.display = 'block'; // Affiche les détails
                        this.textContent = 'Masquer les détails'; // Change le texte du bouton
                        this.setAttribute('aria-expanded', 'true'); // Met à jour l'attribut ARIA pour signifier que les détails sont affichés
                    } else {
                        details.style.display = 'none'; // Masque les détails
                        this.textContent = 'Voir les détails'; // Change le texte du bouton
                        this.setAttribute('aria-expanded', 'false'); // Met à jour l'attribut ARIA pour signifier que les détails sont masqués
                    }
                } catch (error) {
                    console.error(`Erreur lors de la gestion des détails pour le projet ${this.parentNode.id}: `, error);
                }
            });
        });
    }

    // Initialisation des effets de zoom après le chargement des projets
    initZoomEffects();
});

// Liste des projets avec détails, vidéos, images, etc.
const projectss = [
    {
        section: 'but1',
        title: 'Pilomo1.0',
        description: "Conception, fabrication et mise au point d'une carte électronique permettant la commande de 2 moteurs à courant continu, suivie du développement de programmes Arduino Nano en langage C pour réaliser différentes tâches robotiques.",
        technologies: 'Arduino IDE , Langage C,Proteus,Carte Arduino(Nano).',
        video: null,
        image: ['public/image/pilomo-image1.png', 'public/image/pilomo-image2.png'],
        pdf: null, // Chemin ou lien vers le PDF
        link: null, // Chemin ou lien
        details: [
            {
                title: "Conception et Fabrication",
                description: "Deux cartes électroniques ont été conçues : une carte commande et une carte puissance. La carte puissance gère les deux moteurs à courant continu et inclut des MOSFET (BUZ11), des résistances, des diodes, et des connecteurs robustes. La carte commande, basée sur un Arduino Nano, génère des signaux PWM pour un contrôle précis des moteurs.",
                
               
            },
            {
                title: "Programmation Arduino",
                description: "Des programmes en langage C ont été développés pour contrôler les moteurs et réaliser diverses tâches, comme la gestion des vitesses, le suivi de paroi, et l'évitement d'obstacles. Chaque fonctionnalité a été codée en respectant une progression de difficulté, comme indiqué dans les spécifications du projet.",
                video: "public/video/pilomo-video1.mp4"
            },
            
                
        ]
    },
    
    {
        section: 'but1',
        title: 'Maquettes Pneumatique',
        description: 'Conception et simulation de systèmes pneumatiques automatisés utilisant la programmation Ladder.',
        technologies: 'Programmation Ladder, Automates Programmables, Automate Schneider Electric, Pneumatique, et Contrôle de processus automatisés.',
        video: 'public/video/maquettes.mp4',
        link: null,
        image: null,
    },
    {
        section: 'but1',
        title: 'Calcul de résistance en C++',
        description: 'Application pour le calcul de résistance utilisant la bibliothèque BGI.',
        technologies: 'C++, Bibliothèque BGI.',
        video: null,
        link: 'https://diamoutene1.github.io/calcul-resistance/',
        image: ['public/image/cal1.jpeg', 'public/image/cal2.jpeg'],
    },
    {
        section: 'licence1',
        title: 'Création de Jeux en Python',
        description: 'Développement de jeux classiques en Python avec Tkinter : Jeu de la Vie, Jeu du Serpent.',
        technologies: 'Python, Tkinter.',
        video: null,
        link: 'https://diamoutene1.github.io/jeu-python/',
        details: [
            {
                title: "Le Jeu de la Vie",
                description: "Le Jeu de la Vie est un automate cellulaire développé par John Conway. Il simule des phénomènes naturels à partir de règles simples : chaque cellule peut être vivante ou morte, et son état dépend de celui de ses voisins. Ce jeu illustre comment des structures complexes émergent à partir de règles simples. Dans ce projet, vous pouvez observer des motifs comme les oscillateurs, les réplicateurs et les vaisseaux.",
                video:'public/video/jeu_de_la_vie.mp4',
            },
            {
                title: "Le Jeu du Serpent",
                description: "Le Jeu du Serpent est un jeu classique où le joueur contrôle un serpent qui se déplace sur un écran, mangeant des objets pour grandir tout en évitant les murs et de se mordre. Le but du jeu est de survivre le plus longtemps possible en faisant croître le serpent tout en évitant les collisions. Ce projet utilise la bibliothèque Tkinter pour créer une interface graphique et gérer les événements du clavier pour contrôler le serpent.",
                video: 'public/video/jeu_du_serpent.mp4',
            }
        ]
    },
    {
        section: 'licence1',
        title: 'JavaScript Asynchrone et Cartographie',
        description: 'Affichage de la localisation d\'une image sur une carte et ajout des images Flickr géolocalisées.',
        technologies: 'JavaScript, API Flickr, API de cartographie.',
        video: 'public/video/api_flickr.mp4',
        link: 'https://diamoutene1.github.io/projetflickr/',
        image: null,
    },
    {
        section: 'bac',
        title: 'Système d\'Arrosage Automatique',
        description: 'Conception d\'un système d\'arrosage automatique contrôlé par SMS avec un module GSM.',
        technologies: 'Microcontrôleur, Module GSM, Relais, Capteurs d\'humidité du sol.',
        video: null,
        link: null,
        pdf:'public/Dossier/Rapport_bac.pdf',
        image: null,
    }
];

// Fonction pour insérer les projets dans le DOM
function insertProjects() {
    if (!Array.isArray(projectss) || projectss.length === 0) {
        console.error('Aucun projet dans le tableau projectss.');
        return;
    }

    projectss.forEach((project, index) => {
        try {
            const section = document.getElementById(`${project.section}-projects`); // Récupère la section du projet
            if (!section) {
                console.error(`La section ${project.section}-projects n'existe pas dans le DOM.`);
                return;
            }

            // Création d'un élément div pour chaque projet
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
            projectItem.style.opacity = 0; // Commence avec une opacité de 0 pour l'animation
            projectItem.id = `project-${index}`; // Assigne un ID unique pour chaque projet

            // Log pour vérifier l'ajout du projet
            console.log(`Ajout du projet : ${project.title}, Section : ${project.section}`);

            // Création d'un titre pour chaque projet
            const projectTitle = document.createElement('h3');
            projectTitle.classList.add('project-title');
            projectTitle.textContent = project.title; // Insère le titre du projet
            projectItem.appendChild(projectTitle);

            // Création du bouton "Voir les détails"
            const detailsButton = document.createElement('button');
            detailsButton.classList.add('details-button');
            detailsButton.textContent = 'Voir les détails';
            detailsButton.setAttribute('aria-expanded', 'false');
            projectItem.appendChild(detailsButton);

            // Création du conteneur pour les détails du projet
            const projectDetails = document.createElement('div');
            projectDetails.classList.add('project-details');
            projectDetails.style.display = 'none'; // Masque initialement les détails
            projectItem.appendChild(projectDetails);

            // Ajout de la description et des technologies utilisées
            const description = document.createElement('p');
            description.innerHTML = `<strong>Description :</strong> ${project.description}`;
            projectDetails.appendChild(description);

            const technologies = document.createElement('p');
            technologies.innerHTML = `<strong>Technologies utilisées :</strong> ${project.technologies}`;
            projectDetails.appendChild(technologies);

            // Ajout des vidéos
            if (project.video) {
                const videoWrapper = document.createElement('div');
                videoWrapper.classList.add('video-wrapper');
                if (Array.isArray(project.video)) {
                    project.video.forEach(videoSrc => {
                        const video = document.createElement('video');
                        video.setAttribute('controls', '');
                        const source = document.createElement('source');
                        source.setAttribute('src', videoSrc);
                        source.setAttribute('type', 'video/mp4');
                        video.appendChild(source);
                        videoWrapper.appendChild(video);
                    });
                } else {
                    const video = document.createElement('video');
                    video.setAttribute('controls', '');
                    const source = document.createElement('source');
                    source.setAttribute('src', project.video);
                    source.setAttribute('type', 'video/mp4');
                    video.appendChild(source);
                    videoWrapper.appendChild(video);
                }
                projectDetails.appendChild(videoWrapper);
            }

            // Ajout des images
            if (project.image) {
                project.image.forEach(imgSrc => {
                    const imageWrapper = document.createElement('div');
                    imageWrapper.classList.add('image-wrapper');
                    const img = document.createElement('img');
                    img.setAttribute('src', imgSrc);
                    img.setAttribute('alt', project.title);
                    imageWrapper.appendChild(img);
                    projectDetails.appendChild(imageWrapper);
                });
            }

            // Ajout des détails supplémentaires
            if (project.details) {
                const ul = document.createElement('ul');
                project.details.forEach(detail => {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${detail.title} :</strong> ${detail.description}`;
                    ul.appendChild(li);

                    // Vérifiez s'il y a des images ou vidéos à afficher
                    if (detail.image) {
                        const imageWrapper = document.createElement('div');
                        imageWrapper.classList.add('image-wrapper');
                        const img = document.createElement('img');
                        img.setAttribute('src', detail.image);
                        img.setAttribute('alt', detail.title);
                        imageWrapper.appendChild(img);
                        li.appendChild(imageWrapper);
                    }

                    if (detail.video) {
                        const videoWrapper = document.createElement('div');
                        videoWrapper.classList.add('video-wrapper');
                        const video = document.createElement('video');
                        video.setAttribute('controls', '');
                        const source = document.createElement('source');
                        source.setAttribute('src', detail.video);
                        source.setAttribute('type', 'video/mp4');
                        video.appendChild(source);
                        videoWrapper.appendChild(video);
                        li.appendChild(videoWrapper);
                    }
                });
                projectDetails.appendChild(ul);
            }

            // Ajout d'un lien vers le projet en ligne
            if (project.link) {
                const projectLink = document.createElement('p');
                projectLink.innerHTML = `<strong>Voir le projet en ligne :</strong> <a href="${project.link}" target="_blank">${project.title}</a>`;
                projectDetails.appendChild(projectLink);
            }

            // Ajout d'un lien ou bouton pour le fichier PDF
            if (project.pdf) {
                const pdfLink = document.createElement('p');
                pdfLink.innerHTML = `<strong>Documentation PDF :</strong> <a href="${project.pdf}" target="_blank">Télécharger ou consulter</a>`;
                projectDetails.appendChild(pdfLink);
            }

            // Ajout du projet à la section correspondante
            section.appendChild(projectItem);

            // Animation d'apparition des projets au chargement
            setTimeout(() => {
                projectItem.style.opacity = 1; // Modifie l'opacité pour faire apparaître le projet
                projectItem.style.transition = 'opacity 0.6s ease'; // Ajoute une transition d'opacité
            }, index * 200); // Décale l'animation pour chaque projet

            console.log(`Projet ajouté : ${project.title}, ID du projet : ${projectItem.id}`);
        } catch (error) {
            console.error(`Erreur lors de l'insertion du projet ${project.title}: `, error);
        }
    });
}

// Appel de la fonction pour insérer les projets au chargement de la page
insertProjects();
