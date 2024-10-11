// Importar la clase Nodo
import { Nodo } from './nodo.js';

// Definir la clase ListaEnlazada
class ListaEnlazada {
    constructor() {
        this.head = null; // Nodo inicial
    }

    // Método para agregar caracteres a la lista
    agregarNodo(data) {
        const nuevoNodo = new Nodo(data);
        if (!this.head) {
            this.head = nuevoNodo; // Si la lista está vacía, el nuevo nodo es la cabeza
        } else {
            let actual = this.head;
            while (actual.next) {
                actual = actual.next; // Recorrer la lista hasta el último nodo
            }
            actual.next = nuevoNodo; // Agregar el nuevo nodo al final
        }
    }

    // Método para obtener la palabra formada por la lista enlazada
    obtenerPalabra() {
        let actual = this.head;
        let palabra = '';
        while (actual) {
            palabra += actual.data; // Construir la palabra concatenando los datos
            actual = actual.next;
        }
        return palabra;
    }

    // Método para invertir la lista enlazada
    invertir() {
        let anterior = null;
        let actual = this.head;
        let siguiente = null;

        while (actual) {
            siguiente = actual.next;
            actual.next = anterior; // Revertir el puntero
            anterior = actual;
            actual = siguiente;
        }
        this.head = anterior; // Actualizar la cabeza de la lista
    }
}

export { ListaEnlazada };
