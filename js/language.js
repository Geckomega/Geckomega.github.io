const textContent = {

 // +++++ English +++++
  en: {
    //Nav
    nav_about: "About Me",
    nav_projects: "Projects",
    nav_contact: "Contact",

    //About
    about_title: "About Me",
    about_text: `Welcome to my portfolio! My name is Adam Arseneau (Geckomega) and I'm 
          a passionate programmer and game developer. I studied in game development
          in NBCC Miramichi for 2 years and have worked on many projects individually
          and in teams. This website contains demos of projects I am proud to have worked
          on and it will showcase my competencies.`,

    //Project1
    projects_title: "Projects",

    project_overview: "This project is a 2d sidescroller horror game made for the global game jam in 2026",
    project_role: ["Team leader", "Programmer"],
    project_technical: `I was the sole programmer on the project, responsible for all gameplay systems and ensuring the overall feel of the game was smooth and responsive. The core mechanic revolves around an enemy in the background chasing the player while the player navigates the map and hides behind walls or furniture.
            The enemy behavior is driven by a state machine. It patrols between predefined transforms in the scene and transitions into a chase state when the player enters its detection hitbox. This system handles movement, state transitions, and detection logic in a modular way.
            The game also includes an interactable drawer minigame. On scene load, drawers are assigned randomized contents (a key or a code), allowing each playthrough to be slightly different. This system uses simple randomization and scene‑based initialization to keep the logic lightweight.
            The player controller supports left/right movement, jumping, and crouching. When crouching behind walls, couches, or drawers, the player becomes invisible to the enemy, integrating stealth mechanics directly into the movement system.`,
    project_challenges: ` The biggest challenge was the strict 48‑hour time limit of the game jam. As a team, we had to prioritize essential features first to ensure the game was playable before adding any polish. This required constant communication, quick decision‑making, and a willingness to cut or simplify ideas when necessary.
            Another major challenge came from using GitHub for the first time as a team. Early on, we frequently overwrote each other’s work or caused merge conflicts, which forced us to redo parts of the project. To solve this, we improved our communication around changes, coordinated who was working on what, and made sure to pull and push updates more carefully. By the end of the jam, our workflow was much smoother and more organized.`,
    project_proud: [
      "Some scripts are modular and reusable",
      "I used new C# techniques",
      "The final product looked great",
      "The team worked perfectly together"
    ],

    //Contact
    contact_title: "Contact",
    contact_reach: "You can reach me at:",
    contact_email: "Email → GeckomegaDV@outlook.com",
    contact_email_button: "Email Me",

    //Disclaimer
    disclaimer: `Disclaimer: Some visual and audio elements shown here belong to their original creators. Please consider supporting the artists behind these works.`
  },

 // +++++ French +++++
  fr: {
    nav_about: "À propos",
  nav_projects: "Projets",
  nav_contact: "Contact",

  about_title: "À propos de moi",
  about_text: `Bienvenue sur mon portfolio! Je m'appelle Adam Arseneau (Geckomega) et je suis 
          un programmeur et développeur de jeux passionné. J'ai étudié le développement
          de jeux au NBCC Miramichi pendant 2 ans et j'ai travaillé sur de nombreux projets,
          autant individuellement qu'en équipe. Ce site présente des démos de projets dont je suis fier
          et met en valeur mes compétences.`,

  projects_title: "Projets",

  project_overview: "Ce projet est un jeu d’horreur en 2D de type side‑scroller créé pour le Global Game Jam 2026",
  project_role: ["Chef d’équipe", "Programmeur"],

  project_technical: `J’étais le seul programmeur du projet, responsable de tous les systèmes de gameplay et de la fluidité générale du jeu. Le mécanisme principal repose sur un ennemi en arrière‑plan qui poursuit le joueur pendant que celui‑ci navigue dans la carte et se cache derrière des murs ou des meubles.
            Le comportement de l’ennemi est géré par une machine à états. Il patrouille entre des points prédéfinis dans la scène et passe en mode poursuite lorsque le joueur entre dans sa zone de détection. Ce système gère le mouvement, les transitions d’état et la logique de détection de manière modulaire.
            Le jeu inclut également un mini‑jeu de tiroirs interactifs. Au chargement de la scène, les tiroirs reçoivent un contenu aléatoire (une clé ou un code), ce qui rend chaque partie légèrement différente. Ce système utilise une simple randomisation et une initialisation basée sur la scène pour rester léger.
            Le contrôleur du joueur permet de se déplacer à gauche/droite, de sauter et de s’accroupir. Lorsqu’il s’accroupit derrière des murs, des divans ou des tiroirs, le joueur devient invisible pour l’ennemi, intégrant ainsi des mécaniques d’infiltration directement dans le système de mouvement.`,

  project_challenges: `Le plus grand défi était la limite stricte de 48 heures du game jam. En équipe, nous devions prioriser les fonctionnalités essentielles pour garantir que le jeu soit jouable avant d’ajouter du polish. Cela demandait une communication constante, des décisions rapides et la volonté de couper ou simplifier certaines idées.
            Un autre défi majeur venait de l’utilisation de GitHub pour la première fois en équipe. Au début, nous écrasions souvent le travail des autres ou créions des conflits de fusion, ce qui nous obligeait à refaire certaines parties du projet. Pour résoudre cela, nous avons amélioré notre communication, mieux coordonné qui travaillait sur quoi et fait plus attention aux pulls/pushes. À la fin du jam, notre workflow était beaucoup plus fluide et organisé.`,

  project_proud: [
    "Certains scripts du jeu sont modulaires et facilement réutilisables",
    "J’ai utilisé de nouvelles techniques C#",
    "Le produit final était visuellement réussi et agréable à jouer",
    "L’équipe a travaillé ensemble de manière exemplaire"
  ],

  contact_title: "Contact",
  contact_reach: "Vous pouvez me joindre à :",
  contact_email: "Courriel → GeckomegaDV@outlook.com",
  contact_email_button: "Email moi",

  disclaimer: `Avis : Certains éléments visuels et audio présentés ici appartiennent à leurs créateurs originaux. Merci d’encourager les artistes derrière ces œuvres.`
  }
};

 // +++++ Other +++++

function applyLanguage(lang) {
  const content = textContent[lang];

  for (const key in content) {
    const el = document.getElementById(key);
    if (!el) continue;

    const value = content[key];

    if (Array.isArray(value)) {
      el.innerHTML = value.map(item => `<li>${item}</li>`).join("");
    } else {
      el.textContent = value;
    }
  }

  // Email button link
  const emailBtn = document.getElementById("contact-email-button");
  if (emailBtn) emailBtn.href = "mailto:GeckomegaDV@outlook.com";

  // Highlight active button
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById("lang-" + lang).classList.add("active");
}
