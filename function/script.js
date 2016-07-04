// example 1: angular.bootstrap
// var app = angular.module('demo', [])
//   .controller('WelcomeController', function($scope) {
//     $scope.greeting = "Welcome!";
//   });

// 因为在html文件中没有指定ng-app的值，那么这个demo没法bootstrap，所以没有下面这行代码，就只会显示{{greeting}}
// 所以要么在应用中指定ng-app，要么在这里 manually start up angular application.
// 而果如已经在HTML文件中bootstrap了应用，还在此处 manually start up angular application的话，会报错:
// Uncaught Error: [ng:btstrpd] App Already Bootstrapped with this Element '&lt;html ng-app="functionsExample"&gt;'
// angular.bootstrap(document, ['demo']);




// example 2: angular.copy
var app = angular.module('functionsExample', []);
app.controller('CopyController', function($scope) {
	$scope.master = {};
	
	$scope.reset = function() {
		$scope.user = angular.copy($scope.master);
	};

	$scope.save = function() {
		angular.copy($scope.user, $scope.master);
	}

})
.controller('EqualsController', function($scope) {
	$scope.compare = function() {
		return angular.equals($scope.user1, $scope.user2);
	}
})
.controller('ExtendController', function($scope) {
	$scope.users = angular.extend({'a':'ok'}, $scope.user1, $scope.user2, $scope.user3);
});