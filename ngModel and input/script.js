angular.module('ngModelExample', [])
	.controller('CheckboxController', ['$scope', function($scope){
		$scope.booleanValue = true;
		$scope.secondValue = "YES";
	}])
	.controller('ExampleController', ['$scope', function($scope) {
		$scope.example = {
			text: 'guest',
			word: /^\s*\w*\s*$/
		};
	}]);