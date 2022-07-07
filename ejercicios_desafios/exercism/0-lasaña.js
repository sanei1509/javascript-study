//Tiempo esperado -> de un libro de cocina
//al exportarla podríamos usarla en cualquier arvchivo solo haciendo el import
export const EXPECTED_MINUTES_IN_OVEN = 40;

const PREPARATION_MINUTES_PER_LAYER = 2;

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */

//recibimos el tiempo actual de horno, y debemos obtener el tiempo restante
export function remainingMinutesInOven(actualMinutesInOven) {
  //devolvemos el tiempo restante
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

/**
 * Nos dan el numero de capaz, debemos traducirlo a tiempo
 *
 * @param {number} numberOfLayers
 * @returns {number} tiempo de preparación total
 */
export function preparationTimeInMinutes(numberOfLayers) {
  //asumimos que cada capa le toma 2 minutos
  // recibimos el numero de capas y debemos traducirlo al numero de minutos
  return numberOfLayers * 2;
}

/**
 * Calcular el tiempo de trabajo total , Horno + capas
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  //Calculamos el tiempo total que se lleva trabajando
  let time_las = numberOfLayers * 2;
  let time_working = actualMinutesInOven + time_las;

  return time_working;
}

