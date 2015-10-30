angular.module('myApp', ['imFormComponents', 'panel'])

.controller('imFormCtrl', ['$scope', function($scope){
	$scope.dropdata = angular.fromJson('{"name":"villain",display":"Best Villain","required":true,"selected":"","options":[{"value":"","text":"-- Select --"},{"value":"1","text":"Darth Vader"},{"value":"2","text":"The Joker"},{"value":"3","text":"Doctor Doom"}]}');
	$scope.textdata = angular.fromJson('{"name":"lastname","display":"Peron\'s Last Name","required":true}');
}])