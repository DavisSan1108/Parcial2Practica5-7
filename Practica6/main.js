// main.js
import { ListaEnlazada } from './lista.js';

const lista = new ListaEnlazada();

// Función para invertir la palabra ingresada
function invertirPalabra() {
    const palabra = document.getElementById('palabra').value.trim();

    if (palabra === '') {
        alert('Por favor ingresa una palabra válida.');
        return;
    }

    // Limpiar la lista antes de procesar una nueva palabra
    lista.limpiar();

    // Agregar cada letra de la palabra a la lista enlazada en orden inverso
    for (let i = 0; i < palabra.length; i++) {
        lista.agregarAlInicio(palabra[i]);
    }

    // Mostrar la palabra invertida
    const resultadoElem = document.getElementById('resultado');
    resultadoElem.textContent = `Palabra invertida: ${lista.obtenerPalabraInvertida()}`;
}

// Asignar la función al botón
document.getElementById('invertirBtn').addEventListener('click', invertirPalabra);
