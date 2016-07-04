angular.module('scopeExample', [])
  .controller('ScopeController', ['$scope', '$rootScope', '$timeout', function($scope, $rootScope, $timeout) {
    // $new(isolate, parent);
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



    // $watch(watchExpression, listener, [objectEquality]);
    var scope = $rootScope;
    scope.name = 'misko';
    scope.counter = 0;

    console.log(scope.counter);
    scope.$watch('name', function(newValue, oldValue) {
      scope.counter = scope.counter + 1;
    });

    $timeout(function() {
      scope.name = 'Bowen';
      console.log('counter:', scope.counter); // 1
    }, 200);
    console.log(scope.counter); // still show 0, since this line of code is excuted immidiately


    // Using a function as a watchExpression
    scope.food;
    scope.foodCounter = 0;

    console.log(scope.foodCounter);
    scope.$watch('food', function(newValue, oldValue) {
      if (newValue !== oldValue) {
        scope.foodCounter = scope.foodCounter + 1;
      }
    });

    $timeout(function() {
      scope.food = 'Bowen';
      console.log('foodCounter:', scope.counter); // 2
    }, 200);



    // $watchGroup(watchExpressions, listener);



    // $watchCollection(obj, listener);
    $scope.names = ['igor', 'matias', 'misko', 'james'];
    $scope.dataCount = 4;

    $scope.$watchCollection('names', function(newNames, oldNames) {
      $scope.dataCount = newNames.length;
      console.log($scope.dataCount);
    });

    $timeout(function() {
      $scope.names[4] = 'bowen';
      console.log($scope.dataCount); // 4...  ??
    }, 300);



    // $digest();
    // Processes all of the watchers of the current scope and its children.
    


    // $destroy();
    // Removes the current scope (and all of its children) from the parent scope.
    // Removal implies that calls to $digest() will no longer propagate to the current scope and its children. Removal also implies that the current scope is eligible for garbage collection.



    // $eval([expression], [locals]);
    var scope_eval = $rootScope;
    scope_eval.a = 1;
    scope_eval.b = 2;

    console.log('a+b:',scope_eval.$eval('a+b'));
    console.log('a+b:',scope_eval.$eval(function(scope_eval) {
    	return scope_eval.a + scope_eval.b;
    }));


    // $applyAsync([exp]);

    // $on(name, listener);

    // $emit(name, args);

    // $broadcast(name, args);


    // What are Scopes?  https://docs.angularjs.org/guide/scope
  }]);



























