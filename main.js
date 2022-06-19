const menuButton = document.querySelector('.button-menu');

function toggoleMenu() {
	const navigation = document.querySelector('.navigation');
	const menuContainer = document.querySelector('.container-menu');
	navigation.classList.toggle('active');
	menuContainer.classList.toggle('open');
}

menuButton.addEventListener('click', toggoleMenu);
