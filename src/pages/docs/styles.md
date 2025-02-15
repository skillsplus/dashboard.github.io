---
title: Style snippets
subtitle:
slug: css
orderData: 3
layout: '../../layouts/Docs.astro'
featured: /backgrounds/kir-simakov-ZN3Hsru3SIM.webp
---

Bonjourr is customisable through its settings interface, but there are many more things you can do! Copy and paste those style snippets in their dedicated section of the settings to unlock some new possibilities.

Want your own style snippet here ? [Contact us !](/#further)

## Backgrounds

### I like my backgrounds fast.

Faster background transition on startup.

```css
#background_overlay {
	transition: transform 0.2s, opacity 0s;
}
```

### Unicolor is the new meta

Makes background a uniform color. Replace '#234' with your color of choice.

```css
#background_overlay {
	background-color: #234;
}

/* This also hides shadows */
#main::before,
#time::before,
#background,
#background-bis {
	display: none;
}
```

## Clock

### I like my clocks thick

Makes analog clock thicker.

```css
#interface {
	--anlg-w: 4px; /* Change size here */
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

Makes analog clock look like a Rolex.

```css
* #interface #time #time-container #analogClock,
* #interface #time #time-container #analogClock:hover {
	border-width: 1px;
	background-size: cover;
	background-image: url('https://bonjourr.fr/misc/rolex.png') !important;
}
```

## Greetings

### I want my own greeting

Sets a custom greeting phrase instead of Good Morning, Good Afternoon, etc.

```css
#greetings:before {
	content: 'Your custom greeting';
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

## Links

### I want transparent links!

Some site icons come as PNGs with a transparent background. This snippet will remove Bonjourr's default white background for links and make these icons shine.

```css
#interface #linkblocks li.block a img {
	background: transparent;
	box-shadow: unset;
}

#interface #linkblocks li.block a img:hover {
	box-shadow: unset;
}
```

## Fonts

### My fonts shall be black (or any other color 😯)

Changes font color to black. Can help if you mainly use bright backgrounds. Change "black" to a color code if you'd like another specific color.

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

## Other

### I don't care about artist exposure

Hides Unsplash photo author credits.

```css
#credit {
	display: none;
}
```

### 23 what, carrots?

Adds a C after the temperature.

```css
#tempContainer p::after {
	content: 'C';
}
```

### No GPU, only CPU 😠

This disables graphics intensive `backdrop-filter` style property on some elements.

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

### For laggy computers

Disables most settings transitions and animations. You can also add the styles above to improve performances.

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
