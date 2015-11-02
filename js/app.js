angular.module('myApp', ['imFormComponents', 'panel'])

.controller('imFormCtrl', ['$scope', function($scope){
	$scope.dropdata = angular.fromJson('{"name":"villain","label":"Best Villain","required":true,"selected":"","options":[{"value":"","display":"-- Select --"},{"value":"1","display":"Darth Vader"},{"value":"2","display":"The Joker"},{"value":"3","display":"Doctor Doom"}]}');
	$scope.textdata = angular.fromJson('{"name":"lastname","label":"Person\'s Last Name","required":true}');
	$scope.textarea = angular.fromJson('{"name":"adventure","label":"Describe your greatest adventure","required":true}');
	$scope.checkboxdata = angular.fromJson('{"name":"vehicle","label":"Do you ride a bike?","display":"Yes, I ride a bike","value":"y","checked":true}');
	$scope.checkboxlistdata = angular.fromJson('{"label":"Which of the following colors do you like?","options": [{"name":"realcolor","display":"Red","value":"red","checked":false},{"name":"realcolor","display":"Blue","value":"blue","checked":true},{"name":"fakecolor","display":"Moodlely","value":"Moodlely","checked":false}]}');
	$scope.radiodata= angular.fromJson('{"name":"cakeorpie","label":"Cake or pie?","required":true,"options":[{"display":"No Preference","value":"nopref","checked":false},{"display":"Cake","value":"cake","checked":false},{"display":"Pie","value":"pie","checked":false}]}');
	console.log($scope.checkboxlistdata)
}])