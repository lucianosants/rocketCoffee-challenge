const menuButton = document.querySelector('.menu-button');

function toggoleMenu() {
	const navigation = document.querySelector('.navigation');
	navigation.classList.toggle('active');
}

menuButton.addEventListener('click', toggoleMenu);
