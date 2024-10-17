import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del poder'),
        new Todo('Piedra del campo'),
    ],
    filter: Filters.All
}

/* Un Store es un componente que almacena 
temporalmente información mediante registros,
es utilizado como caché. */

/**
 * Inicia el componente de almacenamiento
 */
const initStore = () => {
    loadStore();
}

/**
 * Carga el componente de almacenamiento
 */
const loadStore = () => {
    if(!localStorage.getItem('state')) return;

    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state',JSON.stringify(state));  
    loadStore();  
};

/**
 * Devuelve todas las tareas
 *  @param {Filters} newFilter el filtro a aplicar sobre las tareas
 *  @returns {Array} Devuelve un array de tareas
 */
const getTodos = (filter = Filters.All) => {
    switch (filter) {
        
        case Filters.All:
            return [...state.todos];
        
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);

        default:
            throw new Error(`Option ${filter} is not valid.`);
    }
}

/**
 * Añade una nueva tarea
 * @param {String} description la descripción de la tarea
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required');
    state.todos.push(new Todo(description));

    saveStateToLocalStorage();
}

/**
 * Cambia el estado de la tarea
 * @param {String} todoId el identificador de la tarea
 */
const togleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if(todo.id === todoId) todo.done = !todo.done;
        return todo;
    });

    saveStateToLocalStorage();
}

/**
 * Elimina una tarea
 * @param {String} todoId el identificador de la tarea
 */
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);

    saveStateToLocalStorage();
}

/**
 * Elimina todas las tareas completadas
 */
const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);

    saveStateToLocalStorage();
}

/**
 * Cambia el filtro de las tareas 
 * @param {Filters} newFilter el nuevo filtro a aplicar
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;

    saveStateToLocalStorage();
}

/**
 * Devuelve el filtro que se está aplicando a las tareas 
 */
const getCurrentFilter = () => {
    return state.filter.toString();
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    togleTodo,
}