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
          // create a new div element
          const imgContainer = document.createElement('a');
          imgContainer.classList.add('gallery__item');
          // and give it some content
          const img = document.createElement('img');
          img.setAttribute('src', gif.images.original.url);

          // add the text node to the newly created div
          imgContainer.appendChild(img);

          // Append image container to gallery
          gallery.appendChild(imgContainer);
      });

    });
});
