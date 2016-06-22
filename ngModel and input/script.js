angular.module('ngModelExample', [])
	.controller('CheckboxController', ['$scope', function($scope){
		$scope.booleanValue = true;
		$scope.secondValue = "YES";
	}])
	.controller('InputTextController', ['$scope', function($scope) {
		$scope.example = {
			text: 'guest',
			word: /^\s*\w*\s*$/
		};
	}])
	.controller('InputController', ['$scope', function($scope) {
		$scope.inputExample = {
			name: 'guest',
			last: 'visitor'
		};
	}]);