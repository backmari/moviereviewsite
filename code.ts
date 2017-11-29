import * as angular from "angular";
// import * as $ from "jquery";
import {movieData} from "./data";
import {Review} from "./interfaces";

const app = angular.module("reviewApp", []);

app.controller("reviewController", ($scope) => {
  $scope.movie = movieData;
  $scope.rating = 3;
  $scope.hoverRating = 0;
  $scope.handleClick = (newRating) => {
    $scope.rating = newRating;
  };
  $scope.handleMouseEnter = (newRating) => {
      $scope.hoverRating = newRating;
  };
  $scope.handleMouseLeave = () => {
      $scope.hoverRating = 0;
  };
});
