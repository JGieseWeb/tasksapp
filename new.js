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

  const task = {
    name: taskNameInput.value,
    date: radioGroupItem.value,
  };
  let oldTaskList = JSON.parse(localStorage.getItem("taskList"));
  if (oldTaskList === null) {
    oldTaskList = [];
  }

  oldTaskList.push(task);

  localStorage.setItem("taskList", JSON.stringify(oldTaskList));
  function goToPage(href) {
    location.href = href;
  }
  goToPage("/dashbord.html");
};
