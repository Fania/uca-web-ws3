# Web Design & Development

## Workshop 3 - Exercise 3: LocalStorage Hearts

In this workshop you are going to be introduced to the **browser local storage** and how to access it with JavaScript.

We are going to do this by creating a mockup for *likes* containers - that is, the classic **5-star ratings** modules that you get on websites, although in our case we cannot connect to a full backend database (so you wouldn't get this feedback sadly) but we can store the use likes in the browser's localStorage, so they are saved on the user's browser and remembered locally for next time!

Think of this as a nice way to implement a front end only user based **rating system** - for example a way for users to remember which shop items they want to buy in which order, or which songs they liked, etc. 

Anyway let's get to it.

- [ ] create a `section` and put 5 of these `svg` stars into it: `<svg id="star-1" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-2 -2 54 50"><path fill="none" stroke="#fff" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"></svg>` (make sure you change the `id` number for each, so they are not duplicates!)

I've provided some default styling for the `body` to center the what you put on the page and give it some red background. Nothing overly fancy.

Because we are now trying to target multiple elements with the same `id` it's a good idea to use the *attribute selector* in CSS: 

- [ ] target any elements with `id`s that start with "star", i.e. our `svg`s! and because we want them to imitate `button`s we add `cursor: pointer`:

```css
[id^="star"] {
  cursor: pointer; 
}
```

- [ ] Then by default we want the `svg`s to have a red background (i.e. `fill` colour) and a white border (i.e. `stroke` colour):

```css
[id^="star"] path { 
  fill: red; 
  stroke: white;
}
```

- [ ] But when we have "liked" them we want them to look different, in this case we simply want them to have a full white background (i.e. `fill` and `stroke` colour):

```css
[id^="star"].liked path { 
  fill: white; 
  stroke: white;
}
```

> Note in both these cases that we are handling the `svg path` here, not the `svg`, i.e. the `[id^="star"]` element itself. That is because the `path` is what forms the `svg` line that needs to have the styling attached to it, not the `svg` container itself.

- [ ] Finally, give them a `hover` style to make it easier to spot that these are supposed to be clickable "buttons":

```css
[id^="star"]:hover path,
[id^="star"].liked:hover path { 
  fill: yellow; 
  stroke: white;
}
```

Now for the JavaScript:

- [ ] you can probably guess that we will need a variable that holds our stars elements: `const stars = document.querySelectorAll('[id^="star"]');` so that we can loop through them
- [ ] we will then create a function called `handleLikes` that takes a parameter called 'elements' as input like this:

```js
function handleLikes(elements) {
  ...
}
```

- [ ] and then immediately after (or before, it doesn't matter, JS is asynchronous!) we call the function with the `stars` variable: `handleLikes(stars);`

Inside the function we will have to do a few things:

