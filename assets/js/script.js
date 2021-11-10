const app = (() => {
	let header;
	let menu;
	let menuItems;

	const init = () => {
		header = document.querySelector('header');
		menu = document.querySelector('.menu-icon');
		menuItems = document.querySelectorAll('.nav__list-item');

		applyListeners();
	}

	const applyListeners = () => {
		menu.addEventListener('click', () => toggleClass(header, 'nav-active'));
	}

	const toggleClass = (element, stringClass) => {
		if(element.classList.contains(stringClass))
			element.classList.remove(stringClass);
		else
			element.classList.add(stringClass);
	}

	init();
})();