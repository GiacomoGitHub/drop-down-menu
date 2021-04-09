import css from './stylesheet.css';

import { dropDown, dropUp } from './dropDown.js';

const pageFunctionality = () => {
	const menu = document.getElementById('menuButton');

	menu.addEventListener('mouseover', () => {
		dropDown();
	});

	menu.addEventListener('mouseout', () => {
		dropUp();
	});
};
pageFunctionality();
