<h1 align='center'>TODO App</h1>

<div align='center'>
  <img src="https://github.com/user-attachments/assets/db1ffa41-d1ff-4329-8f60-deca2d439802">
</div>

## Descripción

Esta es una aplicación de lista de tareas (TODO App) desarrollada en JavaScript utilizando Node.js y Vite. El proyecto es un ejercicio práctico en la estructuración de código, manejo del Local Storage, manipulación de eventos y del DOM.

## Características

- **Agregar, eliminar y marcar tareas como completadas**
- **Almacenamiento persistente** utilizando Local Storage
- **Estructuración de código** en diferentes archivos para mejorar la mantenibilidad
- **Interfaz de usuario** responsiva y fácil de usar

## Tecnologías Utilizadas

- JavaScript
- Node.js
- Vite
- HTML
- CSS

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Abel-ADE/Todo-Js.git

2. Navega al directorio del proyecto:

   ```bash
   cd Todo-Js
   
3. Instala las dependencias:

   ```bash
   npm install

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev

## Estructura del Proyecto
 
 ```bash
.
├── index.html      
├── main.js                  # Inicia la aplicación
├── src
│   ├── store
│   │   └── todo.store.js    # Maneja el LocalStorage
│   └── todos
│       ├── models           # Las clases del modelo
│       ├── use-cases        # Casos de uso
│       ├── app.html         # Html que se carga en el index.html
│       └── app.js           # Mantiene la lógica de la aplicación
├── styles.css               # Estilos de la plantilla utilizada
└── package.json
