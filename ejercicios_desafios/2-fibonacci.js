// La sucesion de fibonacci

// desafío:
//     escribir un programa que imprima los 20 numeros de
//     la sucesion de fibonacci de un [num]

// EJEMPLO -> 0, 1, 1, 2, 3, 5, 8, 13

const fibonacci = function (num){
    if (num === 1)
        return 1
    if (num === 0)
        return 1

    list = []

    for (let i = 1; i <= 50; i++){
        let val = i + (i - 1)
        
        list.push(i - 1)
        list.push(i)
        list.push(val)
    }

    other_list = []
    let aux_cero = 0
    let aux_uno = 1

    for (let j = 0; j < 10; j++){
        console.log(aux_cero)

        let val = aux_cero + aux_uno
        
        aux_cero = aux_uno
        aux_uno = val

        list.push(aux_cero, aux_uno)
    }

    console.log(list)
}