app.controller('animationCtrl', ['$scope', 'animationFctry', animationCtrl])

function animationCtrl($scope, animationFctry){
    console.log('animaiton controller loaded!!!!!!!!')

    function getAnimations(){
        console.log("getting animations...");
        animationFctry.index (function (response){
            console.log("response from factory.index", response)
            $scope.animations = response.data;
        })
    }
    getAnimations();

    // SORT by phrase or date_created
    // $scope.propertyName = 'results.date_created'
    // $scope.sortBy = function(propertyName) {
    //   $scope.propertyName = propertyName;
    // };
    $scope.clicked = 0;

    $scope.one = function(animation){
      if($scope.clicked === true){
        $scope.clicked = false;
      } else {
        $scope.clicked = true;
      }
      console.log("one was clicked", animation._id)
      animationFctry.show (animation, function (response){
        console.log("response from factory.index", response)
        $scope.single = response.data;
        $scope.apply();
      })
    }

    // $scope.create = function(newText){
    //     console.log('scope.create method fires!!!', newText)
    //     textFctry.create(newText, function (response){
    //         console.log("response from textFctry.create, but from controller call", response)
    //     })
    //     getTexts();
    //     $scope.newText = {};
    // }
}
