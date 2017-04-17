var app = angular.module("app", ["ngRoute"])

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "partials/new.html"
    })
    .when("/edit", {
      templateUrl: "partials/edit.html"
    })
    .otherwise({
      redirectTo: "/"
    })
})
