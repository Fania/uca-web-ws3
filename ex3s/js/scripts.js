'use strict';

// get stars from DOM
const [...stars] = document.querySelectorAll('[id^="star"]');

// add eventListener to all stars
stars.map(star => 
  star.addEventListener('click', () => {
    toggleClass(star);
    setState(star);
  })
);

// toggle class for element
function toggleClass(elem) {
  elem.classList.toggle("liked");
}

// update localStorage for element
function setState(elem) { 
  [...elem.classList].includes("liked") ? 
    localStorage.setItem(elem.id, true):
    localStorage.setItem(elem.id, false);
}

// set class for element based on state
function setClass (elem, state) {
  if (state === "true") {
    elem.classList.add("liked");
  } else {
    elem.classList.remove("liked");
  }
}

// return state for element
function getState(elem) {
  let stateStored = localStorage.getItem(elem.id);
  if (stateStored !== null && stateStored) {
    setClass(elem, stateStored);
    return stateStored;
  }
}

// load from localStorage and apply classes to stars
function loadFromStorage() {
  stars.map(star => {
    setClass(star, getState(star));
  })
}

// run loadFromStorage() function when page first loads
loadFromStorage();
