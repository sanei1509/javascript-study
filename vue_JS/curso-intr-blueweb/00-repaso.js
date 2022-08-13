// UTILIZANDO NODE PARA EJECUTAR JAVASCRIPT FUERA DEL NAVEGADOR
// console.log("Hola respondiendo aqui desdel el motor v89");
const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true,
};

// AGREGAMOS DISTINTOS VALORES AL OBJETO
// mascota.id = 1;
// (mascota.razas = ["pastor", "Aleman", "Rudo"]), console.log(mascota.id);
// console.log(mascota);

//DESTRUCTURACIÓN
const { edad } = mascota;

console.log(edad);

//cadena de enlaces de objetos
//EJEMPLO
const redes_sociales = {
  instagram: {
    link: "https://link",
    nombre: "random",
  },
  facebook: {
    link: "https://link",
    nombre: "random",
  },
};

let face_name = redes_sociales.facebook.nombre;

console.log(face_name);
