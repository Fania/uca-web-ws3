# Web Design & Development

## Workshop 3 - Exercise 2: Blurred Parallax with Overlay

For this workshop we are looking at some design and layout aspects again and how to achieve commonly used tricks such as parallax with *vanilla* CSS.

Let's start by inspecting the `HTML`.

Inside the `body` we have three elements:

```html
<body>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</body>
```

The `main` is really what we are interested in for the purposes of this demo and it contains:

```html
<main>
  <div class="banner welcomey">
    <!-- Welcome span -->
  </div>
  <section>
    <h2 id="whiskers">...</h2>
    <p>...</p>
  </section>
  <div class="banner clicky">
    <!-- Click me link -->
  </div>
  <section>
    <h2 id="catseyes">...</h2>
    <div class="sidebyside">
      <p>...</p>
      <p>...</p>
      <p>...</p>
    </div>
  </section>
</main>
```

So there is two `div`s and two `section`s, each `div` has a `class` of "banner" which we will use in the CSS later on and the `section`s have a unique `id` which we will use later for the menu.

We will come back to this structure later, but for now you need to understand what we want to achieve.

Right now, if you look at the page, the two banner areas (the first one in dark blue with the "welcome" message and the second one in a dark plum colour with the "click me" link) look fairly boring with their static background and colour.

Instead we want to turn them into what's called **parallax** areas that stay static while the rest of the page scrolls past them! I'm sure you've seen those before. There's also a few other things we'll do to make this site a bit more snazzy!

So, step one: 

- [ ] we want to replace the `background: darkblue;` declaration that exists at the moment for the `.welcomey` style block with the following:

```css
.welcomey {
  background-image: url('https://images.unsplash.com/photo-1534331106638-ed6dd4d1d309?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: right -400px top -90px;
}
```

Note the last line `background-position: right -400px top -90px;` there? That is to position the background image we have just placed into that space - remember we are developing for **mobile first** right now, so when you resize the page the image might not appear fully and we will address this is a `media` query in a second.

- [ ] In the `.banner span` style block add `backdrop-filter: blur(6px);` and `-webkit-backdrop-filter: blur(6px);` (you need both unfortunately in this case).

Try it now - it should already produce the desired *parallax* effect!

Let's just make sure it looks good on all screen sizes before we move on.

> **@media queries** should always be intuitive, as you need them (i.e. when content starts to look bad, rather than for specific device sizes "just because")

- [ ] our background image starts to shift away around 800px so we probably need to create a `media query` for around 750px to be safe and adjust the `background-position`: 

```css
@media only screen and (min-width: 750px) {
  .welcomey {
    background-position: right -200px top -90px;
  }
}
```

Once we play around with that, we will notice that it still doesn't quite look ok on even larger screens, so we can add another, final `query` (which should take care of all larger desktop sizes - at this point the background image simply stretches the full width):

```css
@media only screen and (min-width: 1000px) {
  .welcomey {
    background-position: right 0 top -90px;
  }
}
```

Now let's continue to the next section:

- [ ] for the `.clicky` area we will add a different kind of background: a tiled SVG: (replace the `background-color: #2B2C28;`)

```css
.clicky {
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="28" height="49" viewBox="0 0 28 49"%3E%3Cg fill-rule="evenodd"%3E%3Cg id="hexagons" fill="%239C92AC" fill-opacity="0.4" fill-rule="nonzero"%3E%3Cpath d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
  background-attachment: fixed;
  background-repeat: repeat;
  background-size: 200px;
}
```

- [ ] go back to the `html` and add another `div` with class `.banner blanky` and an empty `span` inside.
- [ ] then add a `section` which contains a `h2` with `id="clutter"` and the text "Our Clutter of Cats" or something similar!
- [ ] after the `h2` add a `div` with `class="clutter_of_cats"` which has 3 `figure`s:

```html
<figure>
  <img src="imgs/andreia-oliveira.jpg" alt="Andreia Oliveira">
  <figcaption>Andreia Oliveira</figcaption>
</figure>
```

- [ ] We are going to copy the main idea of the `.welcomey` area for the `.blanky` area:

```css
.blanky {
  background-image: url('https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* let's not worry too much about positioning right now */
  /* background-position: right 0 bottom -230px; */
}
```

- [ ] For the "Clutter of Cats" we want a classic panel of three circular pictures side by side, so of course we are going to use **flexbox** to create this:

```css
.clutter_of_cats {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
```

- [ ] and then some styling for the `figure` tags themselves:

```css
.clutter_of_cats figure {
  margin: 0;
}
```

- [ ] then style the images to circles, to a roughly a third of the page width, and a border and dropshadow:

```css
.clutter_of_cats figure img {
  border-radius: 50%;
  width: calc(90vw / 3 - 26px);
  height: calc(90vw / 3 - 26px);
  object-fit: cover;
  border: 3px solid white;
  filter: drop-shadow(0 0 0.75rem white);
}
.clutter_of_cats figure img:hover {
  filter: none;
}
```

- [ ] the figcaption also gets some love (you can be a lot more creative here than me!)

```css
.clutter_of_cats figcaption {
  text-align: center;
  margin: 10px 0;
}
```

---

Now we have the main *parallax* sections in place, but let's add a few more final bits:

- [ ] in the `.sidebyside` `div` we want to make it so those paragraphs show up side by side. Now we could do this with *flexbox* as you know, but there is another option: **`column-count`**!

```css
.sidebyside { 
  column-count: 3; 
  column-gap: 2em 
}
```

> `column-count` is typically used for **typography** just like this, so keep that in mind for the future.

Also, now that we have added another `section` called "Our Clutter of Cats" we should link to it in the menu!

- [ ] so, add another `a` tag in the menu: `<a href="">Our Clutter</a>`

Then we want to create internal links so that when we click on these links they actually take us to the relevant sections on this page!

- [ ] This is where our `id`s come in: for each of the `a` tags link to the relevant `header`'s `id`: 
  - [ ] `<a href="#whiskers">Whiskers</a>`
  - [ ] `<a href="#catseyes">Cat's Eyes</a>`
  - [ ] `<a href="#clutter">>Our Clutter</a>`

Now you can click on the internal link, and it jumps to the relevant header immediately. However we would like it to *scroll there like smooth butter jazz*!

- [ ] simply add `html { scroll-behavior: smooth; }`

Another thing we can do here is to make sure the logo links back to the "home" page (i.e. clears the url from any hashes we might have added, so that when we reload the page doesn't keep scrolling down to some random heading!)

- [ ] surround the `svg` in the `header` with an `a` tag that links to the `index.html`

- [ ] And then finally, if you want to, optionally, we can make the header *`sticky`*:

```css
header {
  ...
  position: sticky; 
  top: 0;
  z-index: 2;
}
```

This is a very common website design, and you don't need frameworks or templates to create it, as I've just shown you!