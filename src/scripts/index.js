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
      console.log(res);


      res.data.forEach(gif => {
        gallery.innerHTML += gif.images.original.url;
        log(gif);
        const linkTag = document.createElement('a');
        log(linkTag);
        linkTag.classList.add('gallery__item');

        const img = document.createElement('img');
        img.setAttribute('src', gif.images.original.url);

        linkTag.appendChild(img);

        log('this workin?');


      });


    });
});
