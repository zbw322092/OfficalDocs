angular.module('orderByExample', [])
  // example 1
  .controller('ExampleController', function($scope) {
    $scope.friends = [
      { name: 'John', phone: '555-1212', age: 10 },
      { name: 'Mary', phone: '555-9876', age: 19 },
      { name: 'Mike', phone: '555-4321', age: 21 },
      { name: 'Adam', phone: '555-5678', age: 35 },
      { name: 'Julie', phone: '555-8765', age: 29 }
    ];

    $scope.propertyName = 'age';
    $scope.reverse = true;

    $scope.sortBy = function(propertyName) {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };


  })

.filter('filter', function() {
  return function(input, letter) {
    var input = input || '';
    if (input.indexOf(letter) == -1) {
      return;
    } else {
      return input;
    }
  };
})


// example 2
// using filters in controllers, services and directives
// for this, inject a dependency with the name <filterName>Filter
// into your controller/service/directive. E.g. a filter called number is injected by using 
// the dependency numberFilter. The injected argument is a function that takes the value to format
// as first argument, filter parameters starting with the second argument.

// using a filter in a view template will reevaluate the filter on every digest, which can be 
// costly if the array is big.
// The example below therefore calls the filter directly in the controller. By this, the controller 
// is able to call the filter only when needed (e.g. when the data is loaded from the backend or the filter expression is changed).
.controller('FilterController', ['filterFilter', function(filterFilter) {
  this.array = [
    { name: 'Tobias' },
    { name: 'Jeff' },
    { name: 'Brian' },
    { name: 'Igor' },
    { name: 'James' },
    { name: 'Brad' }
  ];

  this.letter = 'r';

  var len = this.array.length;
  var array = this.array;
  var letter = this.letter;

  function filterNames() {
    var names = [];
    for (var i = 0; i < len; i++ ) {
      if (filterFilter(array[i].name, letter)) {
        names.push(filterFilter(array[i].name, letter));        
      }
    }
    return names;
  };

  
  if (filterNames().length !== 0) {
    return this.filteredNames = filterNames();
  } else {
    console.log('not ok');
    return this.filteredNames = ["No one"];
  }


}]);










































