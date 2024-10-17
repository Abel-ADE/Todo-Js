import { createTodoHtml } from "./create-todo-html";

let element;

/**
 * Renderiza las tareas en el HTML
 * @param {String} elementId el id del HTML donde insertar las tareas
 * @param {Array} todos el array de tareas a mostrar
 */
export const renderTodos = (elementId, todos = []) => {

    if(!element) element = document.querySelector(elementId);
    if(!element) throw new Error(`Element ${elementId} not found`);
    
    element.innerHTML = '';

    todos.forEach(todo => {
        element.append(createTodoHtml(todo));
    });
}