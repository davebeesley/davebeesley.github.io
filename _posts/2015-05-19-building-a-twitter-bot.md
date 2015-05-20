---
layout: post
title: Building a Twitter Bot
date: 2015-05-19T12:15:00.000Z
categories: ruby twitter
excerpt: On my way into work this morning, I stumbled across an interesting coding challenge. This is what happened next
---

This morning on my way into work, I was sat on the bus browsing through Twitter as I do to allay the boredom and I stumbled across this little beauty.

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr">Could someone please make a Twitter bot that replies to all tweets containing the phrase &#39;to be frank&#39; with a picture of Frank Spencer?</p>&mdash; rodti (@rodti) <a href="https://twitter.com/rodti/status/600427981933301760">May 18, 2015</a></blockquote>

I have been looking for an interesting coding challenge for a few weeks now, so.... Challenge Accepted!

## How?
All revved up, the I immediately setup a twitter account [@frankooohbetty](http://www.twitter.com/frankooohbetty) and then had to wait, because, day job y'know.

The next step was to create an app instance within twitter, which will allow my bot(app) to talk to the twitter api. So I headed over to [Twitter Apps](http://apps.twitter.com) and set it all up. This provided me with an api key and secret which I would need to create a token for twitter api access.

Still with me? Good!

Next I setup a GitHub repo for it all to live in. The Source can be found [here](http://www.github.com/davebeesley/ooohbetty) - although I'm hopefully not so stupid as to upload the file containing my API information.

### Which Language?
This was probably the hardest part. After all, this is learning exercise, so lets try and level up in a language I am pretty unfamiliar in.
I wanted to give it a go in Node. But I am a windows user, and node_modules not play nice on windows, no sir.
I know some PHP, but that's sooooo Web 1.0.
Eventually I have plumped for Ruby on Rails, it's new enough to me for my brain to enjoy and hipster enough for me to look super cool without the mega patchy beard.

### Fire up the Editor!
So here I am, a clean repo, an unused twitter account, and absolutely no Ruby knowledge what-so-everrrr.

Wish me luck :)
