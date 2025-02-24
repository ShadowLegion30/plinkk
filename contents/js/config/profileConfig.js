const profileData = {
    profileLink: "https://discord.gg/axGDMnkD7z", // Lien du profil 
    profileImage: "https://cdn.discordapp.com/attachments/1340416458676633661/1343716264262107257/shadow_logo.jpg?ex=67be48ca&is=67bcf74a&hm=00509ed58dd59fc4fc3ca322919b0205ec7ad6acd7115a65737c6dcb84386493&", // Image de profil
    profileIcon: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg", // Icone derrière le profil
    profileSiteText: "Nous rejoindre", // Nom derrière le profil
    userName: "Shadow Legion", // Nom affiché sur la page et dans le titre de l'onglet
    email: "shadowlegionteam@gmail.com", // Adresse mail affichée sur la page
    links: [ // Liens affichés sur la page
        { icon: "https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-1024.png", url: "https://www.youtube.com/channel/UC5k-eifofDMKwXScntySGaA", text: "Nos vidéos", name: "GitHub" },
        { icon: "https://get-picto.com/wp-content/uploads/2023/02/logo-tiktok-800x800.webp", url: "https://www.tiktok.com/@shadow.lgion", text: "Nos formats cours", name: "Discord" },
    ],
    // Fond de la page si une liste est utilisée alors le fond sera via les couleurs que vous mettez dedans
    background: ["#FF5733", "#33FF57"], //"https://static.vecteezy.com/ti/vecteur-libre/p1/12697876-motif-geometriquele-continue-noir-et-blanc-motif-repetitif-monochrome-arriere-plan-abstrait-optique-tridimensionnel-avec-cubes-troues-vectoriel.jpg",
    degBackgroundColor: 45, // inclinaison du degradé
    profileHoverColor: "#7289DA", // Couleur de hover sur l'article (l'élément principal)
    neonColors: ["#FF0000", "#7F0000"], // Couleurs du neon de profil
    iconUrl: "https://avatars.githubusercontent.com/u/9919?s=200&v=4", // Icone de l'onglet
    description: "Faction BRM5 qui à pour but de faire reigner la paix.", // Description affichée sur la page, display: none si vide
    
    labels: [
        { data: "BRM5", color: "#36A2EB", fontColor: "#FFFFFF" },
        { data: "Roblox", color: "#EEEEEE", fontColor: "#000000" },
        { data: "FR", color: "#FF6384", fontColor: "#FFFFFF" },
    ],
    
    neonEnable: 1, // 1 : Enable, 0 : Disable
    buttonThemeEnable: 0, // 1 : Enable, 0 : Disable

    EnableAnimationArticle: 1, // 1 : Enable, 0 : Disable
    EnableAnimationButton: 1, // 1 : Enable, 0 : Disable
    EnableAnimationBackground: 1, // 1 : Enable, 0 : Disable

    backgroundSize : 50, // En pourcentage
    
    selectedThemeIndex: 6,                   // Thème sélectionné            (voir ci-dessous)

    selectedAnimationIndex : 0,             // Animation de l'article       (voir ci-dessous)
    selectedAnimationButtonIndex : 0,       // Animation des boutons        (voir ci-dessous)
    selectedAnimationBackgroundIndex: 0,     // Animation de l'arrière-plan  (voir ci-dessous)

    animationDurationBackground: 30,  // Durée de l'animation en secondes
    delayAnimationButton: 0.1,        // Délai de l'animation en secondes

    canvaEnable: 1, // 1 : Enable, 0 : Disable
    selectedCanvasIndex: 3,          // Animation du canva (voir ci-dessous)
};
//      Thèmes      \\
// 0 : Grey Theme
// 1 : Light Yellow Theme
// 2 : Green Theme
// 3 : Blue Theme
// 4 : Red Theme
// 5 : Light blue Theme
// 6 : Dark Theme
// 7 : Orange Theme
// 8 : Grey Dark Theme
// 9 : Green Grey Theme
// 10 : Very Light Blue Theme
// 11 : Brown Theme
// 12 : Purple Theme
// 13 : Pink Theme
// 14 : Neptune Theme (Light Brown Theme)

//      Animations      \\
// 0 : Fondu
// 1 : Glisser
// 2 : Zoomer
// 3 : Rotation
// 4 : Rebondir
// 5 : Secouer
// 6 : Retourner
// 7 : Pulsation
// 8 : Balancer
// 9 : Se balancer
// 10 : Clignoter
// 11 : Bande de caoutchouc
// 12 : Tada
// 13 : Gélatineux
// 14 : Battement de coeur
// 15 : Vitesse de la lumière
// 16 : Rouler
// 17 : Charnière

//      Canva Animations      \\
// 0 : Bubble
// 1 : Neuronal
// 2 : Particule
// 3 : Stars Array
// 4 : Snow 
// 5 : Galaxy
// 6 : Hexagone
// 7 : Confetti
// 8 : Fireworks
// 9 : Boom CLick
// 10 : Crowd
// 11 : Storm
// 12 : Color Wars
// 13 : Liquid Light
// 14 : Rain
// 15 : Matrix
// 16 : Purple Tree
// 17 : Cloud
// 18 : Space
