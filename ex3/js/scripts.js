'use strict';

const stars = document.querySelectorAll('[id^="star"]');
console.log(stars);

handleLikes(stars);


function handleLikes(elements) {

  elements.forEach( elem => {
    // console.log('current id:',heart.id);

    let liked = localStorage.getItem(elem.id);
    // first load
    if ( liked === null ) {
      console.log('nothing in storage yet');
      localStorage.setItem(elem.id, 'false');
    } else {
      console.log('already in storage');
      if (liked === 'true') elem.classList.add('liked');
    }
    elem.addEventListener('click', () => {
      // get up-to-date value for each click
      let liked = localStorage.getItem(elem.id);
      if ( liked === 'true' ) {
        console.log('unliking',elem.id);
        elem.classList.remove('liked');
        localStorage.setItem(elem.id, 'false');
      } else {
        console.log('liking',elem.id);
        elem.classList.add('liked');
        localStorage.setItem(elem.id, 'true');
      }
    });
  });

}
