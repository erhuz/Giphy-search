'use strict';

import '../styles/index.scss';
import giphy from './giphy';

const apiKey      = process.env.GIPHY_API_KEY;
const searchForm  = document.querySelector('form#search');
const searchField = document.querySelector('form .search__field');
const gallery     = document.querySelector('.gallery');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchQuery = searchField.value;

  gallery.innerHTML = '';

  // Search query, Api key, Gif rating
  giphy.search(searchQuery, apiKey, 'g')
    .then(res => {

      res.data.forEach(gif => {
        // gallery.innerHTML += `
        //   <a class="gallery__item" href="${gif.images.original.url}">
        //     <img src="${gif.images.original.url}">
        //   </a>
        // `;

          // create a new div element
          const linkTag = document.createElement('a');
          linkTag.classList.add('gallery__item');
          // and give it some content
          const img = document.createElement('img');
          img.setAttribute('src', gif.images.original.url);

          // add the text node to the newly created div
          linkTag.appendChild(img);

          gallery.appendChild(linkTag);

          // // add the newly created element and its content into the DOM
          // const currentDiv = document.getElementById("div1");
          // document.body.insertBefore(linkTag, currentDiv);

      });

    });
});
