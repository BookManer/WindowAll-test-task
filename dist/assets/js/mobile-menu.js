window.onload = function() {
	console.log('menu');
	let burger 	  = document.getElementsByClassName('toggle-menu__burger')[0],
		menu_wrap = document.getElementsByClassName('menu-wrap')[0];

	burger.onclick = () => {
		burger.classList.toggle('toggle-menu__burger--active');
		menu_wrap.classList.toggle('menu-wrap--active');
	}
}