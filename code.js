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

function changeStarRating(grade) {
    for (let index = 1; index <= 5; index++) {
        let starId = "star" + index;
        let starNode = document.getElementById(starId);
        if (index <= grade) {
            starNode.classList.add("filledStar");
        }
        else {
            starNode.classList.remove("filledStar");
        }
    }
}

document.getElementById("star1").addEventListener("click", function() { changeStarRating(1); });
document.getElementById("star2").addEventListener("click", function() { changeStarRating(2); });
document.getElementById("star3").addEventListener("click", function() { changeStarRating(3); });
document.getElementById("star4").addEventListener("click", function() { changeStarRating(4); });
document.getElementById("star5").addEventListener("click", function() { changeStarRating(5); });

renderMovie(movieData);
changeStarRating(3);
