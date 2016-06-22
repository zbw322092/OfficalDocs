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
	}])
	.controller('InputDataController', ['$scope', function($scope) {
		$scope.dateExample = {
			value: new Date(2013, 9, 22)
		};
	}])
	.controller('InputRadioController', ['$scope', function($scope) {
		$scope.color = {
			name: 'blue'
		};
		$scope.specialValue = {
			"id": "12345",
			"value": "green"
		};
	}]);