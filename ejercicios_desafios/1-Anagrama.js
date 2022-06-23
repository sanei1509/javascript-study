//¿Es un anagrama?
//Un anagrama consiste en una función que recibe 2 STRINGS -> return TRUE or FALSE
//formando una palabra reordenando todas las letras de otra palabras

//-> no hace falta comprobar que ambas palabras exista
//-> 2 palabras IGUALES no son anagrama

function isAnagram(wordOne, wordTwo)
{
	if (wordOne.toLowerCase() == wordTwo.toLowerCase())
		return False;

	//1 - necesitamos convertir a un array de caracteres ambas cadenas
	//2 - ordenar alfbeticamente el array y comparar si son iguales
	const arr1 = wordOne.toLowerCase.split()
	const arr2 = wordTwo.toLowerCase().split()
	arr1.sort()
	arr2.sort()
	
	if(arr1 == arr2)
		return True;
	
}

