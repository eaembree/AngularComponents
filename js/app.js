angular.module('myApp', ['imFormComponents', 'panel'])

.controller('imFormCtrl', ['$scope', function($scope){
	$scope.dropdata = angular.fromJson('{"display":"Best Villain","required":true,"selected":"","options":[{"value":"","text":"-- Select --"},{"value":"1","text":"Darth Vader"},{"value":"2","text":"The Joker"},{"value":"3","text":"Doctor Doom"}]}');
}])