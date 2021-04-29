function createTaskElement(TaskName) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.type = "checkbox";
  input.className = "task-group__input";

  span.className = "tasks-group__task";
  span.innerText = TaskName;

  label.append(input, span);
  return label;
}
const taskList = parseJSONFromLocalStorage("tasklist");

const taskElements = TaskList.map(function (task) {
  return createTaskElement(task.name);
});

const heatTeeElement = createTaskElement("Tee erhitzen");
