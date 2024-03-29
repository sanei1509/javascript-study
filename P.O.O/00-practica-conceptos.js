// FUNCIONES CONSTRUCTORAS

const personaje = function (realidad, personaje) {
  this.reality = realidad;
  this.name = personaje;
  this.c;
};

const naruto = new personaje("Naruto", "Naruto Uzumaki");

console.log(naruto);

// Que pasa detras ?
// 1. Se crea un nuevo objeto
// 2. Se asigna el valor de this al nuevo objeto
// 3. Se ejecuta el codigo de la funcion
// 4. Se retorna el nuevo objeto

// PROTOTIPOS

// Los prototipos son objetos que se utilizan como plantillas para crear nuevos objetos

// Los objetos creados a partir de un prototipo comparten las mismas propiedades y metodos

personaje.prototype.actionTrigger = function () {
  console.log(`Clones de sombras`);
};

console.log(personaje.prototype);

// creo una mesa en poo

const Mesa = function (largo, ancho, agrandar) {
  this.largo = largo;
  this.ancho = ancho;
  // Los métodos no debería ir mismo dentro de la función constructora
  this.agrandar = ancho + 10;
};

// DEBEÍAMOS HACER USO DE LA HERENCIA PROTOTIPICA
Mesa.prototype.agrandar = function (ancho) {};
