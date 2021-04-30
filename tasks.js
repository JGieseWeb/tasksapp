function createTaskElement(taskName) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.type = "checkbox";
  input.className = "tasks-group__input";

  span.className = "tasks-group__task";
  span.innerText = taskName;

  label.append(input, span);
  return label;
}

let taskList = JSON.parse(localStorage.getItem("taskList"));
if (taskList === null) {
  taskList = [];
}
// const TaskList = parseJSONFromLocalStorage("tasklist", []);
const todayTaskList = taskList.filter(function (task) {
  return task.date === "today";
});
const tomorrowTaskList = taskList.filter(function (task) {
  return task.date === "tomorrow";
});
const ThisWeekTaskList = taskList.filter(function (task) {
  return task.date === "selectDate";
});
///////
const taskElements = ThisWeekTaskList.map(function (task) {
  return createTaskElement(task.name);
});

const taskGroupElement = document.querySelector(".tasks-group");

taskGroupElement.append(...taskElements);

const radioButtons = document.querySelectorAll(".radio-group__input");
console.log(radioButtons);
radioButtons.forEach((radioButton) => {
  radioButton.onchange = platzhalter;
});
