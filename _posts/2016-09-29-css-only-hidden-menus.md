---
layout: post
title: CSS only toggle menus
date: 2016-09-29T19:00:00.000Z
categories: css html menu hamburger
excerpt: Want a hidden, flyout etc menu without relying on JavaScript. Here's how!
---

So, up until recently, I have been building menus that are hidden and appear when a button is clicked using HTML, CSS and crucially... a JavaScript library (namely jQuery).
This has usually involved binding a click event listener to the button, then toggling an 'is-active' or 'is-visible' class on the menu and the button once that event fires. This, is a great solution although it has either been to the exclusion of non JavaScript users; or it has required me to replicate my menu in the footer and apply an anchor jump link to the button so that if JavaScript doesn't load, clicking the button produces a jump to the menu.

## Enter CSS Pseudo selectors

With the growing support for CSS Pseudo selectors, specifically :target, I have made the jump (pun intended) to using my a jump link to actually show the menu. This approach requires no JavaScript at all, and is supported in all modern browsers (CH 4+, FF 3.5+, Safari 3.2+, Opera 10.1+, IE 7+).

### An Example

So let look at what markup you would use for you menu

```` html
<nav class="nav" id="main-nav" role="navigation">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/products">Products</a></li>
		...
	</ul>
</nav>
````

And lets say you have a simple anchor tag that you have styled up to look like a hamburger

```` html
<a href="#main-nav"><span class="is-hidden" hidden aria-hidden="true">Menu</span></a>
````

The crucial part here is the href. This must start with a hash and then contain the ID of the element that is hidden. Much like a standard jump link.

Now the CSS

```` css
.nav {
	display: none;
}

.nav:target {
	display: block;
}
````

It's that simple.
You may want to include an anchor with an empty href inside the menu to use as a close button. But other than that, you can style it up however you want, with whatever animations and transitions help make it feel slick.

#### Enjoy 