// Importar la clase ListaEnlazada
import { ListaEnlazada } from './lista.js';

// Función para verificar si una palabra es palíndromo
function verificarPalindromo() {
    const palabraOriginal = document.getElementById('palabra').value.trim().toLowerCase();
    const lista = new ListaEnlazada();

    // Agregar cada letra de la palabra a la lista enlazada
    for (let i = 0; i < palabraOriginal.length; i++) {
        lista.agregarNodo(palabraOriginal[i]);
    }

    // Obtener la palabra normal
    const palabraDirecta = lista.obtenerPalabra();

    // Invertir la lista
    lista.invertir();

    // Obtener la palabra invertida
    const palabraInvertida = lista.obtenerPalabra();

    // Comparar la palabra original con la palabra invertida
    const resultado = document.getElementById('resultado');
    if (palabraDirecta === palabraInvertida) {
        resultado.textContent = `"${palabraOriginal}" es un palíndromo.`;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = `"${palabraOriginal}" no es un palíndromo.`;
        resultado.style.color = 'red';
    }
}

// Asignar el evento al botón
document.getElementById('verificar').addEventListener('click', verificarPalindromo);
