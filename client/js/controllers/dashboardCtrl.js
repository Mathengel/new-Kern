app.controller('dashboardCrtl', ['$scope', dashboardCrtl])

function dashboardCrtl($scope){
    console.log('dashboard controller loaded!!!!!!!!')

    function generateRandom(){
        var flip = Math.random() * 10;
        if (flip > 5) {
            $scope.coin = false;
            console.log(flip);
        }
        else {
            $scope.coin = true;
            console.log(flip);
        }
    }
    generateRandom();
}
