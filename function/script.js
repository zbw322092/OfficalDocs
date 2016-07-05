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
  $scope.users = angular.extend({ 'a': 'ok' }, $scope.user1, $scope.user2, $scope.user3);
})

.controller('ForEachController', function($scope) {
  var values = {
    'a': 'Bowen1',
    'b': 'Bowen2',
    'c': 'Bowen3'
  };
  $scope.log = [];

  // 1. 如果将angular.forEach()赋值给一个变量，返回的是此例中的values,而不是log；
  // 2. forEach中的函数，默认的变量接收顺序是value,key,obj。如果你只输入一个变量，即使形参输入的是key，也
  // 默认为是对象中的value。
  // 3. 即使在forEach中的functio里面加return，出来的结果还是values。
  angular.forEach(values, function(value, key) {
    this.push(key);
  }, $scope.log);

  // array原生的方法forEach()的应用
  // var oo = [1, 2, 3, 4, 5];
  // var qq = [];
  // var pp = oo.forEach(function(value, index) {
  //   qq.push(value);
  // });
  // console.log(pp); // undefined
  // console.log(qq); // [1,2,3,4,5]

})

.controller('FromJsonController', function($scope) {
  $scope.jsonExample = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

  $scope.jsonValue = angular.fromJson($scope.jsonExample);
  // console.log(typeof $scope.jsonValue); // object
  // console.log(typeof $scope.jsonExample); // string

  $scope.typeOrigin = typeof $scope.jsonExample;
  $scope.typeConvert = typeof $scope.jsonValue;
})

.controller('IdentityExample', function($scope) {
  function getResult(fn, input) {
    return (fn || angular.identity)(input);
  }

  console.log(getResult(function(n) {
    return n * 2 }, 21));
  console.log(getResult(null, 21));
  console.log(getResult(undefined, 21));
})

.controller('CompareExample', function($scope) {
  // angular.copy is deep copy
  var o1 = {
    name: 'bowen',
    age: 23,
    other: {}
  }
  var o2 = angular.copy(o1);
  console.log(o2);
  console.log(o1 === o2); // false
  console.log(o1 == o2); // false
  console.log(o1.name === o2.name); // true
  console.log(o1.other === o2.other); // false

  var oo1 = [1, 2, 3, 4];
  var oo2 = angular.copy(oo1);

  console.log(oo2);
  console.log(oo1 === oo2); // false
  console.log(oo1[0] === oo2[0]); // true

  var s = 'it is a string';
  var ss = angular.copy(s);
  console.log(ss);
  console.log(s === ss); // true

  // angular.extend is shallow copy
  var src1 = {
    name: 'bowen',
    age: 23,
    other: {}
  },
  src2 = {
    name: 'huihui',
    height: 160,
  },
  dst = {};
  angular.extend(dst, src1, src2);

  console.log(dst);
  console.log(dst.name === src2.name); // true
  console.log(dst.other === src1.other); // true

  var src1 = { skill: { name: 'Java', experience: 20, certified: true } };
  var src2 = { skill: { name: 'JavaScript', experience: 10 } };
  var dst = {};

  console.log(angular.extend(dst, src1, src2)); // certified is lost in this case, because 
  // angular extend method dose not recursively copying the individual properties inside 
  // the skill value.
  console.log(dst.skill);
  console.log(dst.skill === src2.skill);
  console.log(dst.skill.name === src2.skill.name);




  // angular.merge is deep copy
  var src1 = {
    name: 'bowen',
    age: 23,
    other: {}
  },
  src2 = {
    name: 'huihui',
    height: 160
  },
  dst = {}; 

  angular.merge(dst, src1, src2);
  console.log(dst);

  var src3 = {
    person:
    {
      name: 'bowen',
      age: 23,
      other: {}
    }
  },
  src4 = {
    person:
    {
      name: 'huihui',
      height: 160      
    }
  },
  dst2 = {};
  console.log(angular.merge(dst2, src3, src4));
  console.log(dst2.person.name === src4.person.name); // true
  console.log(dst2.person.other === src3.person.other); // false


  var src5 = {
    person:
    {
      name: 'bowen',
      age: 23,
      other: {}
    }
  },
  src6 = {
    person2:
    {
      name: 'huihui',
      height: 160      
    }
  },
  dst3 = {};
  // console.log(angular.extend(dst3, src5, src6)); // the rusult looks the same as merge in this 
  // // situation, however, extend is shallow copy, so the result of next link of code is true.
  // console.log(dst3.person.other === src5.person.other); // true
  console.log(angular.merge(dst3, src5, src6));
  console.log(dst3.person.other === src5.person.other); // false


})

.controller('ToJsonController', function($scope) {
  $scope.jsonString = 
    '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 

  $scope.jsonFormat = angular.toJson($scope.jsonString, true);

  console.log(typeof $scope.jsonString);
  console.log(typeof $scope.jsonFormat);
});











