Description du projet:

Ce projet a pour objectif de tester mes compétences en accessibilité web en transformant un site initialement illisible et peu accessible en un site bien accessible, conforme aux critères WCAG.


Corrections techniques pour Next

Placer les données sous forme de JSON dans un dossier (data) séparé, au lieu d’un tableau d’objets directement dans le code.
Fissionner la version mobile et desktop tout en gardant la même interface.
Corrigez et découpez les pages en composants .


Page Dashboard : Problèmes d’accessibilité et corrections appliquées

Images sans attribut alt
Problème : Certaines images n’ont pas d’attribut alt.
Solution : Utiliser le composant Image de Next.js avec l’attribut src et ajouter un texte 
descriptif pour chaque image.

Divs cliquables non sémantiques
Problème : Des div sont utilisées comme éléments cliquables ou comme liens.
Solution : Remplacer ces div par des balises <button> ou <Link> pour respecter la sémantique et l’accessibilité.

Champ de recherche sans label
Problème : Le champ de recherche n’a pas de label.
Solution : Ajouter un label associé au champ pour améliorer l’accessibilité.

Modal sans attributs ARIA et sans logique d’ouverture/fermeture
Problème : Le modal n’a pas aria-modal, role="dialog" aria-labelledby et aucune logique d’ouverture/fermeture.
Solution : Ajouter les attributs ARIA nécessaires (role="dialog", aria-modal="true" aria-labelledby) et implémenter une logique claire pour ouvrir et fermer le modal, incluant Escape et un focus trap.

Ordre des titres
Problème : Les titres ne respectent pas l’ordre hiérarchique (h1, h2, etc.).
Solution : Vérifier et corriger l’ordre des titres pour respecter la hiérarchie sémantique.

Structure HTML sémantique
Problème : Beaucoup de div sont utilisées à la place de sections sémantiques.
Solution : Remplacer les div par des balises sémantiques (<header>, <main>, <nav>, <section>) pour améliorer l’accessibilité et la structure du document.

Autres améliorations
Ajouter aria-describedby au formulaire.
Ajouter des aria-label aux liens qui n’ont pas de texte (icônes).
Améliorer le contraste du texte (par exemple pour l’affichage des dates).






Page Landing : Problèmes d’accessibilité et corrections appliquées

Divs et spans cliquables non sémantiques
Problème : Utilisation de div et span cliquables au lieu de liens ou boutons natifs.
Solution : Remplacer par <button> ou <Link> pour respecter la sémantique.

Couleurs avec faible contraste
Problème : Textes peu lisibles.
Solution : Ajuster les couleurs pour améliorer le contraste conformément aux normes WCAG.

Navigation entre rubriques
Problème : Navigation non structurée.
Solution : Gérer la navigation vers les sections Accueil, Fonctionnalités et Contact avec des id et liens corrects.

Ordre des titres
Problème : Hiérarchie des titres incorrecte.
Solution : Corriger l’ordre pour respecter la structure sémantique (h1, h2, etc.).

Images sans textes alternatifs
Problème : Certaines images n’ont pas de texte descriptif.
Solution : Ajouter des textes alternatifs (alt) explicites.

Scroll imbriqué (double scroll)
Problème : Présence de scroll imbriqué gênant la navigation.
Solution : Supprimer le scroll imbriqué.

Formulaire de contact avec uniquement des placeholders
Problème : les labels ne sont pas accessibles aux lecteurs d’écran.
Solution : ajouter des labels cachés mais accessibles aux lecteurs d’écran.

Attributs ARIA
Problème : Certains éléments n’ont pas les attributs ARIA nécessaires pour les lecteurs d’écran.
Solution : Ajouter les attributs ARIA appropriés (aria-label, aria-describedby).

Critères WCAG respectés

Perceptible : Texte lisible, images avec texte alternatif, contraste adapté.

Utilisable : Navigation au clavier, focus visible sur les éléments interactifs.

Compréhensible : Hiérarchie des titres respectée, labels explicites pour les formulaires.

Robuste : Utilisation de balises sémantiques, attributs ARIA conformes pour les lecteurs d’écran.



Comment tester ?

Tester le site avec un lecteur d’écran automatique (par exemple, ouvrir Narrator avec Win + Ctrl + Entrée sous Windows) et naviguer sur le site. Chaque bouton ou lien doit être lisible.

Utiliser la touche Tab pour naviguer entre les boutons et vérifier le focus ainsi que l’accessibilité au clavier. 