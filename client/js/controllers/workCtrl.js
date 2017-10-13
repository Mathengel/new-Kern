app.controller('workCtrl', ['$scope', 'workFctry', workCtrl])

function workCtrl($scope, workFctry){
    console.log('work controller loaded!!!!!!!!')

    function checkForAdmin(){
        workFctry.create({title:"AdminCheck"}, function(response){
            console.log("response about admin check", response)
        })
    }
    checkForAdmin();

    // function getWorks(){
    //     console.log("getting works...");
    //     workFctry.index (function (response){
    //         console.log("response from factory.index", response)
    //         $scope.works = response.data;
    //     })
    // }
    // getTexts();

    $scope.create = function(newWork){
        console.log('scope.create method fires!!!', newWork)
        workFctry.create(newWork, function (response){
            console.log("response from workFctry.create, but from controller call", response)
        })

        $scope.newWork = {};
    }


}
