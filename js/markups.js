export const renderItemToDo = ({ id, text, done }) => {
  const isDone = done ? 'task-title task-title--done' : 'task-title';

  return `<li class="list-group-item d-flex justify-content-between task-item" id="${id}">
            <span class="${isDone}">${text}</span>
            <div class="task-item__buttons">
              <button type="button" data-action="done" class="btn-action">
                <img src="./img/tick.svg" alt="Done" width="18" height="18">
              </button>
              <button type="button" data-action="delete" class="btn-action">
                <img src="./img/cross.svg" alt="Done" width="18" height="18">
              </button>
            </div>
          </li>`;
};

export const emptyListElement = `<li id="emptyList" class="list-group-item empty-list">
                                    <img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
                                      <div class="empty-list__title">Список дел пуст</div>
                                  </li>`;
