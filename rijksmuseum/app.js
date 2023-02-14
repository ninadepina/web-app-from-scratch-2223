import { fetchData } from './modules/data/fetchData.js';

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// DOM elements
const searchForm = document.querySelector('form');
export const searchResultsContainer = document.querySelector('main > section:first-of-type > section:last-of-type');

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Visual things

if (searchResultsContainer.children.length == 0) searchResultsContainer.classList.add('hidden');

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Events

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	fetchData();
});
