
import state from "./state.js";
import variables from "./variables.js";
import { saveToLocalStorage } from "./main.js";
import { emptyListElement, renderItemToDo } from "./markups.js";

const {
  taskInput,
  tasksList,
} = variables;

export const checkEmptyList = ({ tasks }) => {

  if (!tasks.length) {
    tasksList.insertAdjacentHTML('afterbegin', emptyListElement);
  }

  if (tasks.length) {
    const emptyList = document.getElementById('emptyList');
    emptyList ? emptyList.remove() : null;
  }

};

export const handleAddTask = (event) => {
  event.preventDefault();

  if (!state.taskValue) return;

  const newTask = {
    id: Date.now(),
    text: state.taskValue,
    done: false,
  };

  tasksList.insertAdjacentHTML('beforeend', renderItemToDo(newTask));

  state.tasks.push(newTask);
  checkEmptyList(state);
  saveToLocalStorage(state);

  taskInput.value = '';
  state.taskValue = '';
  taskInput.focus();
};

export const handleInputTask = ({ target }) => {
  state.taskValue = target.value;
};