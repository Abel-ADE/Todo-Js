import { v4 as uuidv4 } from 'uuid';

/**
 * Clase Todo: Representa una nota
 */
export class Todo {

    /**
     * Constructor de una nota
     * @param {String} description la descripción 
     */
    constructor( description ){
        this.id = uuidv4();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}