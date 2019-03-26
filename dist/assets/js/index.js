window.onload = function() {
	let form 		= document.getElementsByClassName('form')[3];
	let fields 		= document.getElementsByClassName('form__field');
	let loader 		= document.getElementsByClassName('feedback__loading')[0];

	form.onsubmit = (e) => {
		e.preventDefault();

		changeStateForm.apply(loader, ['feedback__loading--active', 3000]);/*Показываем лоадэр*/

		let psevdo_fetch = new Promise((res, rej) => {
			let is_full_values = Array.prototype.filter.call(fields, (item)=> {return (item.value !== undefined || item.value !== "");}).length != 0;

			if (is_full_values) {
				let requestTimer = setTimeout(() => {
					res("success");
				}, 3000);
			} else {
				rej(new Error('Заполните все обязательные поля'));
			}
		});
		
		psevdo_fetch.then((res) => {
			let form_success = document.getElementsByClassName('feedback__success')[0];
			changeStateForm.apply(form_success, ['feedback__success--active', 3000]);/*Показываем что заявка успешно отправилась*/
			Array.prototype.forEach.call(fields, (item) => { item.value = ""; });
		}).catch((rej) => {
			console.error(rej);
		})

		function changeStateForm(activeClass, timeTillDeath) {
			this.classList.add(`${activeClass}`);
			setTimeout(()=>{ this.classList.remove(`${activeClass}`) }, timeTillDeath);
		}

		return false;
	}


	let burger 	  = document.getElementsByClassName('toggle-menu__burger')[0],
		menu_wrap = document.getElementsByClassName('menu-wrap')[0];

	burger.onclick = () => {
		console.log('fdgdfg');
		menu_wrap.classList.toggle('menu-wrap--active');
	}


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