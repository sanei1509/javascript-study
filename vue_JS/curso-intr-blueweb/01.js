const { createApp } = Vue;

createApp({
    data() {
        return{
        mensaje: "Mensaje con vue",
        personajes: [
            {nombre: "Naruto", clan: "Uzumaki"},
            {nombre: "Sasuke", clan: "Uchiha"},
            {nombre: "Itachi", clan: "Uchiha"}
        ],
        nuevos_personajes: ''
    }
    }
}).mount('#app') // lo vamos a montar en #app


// createApp({
//   data() {
//     return {
//       message: 'Hello Vue!'
//     }
//   }
// }).mount('#app')
