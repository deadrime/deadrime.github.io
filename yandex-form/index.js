"use strict";

const yandexMails = ['ya.ru','yandex.ru','yandex.ua','yandex.by','yandex.kz','yandex.com'];
const form = document.getElementById('myForm');

let responceType = document.getElementById('responceType');
let serverAddr = responceType.value;

const MyForm = {
	getData() {
		let fio = form['input-fio'].value;
		let phone = form['input-phone'].value;
		let email = form['input-email'].value;
		return {fio,phone,email};
		
	},
	validate(data){
		let isValid = true;
		let errorFields = [];
		
		//fio
		let reg = /[^a-zA-Zа-яА-Я\ \-]/i // разрешены только буквы, пробелы и тире
		let words = data['fio'].split(' ')
		let rightAmount = words.every((word) => word.length>0); // Хотя бы одна буква в слове
		let wordCount =  words.length;  // количество слов
		if (wordCount !==3 || reg.test(data['fio']) || !rightAmount) { 
			isValid = false;
			errorFields.push('input-fio');
		}
		
		//email
		reg = /.+@.+\..+/i; // html5 умеет валидировать email, так что я не уверен, что эта проверка тут уместна
		let BadEmail = data['email'].search(reg);
		let mailType = data['email'].split('@')[1];
		if (BadEmail || !yandexMails.includes(mailType)) { // не является почтовым адресом или не от яндекс
			isValid = false;
			errorFields.push('input-email');
		}
			
		//телефон
		reg = /\d/g; //так как телефон работает по маске - просто нахожу все цифры
		let summ = 0;
		let nums = data['phone'].match(reg);
		nums.map(num => summ+=parseInt(num)); //и считаю их сумму
		if (summ >30 || nums.length!== 11) { // неправильная сумма или длина номера
			isValid = false;
			errorFields.push('input-phone');
		}
		return {isValid, errorFields};
	},
	sendData(data) {
		let xhr = new XMLHttpRequest();
		let urlParams = Object.keys(data).map(i => i+'='+ encodeURIComponent(data[i])).join('&'); 
		//console.log(urlParams);
		xhr.open('GET', serverAddr + '?'+urlParams, true); // наверное это излишне, но будь сервер настоящим - нужно было бы передать данные с формы
		xhr.setRequestHeader('Content-Type','application/json');
		xhr.send();
		xhr.onload = () => {
			if(xhr.status === 200) {
				let res = JSON.parse(xhr.responseText);
				let resultContainer = document.getElementById('resultContainer');
				let dataFromServer = document.getElementById('dataFromServer');
				let submitBtn = document.getElementById('submitBtn');
				
				switch(res.status) {
					case 'success':
						resultContainer.className = 'success';
						submitBtn.className = 'btn btn--success';
						dataFromServer.innerHTML = xhr.responseText;
						break;
					case 'progress':
						var now = new Date();
						resultContainer.className = 'progress';
						submitBtn.className = 'btn btn--progress';
						dataFromServer.innerHTML = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + ' '  + xhr.responseText;
						setTimeout(() => this.sendData(data),parseInt(res.timeout));
						break;
					case 'error':
						resultContainer.className = 'error';
						submitBtn.className = 'btn btn--error';
						dataFromServer.innerHTML = xhr.responseText;
						break;
				}
			}
		}
	},
	submit() {
		let data = this.getData();		
		let valRes = this.validate(data);
		let isValid = valRes['isValid'], errorFields= valRes['errorFields'];
			
		if (!isValid) {  
			Array.from(form).map(i => { // расставление классов
				if (errorFields.includes(i.id)) {
					i.classList.add('error');
				}
				else {
					i.classList.remove('error');
				}
			});
		}
		else {
			Array.from(form).map(i => i.classList.remove('error'));
			let dataToServer = document.getElementById('dataToServer');
			let resultStr = JSON.stringify(data);
			dataToServer.innerHTML = resultStr;
			this.sendData(data);
		}
	},	
	autocompleteEmail() { // подумал что ошибок будет меньше если помочь пользователю выбрать почтовый домен
		let datalist = document.getElementById('autocmpl');
		let listItems = datalist.getElementsByTagName('option');
		let strArr = emailInput.value.split("@");
		if (strArr.length === 2) {
			Array.from(listItems).map((item,i) => {
				item.removeAttribute('disabled');
				item.value = strArr[0] + '@' + yandexMails[i];
			});
		}
	}
}

let emailInput = form['input-email'];
emailInput.addEventListener('input', MyForm.autocompleteEmail);
responceType.addEventListener('change', () => serverAddr = responceType.value);
form.addEventListener('submit', (e) => {
	e.preventDefault();
	MyForm.submit();
});

// маска телефона, используя formatted.js
let formatted = new Formatter(document.getElementById('input-phone'), {
  'pattern': '+7({{999}}){{999}}-{{99}}-{{99}}',
  'persistent': true
});