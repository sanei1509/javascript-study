const extraerPost = (id) => {
  BODY = document.body;
  //   fetch a una url específica
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res, err) => {
    content = res.json();
    content.then((res) => (document.body.innerHTML = `<h1>${res.body}<h1>`));
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
      alert(`esta por ver el post numero ${res.id}`);
      fetch(`https://jsonplaceholder.typicode.com/users/${res.userId}`)
        .then((res) => res.json())
        .then((user) => alert(user.name));
    });
    if (err) alert(err);
  });
};

extraerUser(80);
