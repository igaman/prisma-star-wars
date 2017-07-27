const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const openMenu = document.querySelector('.button__menu-open');
const closeMenu = document.querySelector('.button__menu-close');
let menuActive = false;

openMenu.addEventListener('click', function() {
	menuActive = true;

	document.body.classList.add('menu-active');

	this.classList.remove('active');
	const hideMenuOpen = setTimeout(() => {
		this.style.display = 'none';
	}, 500);

	navigation.style.display = 'block';
	menu.style.display = 'block';
	const showMenu = setTimeout(() => {
		menu.classList.add('active');
	}, 10);

	closeMenu.style.display = 'block';
	const showClose = setTimeout(() => {
		closeMenu.classList.add('active');
	}, 60);
});

closeMenu.addEventListener('click', function() {
	menuActive = false;

	document.body.classList.remove('menu-active');

	this.classList.remove('active');
	this.style.display = 'none';

	navigation.style.display = 'none';
	menu.style.display = 'none';
	menu.classList.remove('active');

	openMenu.style.display = 'block';
	const showOpenMenu = setTimeout(() => {
		openMenu.classList.add('active');
	}, 10);
});

//for window resize, for show/hide the menu
window.onresize = function() {
	if (window.matchMedia("(min-width: 1024px)").matches) {
		navigation.style.display = 'block';
		menu.style.display = 'block';
		openMenu.style.display = 'none';
		closeMenu.style.display = 'none';
	} else if (menu.style.display === 'block' && window.matchMedia("(max-width: 1023px)").matches && menuActive === false) {
		navigation.style.display = 'none';
		menu.style.display = 'none';
		openMenu.style.display = 'block';
	} else if (menu.style.display === 'block' && window.matchMedia("(max-width: 1023px)").matches && menuActive === true) {
		closeMenu.style.display = 'block';
	}
}