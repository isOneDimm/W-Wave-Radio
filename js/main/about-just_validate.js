// justValidate
let validation = new JustValidate('.about__feedback',
  {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: '#D52B1E',
    },
  }
);
validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Поле должно содержать минимум 3 символа'
    }
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Некорректный e-mail'
    }
  ])
  .addField('#textarea', [
    {
      rule: 'required',
      errorMessage: 'Это поле не может быть пустым',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Поле должно содержать минимум 10 символов'
    }
  ])
  .addField('#checkbox', [
    {
      rule: 'required',
      errorMessage: 'Это поле обязательно',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
          document.querySelector('body').classList.add('active')
          document.querySelector('.complete-mailer').classList.add('active')
        }
        else {
          document.querySelector('body').classList.add('active')
          document.querySelector('.error-mailer').classList.add('active')
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });





