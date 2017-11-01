/////////ARROW KEY SHORTCUTS
app.directive('arrowNavigate',['$document',function($document){
    return{
        restrict:'A',
        link:function(scope){
            $document.bind('keyup',function(e){
                    if(e.keyCode == 37){
                        console.log(scope.currentSlideIndex);
                        scope.currentSlideIndex = (scope.currentSlideIndex < scope.results.length - 1) ? ++scope.currentSlideIndex : 0;
                        scope.$apply();
                        e.preventDefault();
                    }
                    if(e.keyCode == 39){
                        console.log(scope.currentSlideIndex);
                        scope.currentSlideIndex = (scope.currentSlideIndex > 0) ? --scope.currentSlideIndex : scope.results.length - 1;
                        scope.$apply();
                        e.preventDefault();
                    }
            });
        }
    };
}]);


app.controller('textCtrl', ['$scope', 'textFctry', '$routeParams', '$rootScope', '$anchorScroll', '$location', textCtrl])

function textCtrl($scope, textFctry, $routeParams, $rootScope, $anchorScroll, $location){
    console.log('text controller loaded!!!!!!!!')
    console.log('edit controller as well loaded!!!!!!! serving work item#', $routeParams.id)

    ////GRABBING THE RESOURCE FROM SERVER
    function getTexts(){
        console.log("getting texts...");
        textFctry.index (function (response){
            console.log("response from factory.index", response)
            $scope.texts = response.data;
        })
    }
    getTexts();



    ////SCROLL TO
    $scope.goToDiv = function(textName) {
        console.log(textName);
        $location.hash(textName)
        $anchorScroll();
    };

    ////DELETE METHOD FOR ADMIN SIDE LIST
    $scope.delete = function(text){
        console.log('scope.delete method fires for customer', text.title, "id:", text._id)
        textFctry.delete(text, function(response){
            console.log("success callback from textFctry.delete:", response)
            getTexts();
        })
    }


    $scope.singleChosen = false;

    //SELECT One
    $scope.one = function(text){
      $scope.singleChosen = true;
      $scope.single = text;
    }

    //SEARCH TERM hover
    $scope.hover = false;
    $scope.hoverIn = function(text){
      $scope.textDeets = text;
      $scope.hover = true;
    }

    $scope.hoverOut = function(){
      $scope.hover = false;
    }

    //SLIDE DEETS
    $scope.slideDetail = function(text){
      $scope.slideDeets = text;
    }

    //IMAGE FILTER

    $scope.multiFilter = function(text) {
        var match = false;
        var input = $scope.searchTerms;
        var matchCount = 0;

        if(input){
            var terms = input.split(' ');

            terms.forEach(function(term){

                term = term.toLowerCase();

                if( (new RegExp(term).test(text.title.toLowerCase())) ||
                    (new RegExp(term).test(text.keywords))
                ){
                    matchCount += 1;
                }
                if( matchCount == terms.length){
                    match = true;
                }
            });
        } else {
            match = true;
        }
        return match;
    }

    // SORT by phrase or date_created
    $scope.propertyName = 'results.date_created'
    $scope.sortBy = function(propertyName) {
      $scope.propertyName = propertyName;
    };

    // SCOPE WATCH...
    $scope.$watch('results.length', function(){
      if($scope.results){
        $scope.single = $scope.results[0]

        // $scope.$apply();
      }
    })

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

    $scope.prevSlide = function (text) {
      $scope.single = text;
      console.log("prevSlide Pressed: ", text.title)
        $scope.currentSlideIndex = ($scope.currentSlideIndex < $scope.results.length - 1) ? ++$scope.currentSlideIndex : 0;
    };
    $scope.nextSlide = function (text) {
      $scope.single = text;
      console.log("Next Pressed: ", text.title)
        $scope.currentSlideIndex = ($scope.currentSlideIndex > 0) ? --$scope.currentSlideIndex : $scope.results.length - 1;
    };
}
