
angular.module('panel', [])

.directive('panel', function(){
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			header: '@',
			color: '@'
		},
		templateUrl: 'angular_templates/panel.html',
		link: function(scope, element, attrs){
			if(!scope.color){
				scope.color = 'panel-default';
			}
		}
	};
})