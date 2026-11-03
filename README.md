# Portfolio — candidature en alternance community management (style Y2K)

Site 100 % statique (HTML / CSS / JS), **sans installation ni compilation** : compatible GitHub Pages tel quel.

## 1. Mise en ligne (5 minutes)

```bash
cd portfolio-cm
git remote add origin https://github.com/PSEUDO/NOM-DU-DEPOT.git
git push -u origin main
```

Puis sur GitHub : **Settings → Pages → Build and deployment → Source : "Deploy from a branch" → Branch : `main` / dossier `/ (root)` → Save.**
Le site apparaît après 1–2 minutes sur `https://PSEUDO.github.io/NOM-DU-DEPOT/`.

> Dépôt public obligatoire avec un compte GitHub gratuit. Si le dépôt distant contient déjà des fichiers : `git pull origin main --allow-unrelated-histories` avant le push.

## 2. À personnaliser en premier

| Quoi | Où |
|---|---|
| Nom, e-mail, menu, réseaux, CV **et infos d'alternance** (formation, rythme, durée, début, lieu) | `assets/js/site-config.js` (changé une fois = changé partout) |
| Couleurs, polices, arrondis, ombres | `assets/css/tokens.css` |
| Textes de chaque page | directement dans les `.html` (rechercher « Morgane PRELLE ») |
| Photo de profil | remplacer `assets/img/profil.svg` (ou mettre `profil.jpg` et changer le nom dans `index.html` et `a-propos.html`) |
| CV | remplacer `assets/cv/CV-Prenom-Nom.pdf` |
| URL du site (aperçu de partage, SEO) | remplacer `PSEUDO` / `NOM-DU-DEPOT` dans `index.html` (balise `og:image`), `robots.txt`, `sitemap.xml` |
| Image d'aperçu de partage | remplacer `assets/img/og-cover.png` (1200×630) |
| Formulaire de contact | créer un formulaire sur formspree.io et remplacer `VOTRE_ID` dans `contact.html` |

## 3. Ajouter un projet

1. Déposer les images dans `assets/img/projets/`.
2. Dupliquer `projet-exemple.html` → `projet-nom-du-client.html` et remplacer textes / images.
3. Dans `portfolio.html` (et `index.html` si « à la une »), copier un bloc `<a class="card">` et le faire pointer vers la nouvelle page. `data-cat="instagram strategie"` détermine les filtres.
4. Ajouter la page dans `sitemap.xml`.

## 4. Ajouter une page

Copier une page existante, garder le `<head>`, `<header id="site-header">`, `<footer id="site-footer">` et les deux `<script>` en bas. Pour l'ajouter au menu : une ligne dans `nav` de `site-config.js`.

## 5. Composants disponibles (classes CSS)

`.window` (fenêtre Y2K) · `.panel` · `.card` · `.btn` `.btn--primary` `.btn--lime` · `.tag` `.chip` · `.sticker` · `.sparkle` · `.stat` · `.meter` (barre de chargement) · `.timeline` · `.gallery` + `data-lightbox` · `.cta` · `.marquee` · `.chrome-text`. Les exemples sont dans les pages ; tout est documenté en tête de `style.css`.

## 6. Contraintes GitHub Pages à connaître

- **Chemins relatifs uniquement** (`assets/...`, jamais `/assets/...`) : sur un dépôt « projet » le site vit dans `/NOM-DU-DEPOT/`.
- **Noms de fichiers sensibles à la casse** : `Photo.JPG` ≠ `photo.jpg` (fonctionne en local sous Windows/Mac, casse en ligne). Convention : minuscules, tirets, sans accents ni espaces.
- **Pas de back-end** : pas d'envoi d'e-mail ni de base de données → formulaire via Formspree (gratuit) ou simple `mailto:`.
- **Limites** : site ≤ 1 Go, ~100 Go de trafic/mois. Optimiser les images (≈ 200 Ko max, JPG/WebP, largeur 1600 px max ; vidéos : héberger sur YouTube/Vimeo et intégrer).
- `.nojekyll` est inclus : empêche GitHub de retraiter les fichiers. Ne pas le supprimer.
- `404.html` est servie automatiquement pour les pages inconnues.
- **RGPD** : les polices Google Fonts sont chargées depuis les serveurs de Google. Pour un site 100 % conforme, les télécharger et les héberger dans `assets/fonts/`.
- Le menu et le pied de page sont générés en JavaScript : pratique, mais ils n'apparaissent pas si JS est désactivé.

## 7. Structure

```
index.html  portfolio.html  competences.html  a-propos.html  contact.html
projet-exemple.html (modèle)  404.html  robots.txt  sitemap.xml  .nojekyll
assets/
  css/  tokens.css (identité)  style.css (composants)
  js/   site-config.js (infos)  site.js (comportements)
  img/  profil.svg  favicon.svg  og-cover.png  projets/
  cv/   CV-Prenom-Nom.pdf
```
