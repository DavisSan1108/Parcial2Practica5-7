// lista.js
import { Nodo } from './nodo.js';

class ListaEnlazada {
    constructor() {
        this.head = null; // Cabeza de la lista enlazada
    }

    // Método para agregar un nodo al inicio de la lista (invertir el orden de las letras)
    agregarAlInicio(data) {
        const nuevoNodo = new Nodo(data);
        if (!this.head) {
            this.head = nuevoNodo;
        } else {
            nuevoNodo.next = this.head;
            this.head = nuevoNodo;
        }
    }

    // Método para obtener la palabra invertida como una cadena de texto
    obtenerPalabraInvertida() {
        let actual = this.head;
        let palabraInvertida = '';
        while (actual) {
            palabraInvertida += actual.data; // Concatenar las letras en orden
            actual = actual.next;
        }
        return palabraInvertida;
    }

    // Método para limpiar la lista enlazada
    limpiar() {
        this.head = null;
    }
}

export { ListaEnlazada };
