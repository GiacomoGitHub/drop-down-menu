const dropDown = () => {
	const item1 = document.getElementById('item1');
	const item2 = document.getElementById('item2');
	const item3 = document.getElementById('item3');

	item1.style.opacity = '100';
	item2.style.opacity = '100';
	item3.style.opacity = '100';
};

const dropUp = () => {
	const item1 = document.getElementById('item1');
	const item2 = document.getElementById('item2');
	const item3 = document.getElementById('item3');

	item1.style.opacity = '0';
	item2.style.opacity = '0';
	item3.style.opacity = '0';
};

export { dropDown, dropUp };
