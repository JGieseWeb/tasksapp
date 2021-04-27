const formElement = document.querySelector(".form");
const taskNameInput = document.querySelector(".form__input");

formElement.onsubmit = function (event) {
  event.preventDefault();
  const radioGroupItem = document.querySelector(".radio-group__input:checked");
  if (!taskNameInput.value) {
    alert("enter Task");
    return;
  }
  if (radioGroupItem == null) {
    alert("Selct a Date");
    return;
  }

  console.log(taskNameInput.value, radioGroupItem.value);
};
