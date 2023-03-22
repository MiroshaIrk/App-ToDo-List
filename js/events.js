import variables from "./variables.js";
import { handleAddTask, handleInputTask } from "./addingToDo.js";
import { handleDoneTask, handleRemoveItem } from "./toDoItem.js";

const {
  form,
  taskInput,
  tasksList,
} = variables;


form.addEventListener('submit', handleAddTask);
tasksList.addEventListener('click', handleDoneTask);
taskInput.addEventListener('keyup', handleInputTask);
tasksList.addEventListener('click', handleRemoveItem);