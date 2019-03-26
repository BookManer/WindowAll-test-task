export default {
	
	let link_order = document.getElementsByClassName('order-cont__text');
	let cont_modal = document.getElementsByClassName('cont-modal')[0];
	let modals = document.getElementsByClassName('modal');

	Array.prototype.forEach.call(link_order, function(item, index) {
		item.onclick = function(e) {
			cont_modal.classList.add('cont-modal--active');
			modals[index].classList.add('modal--active');
			modals[index].children[0].onclick = function() {
				modals[index].classList.remove('modal--active');
				cont_modal.classList.remove('cont-modal--active');
			}
		}
	});

}