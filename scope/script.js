angular.module('scopeExample', [])
	.controller('ScopeController', ['$scope', '$rootScope', function($scope, $rootScope){
		var parent = $rootScope;
		var child = parent.$new();

		parent.salutation = "Hello";
		console.log(child);
		console.log(child.salutation);

		child.salutation = "World";
		console.log(child.salutation);
		console.log(parent.salutation);

		var child2 = parent.$new(true);
		console.log(child2);
		console.log(child2.salutation);



		var scope = $rootScope;
		scope.name = 'misko';
		scope.counter = 0;

		console.log(scope.counter);
		scope.$watch('name', function(newValue, oldValue) {
			scope.counter = scope + 1;
		});
		console.log(scope.counter);

		// console.log($scope.$$phase);
		scope.$digest();
		// the listener is always called during the first $digest loop after it was registered
		console.log(scope.counter);
	}]);