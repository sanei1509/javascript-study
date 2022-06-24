//¿Es un anagrama?
//Un anagrama consiste en una función que recibe 2 STRINGS -> return TRUE or FALSE
//formando una palabra reordenando todas las letras de otra palabras

//-> no hace falta comprobar que ambas palabras exista
//-> 2 palabras IGUALES no son anagrama

function isAnagram(wordOne, wordTwo) {
	if (wordOne.toLowerCase() === wordTwo.toLowerCase())
	  document.write("No es un Angagrama son la misma palabra");
	else if (wordOne.length != wordTwo.length)
	  document.write("No es un Anagrama no tienen el mismo tamaño");
	else {
	  //1 - necesitamos convertir a un array de caracteres ambas cadenas
	  //2 - ordenar alfbeticamente el array y comparar si son iguales
	  const arr1 = wordOne.toLowerCase().split("").sort();
	  const arr2 = wordTwo.toLowerCase().split("").sort();
  
	  //Tenemos que serializar el objeto para poder compararlo de una manera correcta
	  if (JSON.stringify(arr1) == JSON.stringify(arr2))
		document.write("Es un Anagrama");
	}
  }
  
  isAnagram("Roma", "Amor");
