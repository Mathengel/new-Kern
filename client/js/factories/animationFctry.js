app.factory('animationFctry', ['$http', animationFctry])

function animationFctry($http){
    console.log("text factory loaded!!!.. ")

    return {

        index: function(success){
            console.log("animationFctry.index fired!!!")
            $http.get('/animations').then(success);
        },

        show: function(animation, success){
            console.log("animationFctry.show fired!!!", animation)
            $http.get('/animation/'+animation._id).then(success)
        }

        // create: function(newText, success){
        //     console.log("animationFctry.create fired!!!!", newText)
        //     $http.post('/texts', newText).then(success);
        // },

    }
}
