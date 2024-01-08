'use strict';

// get stars from DOM
const [...stars] = document.querySelectorAll('[id^="star"]');

// add eventListener to all stars
stars.map(star => 
  star.addEventListener('click', (ev) => {
    console.log(`clicked ${ev.srcElement.parentNode.id}`);
    captureClick(star);
  })
);

// pass element on to set class and localStorage
function captureClick(elem) {
  changeClass(elem);
  setState(elem);
}

// change class for element
function changeClass(elem) {
  ![...elem.classList].includes("liked") ? 
    elem.classList.add("liked"):
    elem.classList.remove("liked");
}

// update localStorage for element
function setState(elem) {
  [...elem.classList].includes("liked") ? 
    localStorage.setItem(elem.id, true):
    localStorage.setItem(elem.id, false);
}

loadFromStorage();
function loadFromStorage() {
  console.log('loading from storage');
  stars.map(star => {

    // when loading the localstorage applies everything right, the classes are right, the localstorage is right, etc, but then when loading the page for some reason its loaded wrong!
    
    console.log('star.id == true',Boolean(localStorage.getItem(star.id)) === true);

    if(Boolean(localStorage.getItem(star.id)) === true){
      star.classList.add("liked");
    } else {
      star.classList.remove("liked");
    }
  })
}
