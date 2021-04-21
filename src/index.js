import css from './stylesheet.css';

import { dropDown } from './dropDown.js';

const pageFunctionality = () => {
	const menu = document.getElementById('menuButton');

	menu.addEventListener('click', () => {
		dropDown();
	});
};
pageFunctionality();
