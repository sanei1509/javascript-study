// vamos a crear una nueva instancia de promesa
const autentication = new Promise((resolve, reject) => {
  const auth = true;

  if (auth) resolve("Usuario correcto");
  else reject("Error al iniciar sesión");
});

// ejecutamos la validacion
autentication
  .then((resultado) => console.log(resultado))
  .catch((error) => consol.log(error));
