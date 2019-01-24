'use strict';

import '../styles/index.scss';
import giphy from './giphy';

const apiKey      = process.env.GIPHY_API_KEY;
const searchForm  = document.querySelector('form#search');
const searchField = document.querySelector('form .search__field');
// const searchBtn   = document.querySelector('form .search__button');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchQuery = searchField.value;

  // Search query, Api key, Gif rating
  giphy.search(searchQuery, apiKey, 'g')
    .then(res => {
      console.log(res);


    });
});
