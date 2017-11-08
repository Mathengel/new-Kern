app.controller('gaugeEditCtrl', ['$scope', 'editFctry', '$routeParams', gaugeEditCtrl])

function gaugeEditCtrl($scope, editFctry, $routeParams){
    console.log('gauge edit controller as well loaded!!!!!!! serving work item#', $routeParams.id)

    ///GET TEXT TO EDIT METHOD FOR ADMIN SIDE
    function getGaugeToEdit(){
        console.log("getting gauge to edit");
        editFctry.showGauge ($routeParams.id, function (response){
            console.log("response from editFctry.show", response.data)
            $scope.gaugeToEdit = response.data
        })
    }
    getGaugeToEdit();

    ////UPDATE METHOD FOR ADMIN SIDE
    $scope.update = function(gaugeToEdit){
        console.log('update method firing for gauge', gaugeToEdit)
        editFctry.updateGauge(gaugeToEdit, function(response){
            console.log("success", response)
        })
    }
}
