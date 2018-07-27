---
layout: post
title: Getting the value for offsetTop for an element relative to the page
date: 2018-07-27T08:30:00.000Z
categories: js offsetTop DOM 
excerpt: In Vanilla JS, you can get a value for offsetTop, but it is scoped to the nearest relatively position ancestor. This method will help you traverse the DOM and get it's position relative to the document top.
---

In Vanilla JS, you can get a value for offsetTop, but it is scoped to the nearest relatively position ancestor. This method will help you traverse the DOM and get it's position relative to the document top.

```` js
trueOffsetTop = element => {
    let distance = 0;

    if (element.offsetParent) {
        do {
            distance += element.offsetTop;
            element = element.offsetParent;
        } while (element);
    }

    return distance < 0 ? 0 : distance;
};
````
