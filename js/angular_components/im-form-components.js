
var paneMod = angular.module('imFormComponents', []);

paneMod.directive('imDropdown', function(){
	return {
		restrict: 'E',
		scope: {
			data: '=',
		},
		templateUrl: 'im_form_templates/imDropdown.html'
	};
});