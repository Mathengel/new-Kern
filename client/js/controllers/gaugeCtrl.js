/////////ARROW KEY SHORTCUTS
app.directive('arrowNavigate',['$document',function($document){
    return{
        restrict:'A',
        link:function(scope){
            $document.bind('keyup',function(e){
                    if(e.keyCode == 37){
                        console.log(scope.currentSlideIndex);
                        scope.currentSlideIndex = (scope.currentSlideIndex < scope.gauges.length - 1) ? ++scope.currentSlideIndex : 0;
                        scope.$apply();
                        e.preventDefault();
                    }
                    if(e.keyCode == 39){
                        console.log(scope.currentSlideIndex);
                        scope.currentSlideIndex = (scope.currentSlideIndex > 0) ? --scope.currentSlideIndex : scope.gauges.length - 1;
                        scope.$apply();
                        e.preventDefault();
                    }
            });
        }
    };
}]);


app.controller('gaugeCtrl', ['$scope', 'gaugeFctry', '$routeParams', '$rootScope', '$anchorScroll', '$location', gaugeCtrl])

function gaugeCtrl($scope, gaugeFctry, $routeParams, $rootScope, $anchorScroll, $location){
    console.log('gauge controller loaded!!!!!!!!')
    console.log('edit controller as well loaded!!!!!!! serving work item#', $routeParams.id)

    ////GRABBING THE RESOURCE FROM SERVER
    function getGauges(){
        console.log("getting gauges...");
        gaugeFctry.index (function (response){
            console.log("response from factory.index", response)
            $scope.gauges = response.data;
        })
    }
    getGauges();


    ////SCROLL TO
    $scope.goToDiv = function(gaugeName) {
        console.log(gaugeName);
        $location.hash(gaugeName)
        $anchorScroll();
    };

    $scope.singleChosen = false;

    //SELECT One
    $scope.one = function(gauge){
      $scope.singleChosen = true;
      $scope.single = gauge;
    }

    //IMAGE CAROUSEL

    //sets the current index to 0, the start
    $scope.currentSlideIndex = 0;

    //allows us to change the index by passing this function a new index
    $scope.setCurrentSlideIndex = function (index) {
        $scope.currentSlideIndex = index;
    };
    //returns a boolean value as to whether the current index matches whatever we pass this function
    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentSlideIndex === index;
    };

    $scope.prevSlide = function (gauge) {
      $scope.single = gauge;
      console.log("prevSlide Pressed: ", gauge.title)
        $scope.currentSlideIndex = ($scope.currentSlideIndex < $scope.gauges.length - 1) ? ++$scope.currentSlideIndex : 0;
    };
    $scope.nextSlide = function (gauge) {
      $scope.single = gauge;
      console.log("Next Pressed: ", gauge.title)
        $scope.currentSlideIndex = ($scope.currentSlideIndex > 0) ? --$scope.currentSlideIndex : $scope.gauges.length - 1;
    };


}
