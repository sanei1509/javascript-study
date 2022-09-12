const extraerPost = (id) => {
  BODY = document.body;
  BODY.innerHTML = `<h1>POST:</h1>`;
  //   fetch a una url específica
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res, err) => {
    content = res.json();
    content.then((res) => (document.body.innerHTML += `<p>${res.body}</p>`));
    if (err) alert(err);
  });
};

extraerPost(6);

// DESAFIO
// ¿ Quién escribio el [post numero 80]
const extraerUser = (id) => {
  BODY = document.body;
  //   fetch a una url específica
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res, err) => {
    post = res.json();
    post.then((res) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${res.userId}`)
        .then((res) => res.json())
        .then((user) => {
          document.body.innerHTML += `<h2>Autor del post ${res.id}: </h2>`;
          document.body.innerHTML += `<h2>Escrito por : ${user.name} </h2>`;
        });
    });
    if (err) alert(err);
  });
};

extraerUser(80);

// MISMO DESAFÏO PERO CON ASYNC AWAIT
const extraerUserAsync = async (id) => {
  // async => siempre try, catch
  try {
    const resPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    //  YA LA PROMESA RESUELTA POR EL AWAIT VAMOS A PARSEARLA A JSON
    const post = await resPost.json();

    // AHORA QUEREMOS EL USUARIO LINKEADO CON EL RESPECTIVO POST
    const resUser = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );

    const user = await resUser.json();

    alert(`facilmente sabemos que el post ${post.id} lo escribio ${user.name}`);
    console.log(post);
    console.log(user);
  } catch (err) {
    console.log(err);
  }
};

extraerUserAsync(10);
