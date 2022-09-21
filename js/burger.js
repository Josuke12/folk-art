const
	burgerBtn = document.querySelector(".menu-btn"),
	burgerMenu = document.querySelector(".burger-menu");

burgerBtn.addEventListener('click', (e) => {
	burgerMenu.classList.toggle('active-menu');
	e.preventDefault();
});