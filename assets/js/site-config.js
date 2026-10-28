/* ==========================================================================
   CONFIGURATION DU SITE — à modifier en premier
   Le menu, le pied de page, le nom et l'e-mail sont générés depuis ici :
   on change une fois, ça se met à jour sur TOUTES les pages.
   ========================================================================== */
window.SITE = {
  name: "Prénom Nom",
  role: "Community Manager",
  email: "prenom.nom@email.com",

  // Nom du dépôt GitHub SI l'URL du site est de la forme  https://pseudo.github.io/NOM-DU-DEPOT/
  // Laisser "" si le dépôt s'appelle  pseudo.github.io  (site à la racine).
  // Sert uniquement à la page 404.html.
  repoName: "",

  // Menu principal : [libellé, fichier]. Pour ajouter une page au menu, ajouter une ligne.
  nav: [
    ["Accueil", "index.html"],
    ["Portfolio", "portfolio.html"],
    ["Compétences", "competences.html"],
    ["À propos", "a-propos.html"],
    ["Contact", "contact.html"]
  ],

  // Réseaux affichés dans le pied de page (supprimer une ligne = la retirer)
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "TikTok", url: "https://www.tiktok.com/" }
  ],

  // Chemin du CV (PDF) — remplacer le fichier dans assets/cv/ en gardant ce nom
  cv: "assets/cv/CV-Prenom-Nom.pdf"
};
