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
