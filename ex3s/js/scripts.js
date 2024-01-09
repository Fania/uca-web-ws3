'use strict';

// get stars from DOM
const [...stars] = document.querySelectorAll('[id^="star"]');

// add eventListener to all stars
stars.map(star => 
  star.addEventListener('click', (ev) => {
    captureClick(star);
  })
);

// pass element on to set class and localStorage
function captureClick(elem) {
  toggleClass(elem);
  setState(elem);
}

function setClass (elem, state) {
  if (state === "true") {
    elem.classList.add("liked");
  }
  if (state === "false") {
    elem.classList.remove("liked");
  }
}

function toggleClass(elem) {
  elem.classList.toggle("liked");
}
// update localStorage for element
function setState(elem) { 
  [...elem.classList].includes("liked") ? 
    localStorage.setItem(elem.id, true):
    localStorage.setItem(elem.id, false);
}

function getState(elem) {
  let stateStored = localStorage.getItem(elem.id);
  if (stateStored !== null && stateStored) {
    console.log(`getting state bool ${elem.id}`, stateStored);
    setClass(elem, stateStored);
    return stateStored;
  }
}

function loadFromStorage() {
  let starState;
  
  stars.map(star => {
    starState = getState(star);
    setClass(star, starState);
  })
}

document.addEventListener('DOMContentLoaded', loadFromStorage);
