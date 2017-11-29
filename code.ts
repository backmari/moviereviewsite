import * as $ from "jquery";
import {movieData} from "./data";

function renderMovie(movie) {
    $("#moviePoster").attr("src", movie.imgUrl);
    $(".movieText h2").text(movie.title);
    $(".movieText p").text(movie.description);
    movie.actors.forEach((element) => {
        const actorNode = $("<li>");
        actorNode.text(element);
        $(".movieText ul").append(actorNode);
    });
}

function changeStarRating(grade) {
    for (let index = 1; index <= 5; index++) {
        const starId = "#star" + index;
        if (index <= grade) {
            $(starId).addClass("filledStar");
        } else {
            $(starId).removeClass("filledStar");
        }
    }
}

function mouseEnterStarRating(grade) {
    for (let index = 1; index <= 5; index++) {
        const starId = "#star" + index;
        if (index <= grade) {
            $(starId).addClass("hoverStar");
        }
    }
}

function mouseLeaveStarRating() {
    for (let index = 1; index <= 5; index++) {
        const starId = "#star" + index;
        $(starId).removeClass("hoverStar");
    }
}

$(".rating").on("click", "span", function(e) {
    const grade = $(e.target).attr("star-rating");
    changeStarRating(grade);
});

$(".rating").on("mouseenter", "span", function(e) {
    const grade = $(e.target).attr("star-rating");
    mouseEnterStarRating(grade);
});

$(".rating").on("mouseleave", "span", function() {
    mouseLeaveStarRating();
});

renderMovie(movieData);
changeStarRating(2);
