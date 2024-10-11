// lista.js
import { Nodo } from './nodo.js'; // Asegúrate de importar la clase Nodo

class ListaEnlazada {
  constructor() {
    this.head = null; // Nodo inicial (cabeza de la lista)
  }

  // Método para agregar palabras a la lista enlazada
  agregarPalabra(palabra) {
    const nuevoNodo = new Nodo(palabra);
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

  // Método para obtener todas las palabras en la lista
  obtenerPalabras() {
    let actual = this.head;
    const palabras = [];
    while (actual) {
      palabras.push(actual.data);
      actual = actual.next;
    }
    return palabras;
  }
}

export { ListaEnlazada };
