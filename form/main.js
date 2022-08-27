// Задача
// Страница с формой регистрации
// Задача: создать страницу с формой регистрации из четырёх полей, которая будет выводить уведомление об ошибке при неправильном заполнении.

// Чему научитесь: проверять правильность заполнения различных полей с помощью JavaScript.

// В итоге у вас должна быть возможность:

// просматривать адаптированную страницу на ноутбуке и смартфоне;
// заполнять регистрационные формы на странице;
// видеть, когда форма пустая или заполнена неверно.

let form = document.querySelector('.js-form'),
   formInputs = document.querySelectorAll('.js-input'),
   inputEmail = document.querySelector('.js-input-email'),
   inputPhone = document.querySelector('.js-input-phone'),
   inputCheckBox = document.querySelector('.js-input-checkbox');

function validateEmail(email) {
   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

function validateCountry(country) {
   let re = new RegExp('.co$'); 
   return re.test(String(country).toLowerCase());
}

function validatePhone(phone) {
   let re = /^[0-9\s]*$/;
   return re.test(String(phone));
}


form.onsubmit = function () {
   let emailVal = inputEmail.value,
      phoneVal = inputPhone.value,
      emptyInputs = Array.from(formInputs).filter(input => input.value === '');

   formInputs.forEach(function (input) {
      if (input.value === '') {
         input.classList.add('error');
      } else {
         input.classList.remove('error');
      }
   });

   if (emptyInputs.length !== 0) {
      console.log('Заполните строки');
      return false;
   }

   if (!validateEmail(emailVal)) {
      console.log('Такого email не существует');
      inputEmail.classList.add('error');
      return false;
   } else {
      inputEmail.classList.remove('error');
   }

   if (validateCountry(emailVal)) {
      console.log('Email такого формата не принимается');
      inputEmail.classList.add('error');
      return false;
   } else {
      inputEmail.classList.remove('error');
   }
   
   if (!validatePhone(phoneVal)) {
      console.log('Такого телефона не существует');
      inputPhone.classList.add('error');
      return false;
   } else {
      inputPhone.classList.remove('error');
   }

   if (!inputCheckBox.checked) {
      console.log('Не отмечена галочка');
      inputCheckBox.classList.add('error');
      return false;
   } else {
      inputCheckBox.classList.remove('error');
   }
}
