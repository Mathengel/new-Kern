app.controller('adminCtrl', ['$scope', '$location', 'adminFctry', adminCtrl])

function adminCtrl($scope, $location, adminFctry){
    console.log('work controller loaded!!!!!!!!')


    $scope.register = function(newAdmin){
        console.log('scope.register method fires!!!', newAdmin)
        adminFctry.register(newAdmin, function (response){
            console.log("response from adminFctry.create, but from controller call", response)
        })

        $scope.newAdmin = {};
    }
    $scope.login = function(admin){
        console.log('scope.login method fires!!', admin)
        adminFctry.login(admin, function(response){
            console.log("response from adminFctry on login", response)
            $location.path('add');
        })
    }
}
