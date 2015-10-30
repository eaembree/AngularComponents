
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

// Represent a textbox expecting JSON in a specific format
.directive('imTextbox', function(){
	return {
		restrict: 'E',
		scope: {
			data: '=',
		},
		templateUrl: 'im_form_templates/imTextbox.html'
	};
})


// Represent a textarea expecting JSON in a specific format
.directive('imTextarea', function(){
	return {
		restrict: 'E',
		scope: {
			data: '=',
		},
		templateUrl: 'im_form_templates/imTextarea.html'
	};
})


// Represent a checkbox expecting JSON in a specific format
.directive('imCheckbox', function(){
	return {
		restrict: 'E',
		scope: {
			data: '=',
		},
		templateUrl: 'im_form_templates/imCheckbox.html'
	};
})


// Represent a list of checkbox items with a single header expecting JSON in a specific format
.directive('imCheckboxList', function(){
	return {
		restrict: 'E',
		scope: {
			data: '=',
		},
		templateUrl: 'im_form_templates/imCheckboxList.html'
	};
})


// Represent a radio button group with a single header expecting JSON in a specific format
.directive('imRadio', function(){
	return {
		restrict: 'E',
		scope: {
			data: '=',
		},
		templateUrl: 'im_form_templates/imRadio.html'
	};
})