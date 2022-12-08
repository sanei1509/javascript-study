//Entendiendo más los objetos en javascript
const lista = [
  {
    nombre: "Naruto",
    age: 15,
  },
  {
    nombre: "Sakura",
    age: 15,
  },
  {
    nombre: "Kakashi",
    age: 32,
  },
  {
    nombre: "Gay sensei",
    age: 33,
  },
  {
    nombre: "Tsunade",
    age: 50,
  },
  {
    nombre: "Jiraiya",
    age: 51,
  },
  {
    nombre: "Itachi",
    age: 22,
  },
];

//Quiero que me devuelva el objeto con info solo de los mayores
for (let i = 0; i < lista.length; i++) {
  if (lista[i].age > 18) console.log(lista[i]);
}
