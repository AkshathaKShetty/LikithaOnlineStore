app.controller('loginctrl', function($scope, $location){
    
    $scope.submit = function(){
        var uname = $scope.username;
        var password = $scope.password;
        if($scope.username == 'user' && $scope.password == 'user'){
            $location.path('/home');
        }
        else {
            alert('Invalid Credentials');
        }
    };
    /*$scope.submit1 = function(){
       
                   $location.path('/logout');

    };*/
});

