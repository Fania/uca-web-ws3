'use strict';

// const hearts = document.querySelectorAll('[id^="heart"]');
const stars = document.querySelectorAll('[id^="star"]');
// console.log(hearts);
console.log(stars);

// handleLikes(hearts);
handleLikes(stars);


function handleLikes(elements) {

  let liked;
  elements.forEach( elem => {
    // console.log('current id:',heart.id);
    liked = localStorage.getItem(elem.id);
    // first load
    if ( liked === null ) {
      console.log('nothing in storage yet');
      localStorage.setItem(elem.id, false);
    } else {
      console.log('already in storage');
      if (liked === true) elem.classList.add('liked');
    }
    elem.addEventListener('click', () => {
      // get up-to-date value for each click
      liked = Boolean(localStorage.getItem(elem.id));
      // console.log(liked);
      console.log(typeof liked);
      // console.log(typeof Boolean(liked));
      if ( liked === true ) {
        console.log('unliking',elem.id);
        elem.classList.remove('liked');
        localStorage.setItem(elem.id, false);
      } else {
        console.log('liking',elem.id);
        elem.classList.add('liked');
        localStorage.setItem(elem.id, true);
      }
    });
  });

}

function blah(element, likeStatus) {

  if(likeStatus === true) {}



}