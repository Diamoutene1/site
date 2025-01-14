// Liste des projets avec détails, vidéos, images, etc.
 const projectss = [
    {
        section: 'but1',
        title: 'Pilomo1.0',
        description: "Conception, fabrication et mise au point d'une carte électronique permettant la commande de 2 moteurs à courant continu, suivie du développement de programmes Arduino Nano en langage C pour réaliser différentes tâches robotiques.",
        technologies: 'Arduino IDE , Langage C,Proteus,Carte Arduino(Nano).',
        video: null,
        image: ['public/image/pilomo-image1.png', 'public/image/pilomo-image2.png'],
        pdf: 'public/Dossier/Projet PILOMO ZANA et ETIENNE_compressed.pdf', // Chemin ou lien vers le PDF
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
