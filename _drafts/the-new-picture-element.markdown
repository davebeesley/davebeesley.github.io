---
layout: post
title:  The new picture element specification
date:   2014-03-04 12:52:10
categories: website development html standards responsive rwd
---

So, I stumbled across [the new picture element specification][picturespec]  today. I know it's probably old news for some, but having been on holiday this is the first time I have encountered it. Although I had seen some references to [Scott Jehl][scottjehl] refactoring his awesome [Picturefill][picturefill] polyfill to the picture specification. But I had simply assumed that it had been more widely rolled out.

### So what is it all about

For a few years now, minds greater than mine have been trying to hammer out an intuitive way to responsibly use images in the new responsive web.
In 2011, [Bruce Lawson][bruce2011] of Opera proposed a new `<picture>` element. Based on the `<video>`, Bruce suggested that various image sources could be defined for differing breakpoints, pixel densities, and possibly even connection speed.

<picture alt="My great image">
	<source src="hi-res.png" media="(min-resolution: 192dpi) and (min-width:800px)">
	<source src="wide.png" media="min-width:800px">
	<source src="medium.png" media="min-width:400px">
	<source src="small.png">
		<!-- fallback for browsers without support -->
		<img src="medium.png" alt="My great image"> 
</picture>

#### Thanks for reading

[picturespec]: http://picture.responsiveimages.org
[scottjehl]: http://scottjehl.com
[picturefill]: https://github.com/scottjehl/picturefill
[bruce2011]: http://www.brucelawson.co.uk/2011/notes-on-adaptive-images-yet-again/