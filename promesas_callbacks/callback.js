// Vamos a demostrar que es un callback sencillamente:
// se pueden pasar funciones por parametros..

const sumar = (a, b) => a + b;

const calculo = (a, b, callback) => {
  return callback(a, b);
};

console.log(calculo(10, 10, sumar));

const otroCalculo = (a, b, callback) => {
  return callback(a, b);
};

console.log(otroCalculo(4, 3, (a, b) => a * b));

// INTENTEMOS HACER LO MISMO CON PROMESAS
const withPromises = (a, b) => {
  const resultado = a + b;
  return new Promise((resolve) => {
    resolve(resultado);
  });
};

withPromises(10, 35).then((res) => console.log(res));
