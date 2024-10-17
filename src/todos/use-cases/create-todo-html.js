import { Todo } from "../models/todo.model";

/**
 * Crea el html de cada una de las tareas
 * @param {Todo} una tarea
 */
export const createTodoHtml = (todo) => {
    if(!todo) throw new Error('A TODO object is required');

    const {done, description, id} = todo;

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${done ? 'checked' : ''}>
            <label>${description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;

    const listElement = document.createElement('li');
    listElement.innerHTML = html;
    listElement.setAttribute('data-id', id);
    if(done) listElement.classList.add('completed');

    return listElement;
}