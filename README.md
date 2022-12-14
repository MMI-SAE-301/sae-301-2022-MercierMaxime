# code de base pour TP (et future SAE 301)

- **Nom : MERCIER**
- **Prénom : Maxime**
- **URL maquette Figma: https://www.figma.com/file/mx6BO1p1MmIHS30lM0KkFCSAE-301---MERCIER-Maxime?node-id=0%3A1**
- **URL publique du site : https://tiktak.mercier-maxime.com**
- **URL projet Supabase : https://app.supabase.com/project/yrikpdkybblyoggmdgqy**
- **URL projet Heroku : https://deploiment-heroku.herokuapp.com/#/**
  - [X] Avez-vous invité abdallah.makhoul@univ-fcomte.fr dans votre 'Organisation' Supabase ?

# Auto-évaluation

## R313 | Dev Back (Abdallah Makhoul : [AC 2404](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612670) et [AC 2402](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612669))

Vous avez rendu à la racine du projet :

- [X] Le modèle conceptuel de données (nom : [MCD.png](/MCD.png) ou [MCD.pdf](/MCD.pdf) [^1])
- [X] Et compléter le fichier [bdd.sql](/bdd.sql) détaillant le code pour la création des tables, vues et policies créées
- [X] Avez-vous bien invité abdallah.makhoul@univ-fcomte.fr dans votre 'Organisation' Supabase comme développeur ?

## R312 | Intégrer ([Pierre Pracht : AC 2401](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612668))

Pour les liens :
[vers des fichiers](https://github.com/MMI-SAE-301/sae-301-2022-MercierMaxime/commit/44661d3ab8e124589fbee11bf9e13cee06910ce4#L10)

Noté sur 40.

- [README](/README.md) bien rempli (0-2-4pts)
  - Ne cochez que ce que vous avez fait.
- Fonctionnalités "avancées" du site (0-2-4pts)
- Intégration du site (0-2-4-6pts)
- Code et Commit (0-2-4-6pts)
- Code HTML spécifiquement sémantique et accessible (0-1-2pts)

- [] usage de Classes utilitaires (1pt)
  - lien vers sa définition
  - lien vers son usage
- [X] Composants graphiques (0-1-2pts)
  - [lien composant graphique](/src/components/Header.vue)
- Technique CSS (0-1-2pts)
  - [Padding-pt-10](/src/pages/index.vue#L5)
  - [width-w-1/2](/src/pages/index.vue#L10)
- Mise en page CSS (0-1-2pts)
  - [grid grid-cols-3 hover:space-x-32]
    - [lien CSS](/src/pages/index.vue#L61)
  - [X] Mise en page fluide
- [X] Mobile First (0-1-2pts)
  - [X] Plusieurs tailles
    - [Sm - lg - xl](/src/pages/index.vue#L5)
- [ ] Dark Mode (0-1-2pts)
  - [ ] Simple usage de 'dark:'
  - [ ] Mise en place avec usage de custom property pour les couleurs. Ou usage de DaisyUI AVEC thèmes perso
    - liens
- "tailwin.config.js" (0-1-2pts)
  - [X] usage basique couleurs/fonts
  - [X] Comporte des données supplémentaires (utilisées !). Eg: "content-xxx", "bg-xxx", "grid-cols-xxx"...
    - [Lien tailwindconfig](/tailwind.config.js#L36)
- Composants "accessibles" (0-1-2pts)
  - [X] textes "accessibles" (eg. 'sr-only')
  - [X] Contenu accessible ET Usage de composants étudié pour accessibilité (Eg. HeadlessUI)

[^1]: Supprimez les mentions inutiles.
