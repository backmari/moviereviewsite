function renderMovie(movie) {
    document.getElementById("moviePoster").src = movie.imgUrl;
    document.querySelector(".movieText h2").innerText = movie.title;
    document.querySelector(".movieText p").innerText = movie.description;
    let listNode = document.querySelector(".movieText ul");
    movie.actors.forEach(element => {
        let actorNode = document.createElement("li");
        actorNode.innerText = element;
        listNode.appendChild(actorNode);
    });

}

renderMovie(movieData);