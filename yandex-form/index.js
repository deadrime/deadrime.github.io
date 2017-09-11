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
    setData(data) {
        form['input-fio'].value = data.fio;
        form['input-phone'].value = data.phone;
        form['input-email'].value =  data.email;
    },
    validate(data){
        let isValid = true;
        let errorFields = [];

        //ФИО
        // 3 слова, хотя бы одна буква, слово может содержать один дефис, не может заканчиться на что-то кроме буквы
        let reg = /^([А-я]+(\-?[А-я]+)*\s+[А-я]+(\-?[А-я]+)*\s+[А-я]+(\-?[А-я]+)*)$/;
        let fio = data['fio'];
        let validFio = reg.test(fio);
        if (!validFio) {
            isValid = false;
            errorFields.push('input-fio');
        }

        //email
        //Логин может состоять из латинских символов, цифр, одинарного дефиса или точки. Он должен начинаться с буквы, заканчиваться буквой или цифрой.
        reg = /^[A-z]+[A-z\d]*[\.\-]?[A-z\d]+$/;
        let mailDomain = data['email'].split('@')[1];
        let login = data['email'].split('@')[0];
        let validMail = reg.test(login); //соответствие регулярному
        if (!validMail || !yandexMails.includes(mailDomain)) { // ошибка валидации или домен не от яндекса
            isValid = false;
            errorFields.push('input-email');
        }

        //телефон
        reg = /\d/g; // так как телефон работает по маске - просто нахожу все цифры
        let summ = 0;
        let nums = data['phone'].match(reg);
        nums.map(num => summ+=parseInt(num)); // и считаю их сумму
        if (summ >30 || nums.length!== 11) { // неправильная сумма или длина номера
            isValid = false;
            errorFields.push('input-phone');
        }
        return {isValid, errorFields};
    },
    sendData(data) {
        let xhr = new XMLHttpRequest();
        let urlParams = Object.keys(data).map(i => i+'='+ encodeURIComponent(data[i])).join('&');
        xhr.open('GET', serverAddr + '?'+urlParams, true); // наверное это излишне, но будь сервер настоящим - нужно было бы передать данные с формы
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send();
        xhr.onload = () => {
            if(xhr.status === 200) {
                let res = JSON.parse(xhr.responseText);
                let resultContainer = document.getElementById('resultContainer');
                let dataFromServer = document.getElementById('dataFromServer');
                let submitBtn = document.getElementById('submitBtn');
                if (submitBtn.hasAttribute('disabled')) {
                    submitBtn.removeAttribute('disabled');
                }
                switch(res.status) {
                    case 'success':
                        resultContainer.className = 'success';
                        submitBtn.className = 'btn btn--success';
                        dataFromServer.innerHTML = xhr.responseText;
                        break;
                    case 'progress':
                        let now = new Date();
                        resultContainer.className = 'progress';
                        submitBtn.className = 'btn btn--progress';
                        submitBtn.setAttribute('disabled','');
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
            dataToServer.innerHTML = JSON.stringify(data);
            this.sendData(data);
        }
    },
    autocompleteEmail() { // подумал что ошибок будет меньше если помочь пользователю выбрать почтовый домен
        let datalist = document.getElementById('autocmpl');
        let listItems = datalist.getElementsByTagName('option');
        let strArr = emailInput.value.split("@");
        if (strArr.length === 2 && !yandexMails.includes(strArr[1])) {
            Array.from(listItems).map((item,i) => {
                item.removeAttribute('disabled');
            item.value = strArr[0] + '@' + yandexMails[i];
        });
        }
    }
};

let emailInput = form['input-email'];
emailInput.addEventListener('input', MyForm.autocompleteEmail);
responceType.addEventListener('change', () => serverAddr = responceType.value);
form.addEventListener('submit', (e) => {
    e.preventDefault();
MyForm.submit();
});

const setForm = document.getElementById("set-data");

setForm.addEventListener('submit', (e) => {
    e.preventDefault();
let fio = setForm.fio.value;
let email = setForm.email.value;
let phone = setForm.phone.value;
MyForm.setData({ fio, email, phone })
});

// маска телефона, используя formatted.js
let formatted_phone = new Formatter(document.getElementById('input-phone'), {
    'pattern': '+7({{999}}){{999}}-{{99}}-{{99}}',
    'persistent': true
});

// для set-data
let formatted_phone_set = new Formatter(document.getElementById('set-phone'), {
    'pattern': '+7({{999}}){{999}}-{{99}}-{{99}}',
    'persistent': true
});
