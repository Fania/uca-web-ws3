# Web Design & Development

## Workshop 3 - Exercise 3: LocalStorage Stars

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

At this point we can click on stars and they will change colour to white and when hovered over they will go yellow.

---

Now for the JavaScript:

Let's think about what we need to do first. We need to handle the clicks on the stars, so we need some sort of `eventListener` that changes the colour of the stars accordingly. We also want to put the state of each star when clicked into `localStorage` so that when we reload the page it remembers which stars we have *liked* and which not. 

We want short utility functions that are easy to understand and do simple things.

- [ ] Let's start with a variable that holds our stars elements: `const stars = document.querySelectorAll('[id^="star"]');` so that we can loop through them

- [ ] then we can loop through these stars and attach `eventListener`s to each:

```js
stars.map(star => 
  star.addEventListener('click', () => {
    toggleClass(star);
    setState(star);
  })
);
```

Inside of the `eventListener` we are calling two functions called `toggleClass(star);` and `setState(star);` which we need to define next.

- [ ] This **toggleClass** function basically simply takes a *star* `element` as input parameter and then *toggles* the "liked" `class` on that `element`.

```js
function toggleClass(elem) {
  elem.classList.toggle("liked");
}
```

- [ ] The **setState** function also takes a *star* `element` as input and then checks if the `element` already has been "liked" (i.e. if it already has a "liked" `class` on it), if so then it sets the `localStorage` to `true`, if not then it sets it to `false`:

```js
function setState(elem) { 
  [...elem.classList].includes("liked") ? 
    localStorage.setItem(elem.id, true):
    localStorage.setItem(elem.id, false);
}
```

We are now able to see in the `localStorage`
how the values change correctly when clicked on stars - **but the styles to not match when we reload the page yet!!** So we need to write a function to *load from localStorage*!

---

- [ ] create a `loadFromStorage()` function, and in it loop over `stars` again with a `map` function as we did above for the `eventListener`s to call a `setClass` function (and call this function immediately after):

```js
function loadFromStorage() {
  stars.map(star => {
    setClass(star, getState(star));
  })
}
loadFromStorage();
```

We then need to declare two functions: 

- [ ] setClass (which takes a *star* `element` and a *state* and then depending on if the *state* is `true` will add a `class` "liked" or remove it):

```js
function setClass (elem, state) {
  if (state === "true") {
    elem.classList.add("liked");
  } else {
    elem.classList.remove("liked");
  }
}
```

- [ ] getState (which takes a *star* `element` and returns the *state* retrieved from the `localStorage`):

```js
function getState(elem) {
  let stateStored = localStorage.getItem(elem.id);
  if (stateStored !== null && stateStored) {
    setClass(elem, stateStored);
    return stateStored;
  }
}
```

Now, finally, altogether, we can reload the page and it will display our star ratings correctly with the states we have saved in the `localStorage` of the browser. We can update the ratings as we liked, and it will simply update the `localStorage`.