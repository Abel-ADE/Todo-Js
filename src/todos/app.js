import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';

const ElemetIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCountNumber: '#pending-count',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    //Muestra las tareas
    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElemetIDs.TodoList, todos);
        updatePendingCount();
        showActiveFilter();
    }

    //Función que cuenta las tareas pendientes
    const updatePendingCount = () => {
        let number = todoStore.getTodos('pending').length;
        let celda = document.querySelector(ElemetIDs.PendingCountNumber);

        celda.textContent = number;
    };

    const showActiveFilter = () => {
        const filter = todoStore.getCurrentFilter() === 'all' ? '' : todoStore.getCurrentFilter();       
        const element = document.querySelector(`a[href="#/${filter}"]`);
        
        element.setAttribute('class','filtro selected');
    };

    //Función anónima auto invocada, se ejecuta al inicio
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    //Referencias HTML
    const newDescriptionInput = document.querySelector(ElemetIDs.NewTodoInput);
    const todoListUL = document.querySelector(ElemetIDs.TodoList);
    const clearCompletedButton = document.querySelector(ElemetIDs.ClearCompleted);
    const filtersLIs = document.querySelectorAll(ElemetIDs.TodoFilters);

    //Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {                
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();        
        event.target.value = '';
    });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        todoStore.togleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUL.addEventListener('click', (event) => {     
        const isDestroyElement = event.target.className === "destroy";
        const element = event.target.closest('[data-id]');

        if(!element || !isDestroyElement) return;

        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    clearCompletedButton.addEventListener('click', () => {             
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLIs.forEach(item => {
        item.addEventListener('click', (event) => { 
            let element = event.target;
            let filter = (element.getAttribute('href')).replace('#/','');

            //Elimino as etiquetas anteriores
            filtersLIs.forEach(el => {el.classList.remove('selected')});     
            //Añado a etiqueta actual
            element.classList.add('selected');  

            //Cambio o filtro
            todoStore.setFilter((filter == '') ? undefined : filter); 
            displayTodos();
        });
   });
}