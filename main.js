const menuButton = document.querySelector('.menu-button');

function toggoleMenu() {
	const navigation = document.querySelector('.navigation');
	const menuContainer = document.querySelector('.menu-container');
	navigation.classList.toggle('active');
	menuContainer.classList.toggle('open');
}

menuButton.addEventListener('click', toggoleMenu);
