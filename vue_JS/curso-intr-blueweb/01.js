const { createApp } = Vue;

createApp({
    data() {
        return{
        mensaje: "Mensaje con vue",
        clanes: ["Uzumaki", "Uchiha", "Hyuga", "Senju", "Otsutsuki"],
        personajes: [
            {nombre: "Naruto", clan: "Uzumaki"},
            {nombre: "Sasuke", clan: ''},
            {nombre: "Itachi", clan: "Uchiha"}
        ],
        nuevo_personaje: '',
        clan_name: ''
    }
    },
    methods:{
        crearPersonaje() {
            //no podemos acceder directamente a personajes porque esta dentro de data
            if (this.nuevo_personaje != '' && this.clan_name != ''){
            this.personajes.push(
                {nombre: this.nuevo_personaje, clan: this.clan_name}
                )
            //pusheamos y limpiamos el input
            this.nuevo_personaje = ''
            this.clan_name = ''
            }
        },
        random_clan() {
            let clan_index = Math.round(Math.random()*4)
            return this.clanes[clan_index]
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
