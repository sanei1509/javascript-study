//FIZZ BUZZ : 
//en que consiste ? 
//function that print NUMBERS 1 TO 100
//NUMBER MULTIPLO DE 5 Y 3 -> print FIZZ BUZZ
//MULTIPLO DE 5 -> PRINT FIZZ
//MULTIPLO DE 3 -> PRINT BUZZ

for (let i = 1; i <= 100; i++) {
	const tres_mult = i % 3 == 0;
	const cinco_mult = i % 5 == 0;

	//debemos saber primero si se cumple mayor cant. casos
	if (tres_mult && cinco_mul)
		console.log("FizzBuzz");
	else if (tres_mult)
		console.log("Fizz");
	else if (cinco_mult)
		console.log("Buzz");
	else
		console.log(i);
}

//Para ver los resultados -> https://playcode.io/javascript

//conclusión:
//	lo mas importante en este tipo de ejercicios es controlar el caso más receptivo
