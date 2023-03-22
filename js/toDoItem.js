import state from "./state.js";
import { saveToLocalStorage } from "./main.js";
import { checkEmptyList } from "./addingToDo.js";

export const handleRemoveItem = ({ target }) => {

  if (target.dataset.action !== 'delete') return;

  const parentNode = target.closest('.list-group-item');
  const idParentNode = Number(parentNode.id);

  state.tasks = state.tasks.filter(item => idParentNode !== item.id);
  parentNode.remove();

  checkEmptyList(state);
  saveToLocalStorage(state);
};

export const handleDoneTask = ({ target }) => {

  if (target.dataset.action !== 'done') return;

  const parentNode = target.closest('.list-group-item');
  const textToDo = parentNode.querySelector('.task-title');
  const idParentNode = Number(parentNode.id);
  const task = state.tasks.find(item => idParentNode === item.id);

  textToDo.classList.toggle('task-title--done');
  task.done = !task.done;
  saveToLocalStorage(state);
};