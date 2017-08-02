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
		let reg = /[^a-zA-Zа-яА-Я\ \-]/i //tolko bukvi, probel i tire
		let words = data['fio'].split(' ')
		let rightAmount = words.every((word) => word.length>0); //hotya bi 1 bukba
		let wordCount =  words.length;  // na 3 slova
		if (wordCount !==3 || reg.test(data['fio']) || !rightAmount) {
			isValid = false;
			errorFields.push('input-fio');
		}
		
		//email
		reg = /.+@.+\..+/i; // html5 umeet proveryat' email, ne uveren chto eto nuzhno
		let isEmail = data['email'].search(reg);
		let mailType = data['email'].split('@')[1];
		if (isEmail || !yandexMails.includes(mailType)) {//esli email ili poshta ne ot yandex
			isValid = false;
			errorFields.push('input-email');
		}
			
		//phone
		reg = /\d/g;  //tak kak telephon rabotaet po maske - prosto nahozhu vse cifri
		let summ = 0;
		let nums = data['phone'].match(reg);
		nums.map(num => summ+=parseInt(num)); //summa chisel	
		if (summ >30 || nums.length!== 11) {
			isValid = false;
			errorFields.push('input-phone');
		}
		
		return {isValid, errorFields};
	},
	sendData(data) {
		let xhr = new XMLHttpRequest();
		let urlParams = Object.keys(data).map(i => i+'='+ encodeURIComponent(data[i])).join('&');
		//console.log(urlParams);
		xhr.open('GET', serverAddr + '?'+urlParams, true);
		xhr.setRequestHeader('Content-Type','application/json');
		xhr.send();
		xhr.onload = () => {
			if(xhr.status ==200) {
				let res = JSON.parse(xhr.responseText);
				let resultContainer = document.getElementById('resultContainer');
				let dataFromServer = document.getElementById('dataFromServer')
				
				switch(res.status) {
					case 'success':
						resultContainer.className = 'success';
						dataFromServer.innerHTML = xhr.responseText;
						break;
					case 'progress':
						resultContainer.className = 'progress';
						dataFromServer.innerHTML = xhr.responseText;
						setTimeout(() => this.sendData(data),parseInt(res.timeout));
						break;
					case 'error':
						resultContainer.className = 'error';
						dataFromServer.innerHTML = xhr.responseText;
						break;
				}
			}
		}
	},
	submit() {
		let data = this.getData();
				
		let isValid, errorFields;
		let valRes = this.validate(data);
		isValid = valRes['isValid'];
		errorFields = valRes['errorFields'];
			
		if (!isValid) {
			Array.from(form).map(i => {
				if (errorFields.includes(i.id)) {
					i.classList.add('error');
				}
				else {
					i.classList.remove('error');
				}
			});
		}
		else {
			let dataToServer = document.getElementById('dataToServer');
			let resultStr = JSON.stringify(data);
			dataToServer.innerHTML = resultStr;
			this.sendData(data);
		}
	},	
	autocompleteEmail() {
		let datalist = document.getElementById('autocmpl');
		let listItems = datalist.getElementsByTagName('option');
		let strArr = emailInput.value.split("@");
		if (strArr.length == 2) {
			Array.from(listItems).map((item,i) => {
				item.removeAttribute('disabled');
				item.value = strArr[0] + '@' + yandexMails[i];
			});
		}
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	MyForm.submit();
})

let emailInput = form['input-email'];
emailInput.addEventListener('input', MyForm.autocompleteEmail);
responceType.addEventListener('change', () => serverAddr = responceType.value);

// maska ispolkzuya formatted.js
let formatted = new Formatter(document.getElementById('input-phone'), {
  'pattern': '+7 ({{999}})-{{999}}-{{99}}-{{99}}',
  'persistent': true
});

