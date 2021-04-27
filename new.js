const formElement = document.querySelector(".form");
const taskNameInput = document.querySelector(".form__input");

formElement.onsubmit = function (event) {
  event.preventDefault();
  const radioGroupItem = document.querySelector(".radio-group__input:checked");
  console.log(taskNameInput.value, radioGroupItem.value);
};
