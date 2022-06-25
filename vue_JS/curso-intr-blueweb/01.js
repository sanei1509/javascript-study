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
        nuevo_personaje: '',
    }
    },
    methods:{
        crearPersonaje() {
            //no podemos acceder directamente a personajes porque esta dentro de data
            if (this.nuevo_personaje != ''){
            this.personajes.push(
                {nombre: this.nuevo_personaje, clan: 0}
                )
            //pusheamos y limpiamos el input
            this.nuevo_personaje = ''
            }
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
