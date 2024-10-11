// main.js
import { ListaEnlazada } from './lista.js';

const listasPorLetra = {};

// Función para agregar una palabra y clasificarla según su primera letra
function agregarPalabra() {
  const palabra = document.getElementById('palabraInput').value.trim();
  if (palabra === '') {
    alert('Por favor ingresa una palabra.');
    return;
  }

  const primeraLetra = palabra[0].toLowerCase();
  if (!listasPorLetra[primeraLetra]) {
    listasPorLetra[primeraLetra] = new ListaEnlazada(); // Crear una nueva lista para esa letra si no existe
  }

  // Agregar la palabra a la lista correspondiente
  listasPorLetra[primeraLetra].agregarPalabra(palabra);

  // Limpiar el campo de entrada
  document.getElementById('palabraInput').value = '';

  // Actualizar la interfaz de usuario
  actualizarUI();
}

// Función para actualizar la interfaz de usuario
function actualizarUI() {
  const contenedorListas = document.getElementById('contenedorListas');
  contenedorListas.innerHTML = ''; // Limpiar contenido anterior

  for (const letra in listasPorLetra) {
    const lista = listasPorLetra[letra].obtenerPalabras();
    if (lista.length > 0) {
      const listaElem = document.createElement('div');
      listaElem.classList.add('lista');

      const titulo = document.createElement('h3');
      titulo.textContent = `Palabras que empiezan con "${letra.toUpperCase()}"`;

      const ul = document.createElement('ul');
      lista.forEach(palabra => {
        const li = document.createElement('li');
        li.textContent = palabra;
        ul.appendChild(li);
      });

      listaElem.appendChild(titulo);
      listaElem.appendChild(ul);
      contenedorListas.appendChild(listaElem);
    }
  }
}

// Inicializar el evento de agregar palabra
document.getElementById('agregarPalabraBtn').addEventListener('click', agregarPalabra);
