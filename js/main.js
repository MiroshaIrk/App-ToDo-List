'use strict';

import state from "./state.js";
import variables from "./variables.js";
import { renderItemToDo } from "./markups.js";
import { checkEmptyList } from "./addingToDo.js";

const {
  tasksList
} = variables;

export const saveToLocalStorage = ({ tasks }) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

if (localStorage.getItem('tasks')) {
  state.tasks = JSON.parse(localStorage.getItem('tasks'));
  state.tasks.forEach(task => tasksList.insertAdjacentHTML('beforeend', renderItemToDo(task)));
}

checkEmptyList(state);


