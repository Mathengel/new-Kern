app.controller('editCtrl', ['$scope', 'editFctry', '$routeParams', editCtrl])

function editCtrl($scope, editFctry, $routeParams){
    console.log('edit controller as well loaded!!!!!!! serving work item#', $routeParams.id)

    ///GET TEXT TO EDIT METHOD FOR ADMIN SIDE
    function getTextToEdit(){
        console.log("getting text to edit");
        editFctry.show ($routeParams.id, function (response){
            console.log("response from editFctry.show", response.data)
            $scope.textToEdit = response.data
        })
    }
    getTextToEdit();

    ////UPDATE METHOD FOR ADMIN SIDE
    $scope.update = function(textToEdit){
        console.log('update method firing for Text', textToEdit)
        editFctry.update(textToEdit, function(response){
            console.log("success", response)
        })
    }
}
