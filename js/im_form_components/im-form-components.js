
angular.module('imFormComponents', [])

// Represents a dropdown expecting JSON in a specific format
.directive('imDropdown', function(){
	return {
		restrict: 'E',
		scope: {
			data: '=',
		},
		templateUrl: 'im_form_templates/imDropdown.html'
	};
})


.directive('imTextbox', function(){
	return {
		restrict: 'E',
		scope: {
			data: '=',
		},
		templateUrl: 'im_form_templates/imTextbox.html'
	};
})