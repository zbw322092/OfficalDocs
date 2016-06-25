angular.module('scopeExample', [])
  .controller('ScopeController', ['$scope','$rootScope', '$interval', function($scope, $rootScope, $interval) {
    $scope.myPrimitive = 50;
    $scope.myObject = { aNumber: 11 };


    // $interval(function() {
    //   console.log($scope.myPrimitive);
    //   console.log($scope.myObject);
    // }, 2000);
    
    $scope.myArrayOfPrimitives = [11, 22];
    $scope.myArrayOfObjects = [{num: 101}, {num: 202}];

   	// $interval(function() {
   	// 	console.log($scope.myArrayOfPrimitives);
   	// }, 2000);

   	// $interval(function() {
   	// 	console.log($scope.myArrayOfObjects);
   	// }, 2000);
   	
  	$scope.title = "My title";
  	$scope.text = "This is the text of the pane element";

  	$rootScope.showScope = function(e) {
  		console.log(angular.element(e.srcElement).scope());
  	}
  }])
  .directive('pane', function() {
  	return {
  		restrict: 'E',
  		transclude: true,
  		scope: { 
  			title: '@'
  		},
  		template: '<div style="border: 1px solid black;">' +
  			'<div style="background-color: gray">{{ title }}</div>' +
  			'<div ng-transclude><a ng-click="$parent.showScope($event)">show scope</a></div>' +
  			'</div>',
  		link: function(scope, element) {
  			scope.isolate = "I'm the isolate scope";
  		}
  	};
  });








