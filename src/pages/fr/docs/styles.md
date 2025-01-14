---
title: Morceaux de code sympatoche
subtitle:
slug: css
orderData: 3
layout: ../../../layouts/Docs.astro
featured: /backgrounds/kir-simakov-ZN3Hsru3SIM.webp
---

Bonjourr est personnalisable par le biais de son interface de paramètres, mais vous pouvez faire bien d'autres choses ! Copiez et collez ces extraits de style dans leur section dédiée des paramètres pour débloquer de nouvelles possibilités.

Vous voulez votre propre extrait de style ici ? [Contactez nous !](/#further)

## Fond d'écran

### J'aime que mes arrière-plans soient rapides.

Transition d'arrière-plan plus rapide au démarrage.

```css
#background_overlay {
	transition: transform 0.2s, opacity 0s;
}
```

### L'unicolore est la nouvelle méta

Donne une couleur uniforme à l'arrière-plan. Remplacez "#234" par la couleur de votre choix.

```css
#background_overlay {
	background-color: #234;
}

/* Cache aussi les ombres */
#main::before,
#time::before,
#background,
#background-bis {
	display: none;
}
```

## Horloge

### J'aime mes horloges épaisses

Rend l'horloge analogique plus épaisse.

```css
#interface {
	--anlg-w: 4px; /* Changez la taille ici */
}
#interface #time #time-container #analogClock #center {
	width: calc(var(--anlg-w) * 4);
	height: calc(var(--anlg-w) * 4);
}
#interface #time #time-container #analogClock {
	border-width: calc(var(--anlg-w) * 2);
}
#interface #time #time-container #analogClock span {
	width: calc(var(--anlg-w) * 2);
	margin-left: calc(var(--anlg-w) * -1);
}
#interface #time #time-container #analogClock span#analogSeconds {
	width: var(--anlg-w);
}
```

### Rolex 😎

Fait ressembler une horloge analogique à une Rolex.

```css
* #interface #time #time-container #analogClock,
* #interface #time #time-container #analogClock:hover {
	border-width: 1px;
	background-size: cover;
	background-image: url('https://bonjourr.fr/rolex.png') !important;
}
```

## Bienvenue

### Je veux mon propre message d'accueil

Définit une phrase d'accueil personnalisée au lieu de Bonjour, Bon après-midi, etc.

```css
#greetings:before {
	content: "Votre message d'accueil personnalisé";
	visibility: visible;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	text-align: center;
	text-transform: none;
}

#greetings {
	visibility: hidden;
	position: relative;
}
```

## Liens

### Je veux des liens transparents !

Certaines icônes de sites sont des PNG avec un fond transparent. Ce code supprimera le fond blanc par défaut de Bonjourr pour les liens et fera briller ces icônes.

```css
#interface #linkblocks li.block a img {
	background: transparent;
	box-shadow: unset;
}

#interface #linkblocks li.block a img:hover {
	box-shadow: unset;
}
```

## Police

### Mes polices de caractères seront noires (ou une autre couleur 😯)

Change la couleur de la police en noir. Utile si vous utilisez principalement des arrière-plans clairs. Remplacez "black" par un code couleur si vous souhaitez une autre couleur spécifique.

```css
body #interface,
#linkblocks span {
	color: black !important;
}
```

### And my clock shall be black too

```css
#interface #time #time-container #analogClock {
	border-color: black !important;
}

#minutes,
#center,
#hours {
	background-color: black !important;
}
```

## Autre

### Je me fiche de l'exposition de l'artiste

Cache les crédits d'auteur de la photo Unsplash.

```css
#credit {
	display: none;
}
```

### 23 quoi, carottes ?

Ajoute un C après la température.

```css
#tempContainer p::after {
	content: 'C';
}
```

### Pas de GPU, seulement le CPU 😠

Désactive la propriété de style `backdrop-filter` très gourmande en ressources graphiques sur certains éléments.

```css
#bookmarks_container,
#bookmarks,
#element-mover,
.move-overlay {
	backdrop-filter: none !important;
}

#editlink,
#bookmarks,
#element-mover {
	background-color: #f2f2f7;
}

body.dark #editlink,
body.dark #bookmarks,
body.dark #element-mover,
body.autodark #editlink,
body.autodark #bookmarks,
body.autodark #element-mover {
	background-color: #222;
}
```

### Pour les ordinateurs qui traînent

Désactive la plupart des transitions et des animations des paramètres. Vous pouvez également ajouter les styles ci-dessus pour améliorer les performances.

```css
#settings .as,
#settings,
.move-overlay {
	transition: none;
}

#interface {
	transform: translateX(0) !important;
	transition: none !important;
}
```
