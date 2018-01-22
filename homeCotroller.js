app.controller('homeController', function($scope, $http, $location,$rootScope){
    
    $http.get('../JSON/products.json')
       .then(function(result){
          $scope.products = result.data;                
        });
        
    
    $scope.Colors = [{
      color: "Black",
      on: false
    }, {
      color: "Silver",
      on: false
    }, {
      color: "Rose Gold",
      on: false
    }];
    
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

    $scope.Prices = [{
      price: "Below 20k",
      on: false
    }, {
      price: "20 to 30k",
      on: false
    }, {
      price: "30 to 40k",
      on: false
    }, {
      price: "above 40k",
      on: false
    }];

    $scope.Size = [{
      size: "4.7inch",
      on: false
    }, {
      size: "5inch",
      on: false
    }, {
      size: "5.5inch",
      on: false
    }];

    $scope.submit = function(){
       
                   $location.path('/home');

    };

    $scope.selIdx= -1;
    $rootScope.set;
    $rootScope.selprods;

	$scope.selProd=function(product,idx){
                
		$scope.selectedProd=product;
		$scope.selIdx=idx;$rootScope.set = $scope.selIdx;
                $rootScope.selprods = $scope.selectedProd;
                $location.path('/viewProd');
	};

	/*$scope.isSelProd=function(product){
                if($rootScope.selprods==product){
		return true;
            }  
	};*/
    
})
.filter('customColor', function() {
    return function(input, clrs) {
      if(!clrs || clrs.length === 0) return input;
      var out = [];
      angular.forEach(input, function(item) {
        angular.forEach(clrs, function(clr) {
          if (item.color === clr.color) {
            out.push(item);
          }
        });
      });
      return out;
    }
  })
  .filter('customBrand', function() {
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
  })
  .filter('customPrice', function() {
    return function(input, mrps) {
      if(!mrps || mrps.length === 0) return input;
      var out = [];
      angular.forEach(input, function(item) {
        angular.forEach(mrps, function(mrp) {
          if (item.Cost < 20000 && mrp.price == "Below 20k") {
            out.push(item);
          }
          else if((item.Cost > 20000 && item.Cost < 30000) && mrp.price == "20 to 30k"){
            out.push(item);
          }
          else if((item.Cost > 30000 && item.Cost < 40000) && mrp.price == "30 to 40k"){
            out.push(item);
          }
          else if(item.Cost > 40000 && mrp.price == "above 40k"){
            out.push(item);
          }
        });
      });
      return out;
    }
  })
  .filter('customSize', function() {
    return function(input, sizs) {
      if(!sizs || sizs.length === 0) return input;
      var out = [];
      angular.forEach(input, function(item) {
        angular.forEach(sizs, function(siz) {
          if (item.screenSize === siz.size) {
            out.push(item);
          }
        });
      });
      return out;
    }
  });
