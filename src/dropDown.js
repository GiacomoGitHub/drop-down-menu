const dropDown = () => {
	const menuItems = document.getElementById('menuItems');

	if (
		menuItems.className.match('invisible') ||
		menuItems.className.match('startingVisibility')
	) {
		menuItems.className = 'visible';
	} else {
		menuItems.className = 'invisible';
	}
};

export { dropDown };
