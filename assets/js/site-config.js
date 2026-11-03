/* ==========================================================================
   CONFIGURATION DU SITE — à modifier en premier
   Le menu, le pied de page, le nom et l'e-mail sont générés depuis ici :
   on change une fois, ça se met à jour sur TOUTES les pages.
   ========================================================================== */
window.SITE = {
  name: "Morgane PRELLE",
  role: "En recherche d'alternance · Community Management",
  email: "morgane.prelle@orange.fr",

  // Ma recherche d'alternance : affichée sur l'accueil et la page À propos (modifier ici = partout)
  alternance: {
    formation: "Responsable d'Activité Commercial et Marketing (RACM) chez Tetranergy Business School",
    rythme: "1 jour en formation / 4 jours en entreprises",
    duree: "12 mois",
    debut: "Dès que possible",
    lieu: "Saint-Denis, Sainte-Marie · mobile"
  },

  repoName: "Portfolio",

  // Menu principal : [libellé, fichier]. Pour ajouter une page au menu, ajouter une ligne.
  nav: [
    ["Accueil", "index.html"],
    ["Mon profil", "a-propos.html"],
    ["Portfolio", "portfolio.html"],
    ["Compétences", "competences.html"],
    ["Contact", "contact.html"]
  ],

  // Réseaux affichés dans le pied de page (supprimer une ligne = la retirer)
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/morgane-prelle-b58829434/" }
  ],

  // Chemin du CV (PDF) — remplacer le fichier dans assets/cv/ en gardant ce nom
  cv: "assets/cv/CV-Morgane_PRELLE.pdf"
};
