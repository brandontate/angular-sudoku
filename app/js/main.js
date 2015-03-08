;(function(){
	var app = angular.module("app", ["ngRoute"])

	app.config(["$routeProvider", function ($routeProvider){
		$routeProvider.when("/",
			{
				templateUrl:"app.html",
				controller:"GameCtrl"
			}
		)
	}]);

	app.controller("GameCtrl", ["$scope", function ($scope) {
		$scope.model = {
			message: "This is my app!!!"
		}
	}]);
}());