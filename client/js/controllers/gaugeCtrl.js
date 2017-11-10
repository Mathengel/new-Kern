/////////ARROW KEY SHORTCUTS
app.directive('arrowNavigateGauge',['$document',function($document){
    return{
        restrict:'A',
        link:function(scope){
            $document.bind('keyup',function(e){
                    if(e.keyCode == 37){
                        console.log(scope.currentSlideIndexGauge, "left");
                        scope.currentSlideIndexGauge = (scope.currentSlideIndexGauge > 0) ? --scope.currentSlideIndexGauge : scope.gauges.length - 1;
                        console.log("moved left?", scope.currentSlideIndexGauge)
                        scope.$apply();
                        e.preventDefault();
                    }
                    if(e.keyCode == 39){
                        console.log(scope.currentSlideIndexGauge, "right");
                        scope.currentSlideIndexGauge = (scope.currentSlideIndexGauge < scope.gauges.length - 1) ? ++scope.currentSlideIndexGauge : 0;
                        console.log("moved right?", scope.currentSlideIndexGauge)
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

    $scope.singleChosenGauge = false;

    //SELECT One
    $scope.startSliderAtIndex = function(index){
      $scope.singleChosenGauge = true;
      $scope.currentSlideIndexGauge = index;
    //   $scope.gaugeIndex = index
    //   $scope.singleGauge = $scope.gauges[index];
    //   console.log("chosen gauge", gauge.title, $scope.singleGauge, $scope.singleChosenGauge)
    console.log("this is the index of the gauge were pressing?", index, "corresponding gauge is?", $scope.gauges[index])
    }

    $scope.hideSlider = function(){
        $scope.singleChosenGauge = false;
        console.log("hiding slider")
    }
    //IMAGE CAROUSEL

    //sets the current index to 0, the start
    // $scope.currentSlideIndexGauge = $scope.gaugeIndex;

    //allows us to change the index by passing this function a new index
    $scope.setCurrentSlideIndexGauge = function (index) {
        $scope.currentSlideIndexGauge = index;
    };
    //returns a boolean value as to whether the current index matches whatever we pass this function
    $scope.isCurrentSlideIndexGauge = function (index) {
        return $scope.currentSlideIndexGauge === index;
    };

    $scope.prevSlideGauge = function () {
        console.log($scope.currentSlideIndexGauge, "left");
        $scope.currentSlideIndexGauge = ($scope.currentSlideIndexGauge > 0) ? --$scope.currentSlideIndexGauge : $scope.gauges.length - 1;
        console.log("moved left?", $scope.currentSlideIndexGauge)

    };
    $scope.nextSlideGauge = function () {
        console.log($scope.currentSlideIndexGauge, "right");
        $scope.currentSlideIndexGauge = ($scope.currentSlideIndexGauge < $scope.gauges.length - 1) ? ++$scope.currentSlideIndexGauge : 0;
        console.log("moved right?", $scope.currentSlideIndexGauge)
    };


}
