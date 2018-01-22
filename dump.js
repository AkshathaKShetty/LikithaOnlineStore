/* 
 -----html------------
 <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"></script>
<div ng-app="app" ng-controller="ctrl">
  <input type="text" ng-model="findname" placeholder="Search Name">
  <ul>
    <li ng-repeat="brnd in Brands">
      <label>
        <input type="checkbox" ng-model="brnd.on">{{brnd.brand}}
      </label>
    </li>
  </ul>
  <ul>
    <li ng-repeat="stu in students | filter:{u_name: findname} | customFilter:(Brands|filter:{on:true})">
      <strong>Name :{{stu.name}}</strong> ({{stu.brand}})
    </li>
  </ul>
</div>
---------------JS----------
angular.module('app', [])
  .controller('ctrl', function($scope) {
    $scope.Brands = [{
      brand: "Nokia",
      on: false
    }, {
      brand: "APPLE",
      on: false
    }, {
      brand: "Vivo",
      on: false
    }];
    $scope.students = [{
    "name" : "iPhone 7",
    "model" : "abc",
    "Cost" : 54999,
    "capacity" : 128,
    "modelNumber" : "W77E",
    "screenSize" : "4.7inch",
    "color" : "Black",
    "brand" : "APPLE",
    "processor" : "",
    "imgSrc" : "../IMAGES/iPhone7.jpg"
},
{
    "name" : "iPhone 6",
    "model" : "abc",
    "Cost" : 36999,
    "capacity" : 32,
    "modelNumber" : "W77E",
    "screenSize" : "4.7inch",
    "color" : "Rose Gold",
    "brand" : "APPLE",
    "processor" : "",
    "imgSrc" : "../IMAGES/iphone6.jpg"
},
{
    "name" : "Nokia 6",
    "model" : "abc",
    "Cost" : 13000,
    "capacity" : 4,
    "modelNumber" : "W77E",
    "screenSize" : "4.7inch",
    "color" : "Black",
    "brand" : "Nokia",
    "processor" : "",
    "imgSrc" : "../IMAGES/nokia6.jpg"
},
{
    "name" : "iPhone 7s plus",
    "model" : "abc",
    "Cost" : 60000,
    "capacity" : 64,
    "modelNumber" : "W77E",
    "screenSize" : "4.7inch",
    "color" : "Silver",
    "brand" : "APPLE",
    "processor" : "",
    "imgSrc" : "../IMAGES/iphone6.jpg"
}];
  })
  .filter('customFilter', function() {
    return function(input, brnds) {
      if(!brnds || brnds.length === 0) return input;
      var out = [];
      angular.forEach(input, function(item) {
        angular.forEach(brnds, function(brnd) {
          if (item.brand === brnd.brand) {
            out.push(item);
          }
        });
      });
      return out;
    }
  });
 */

/*
 * ----price------
 * <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"></script>
<div ng-app="app" ng-controller="ctrl">
  <input type="text" ng-model="findname" placeholder="Search Name">
  <ul>
    <li ng-repeat="mrp in Prices">
      <label>
        <input type="checkbox" ng-model="mrp.on">{{mrp.price}}
      </label>
    </li>
  </ul>
  <ul>
    <li ng-repeat="stu in students | filter:{u_name: findname} | customFilter:(Prices|filter:{on:true})">
      <strong>Name :{{stu.name}}</strong> ({{stu.Cost}})
    </li>
  </ul>
</div>




angular.module('app', [])
  .controller('ctrl', function($scope) {
    $scope.Prices = [{
      price: "Below 10k",
      on: false
    }, {
      price: "above 10k",
      on: false
    }, {
      price: "Vivo",
      on: false
    }];
    $scope.students = [{
    "name" : "iPhone 7",
    "model" : "abc",
    "Cost" : 54999,
    "capacity" : 128,
    "modelNumber" : "W77E",
    "screenSize" : "4.7inch",
    "color" : "Black",
    "brand" : "APPLE",
    "processor" : "",
    "imgSrc" : "../IMAGES/iPhone7.jpg"
},
{
    "name" : "iPhone 6",
    "model" : "abc",
    "Cost" : 36999,
    "capacity" : 32,
    "modelNumber" : "W77E",
    "screenSize" : "4.7inch",
    "color" : "Rose Gold",
    "brand" : "APPLE",
    "processor" : "",
    "imgSrc" : "../IMAGES/iphone6.jpg"
},
{
    "name" : "Nokia 6",
    "model" : "abc",
    "Cost" : 13000,
    "capacity" : 4,
    "modelNumber" : "W77E",
    "screenSize" : "4.7inch",
    "color" : "Black",
    "brand" : "Nokia",
    "processor" : "",
    "imgSrc" : "../IMAGES/nokia6.jpg"
},
{
    "name" : "iPhone 7s plus",
    "model" : "abc",
    "Cost" : 60000,
    "capacity" : 64,
    "modelNumber" : "W77E",
    "screenSize" : "4.7inch",
    "color" : "Silver",
    "brand" : "APPLE",
    "processor" : "",
    "imgSrc" : "../IMAGES/iphone6.jpg"
}];
  })
  .filter('customFilter', function() {
    return function(input, mrps) {
      if(!mrps || mrps.length === 0) return input;
      var out = [];
      angular.forEach(input, function(item) {
        angular.forEach(mrps, function(mrp) {
          if (item.Cost < 20000 && mrp.price == "Below 10k") {
            out.push(item);
          }
          else if(item.Cost > 50000 && mrp.price == "above 10k") {
            out.push(item);
          }
        });
      });
      return out;
    }
  });
 */
