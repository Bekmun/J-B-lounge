const selector = document.querySelector(".form__input[type='tel']");
const im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

const formBtn = document.querySelector(".form__btn");
const modalMain = document.querySelector(".modal__main");
const modalThenks = document.querySelector(".modal__thenks");

const validate = new JustValidate("#form");

validate
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Введите имя",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Введите 3 и более символов",
    },
    {
      rule: "maxLength",
      value: 15,
      errorMessage: "Запрещено вводить более 15 символов",
    },
  ])
  .addField("#tel", [
    {
      rule: "required",
      errorMessage: "Укажите ваш телефон",
    },
    {
      rule: "function",
      validator: function () {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: "Здесь должно быть 10 символов без +7",
    },
  ])
  .addField("#number", [
    {
      rule: "required",
      errorMessage: "Сколько человек?",
    },
    {
      rule: "maxLength",
      value: 2,
      errorMessage: "Запрещено вводить более 2 символов",
    },
  ])
  .addField("#data", [
    {
      rule: "required",
      errorMessage: "Укажите дату",
    },
  ])
  .addField("#time", [
    {
      rule: "required",
      errorMessage: "Укажите время",
    },
  ])
  .addField("#checkbox", [
    {
      rule: "required",
      errorMessage: "Нужно ваша согласие",
    },
  ])
  .onSuccess((event) => {
    let formData = new FormData(event.target);

    // запрос
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          modalMain.classList.add("modal__main--close");
          setTimeout(() => {
            modalThenks.classList.add("modal__thenks--visible");
          }, 300);
        }
      }
    };

    xhr.open("POST", "mail.php", true);
    xhr.send(formData);
    console.log(event.target);

    // очистка
    event.target.reset();
  });
