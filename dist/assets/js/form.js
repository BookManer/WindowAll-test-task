export default {
	console.log('fdgfdgd');
	let form 		= document.getElementsByClassName('form')[0];
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
		}).catch((rej) => {
			console.error(rej);
		})

		function changeStateForm(activeClass, timeTillDeath) {
			this.classList.add(`${activeClass}`);
			setTimeout(()=>{ this.classList.remove(`${activeClass}`) }, timeTillDeath);
		}

		return false;
	}

};