angular.module('ngModelExample', [])
	.controller('CheckboxController', ['$scope', function($scope){
		$scope.booleanValue = true;
		$scope.secondValue = "YES";
	}]);