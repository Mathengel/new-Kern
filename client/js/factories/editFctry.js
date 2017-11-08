app.factory('editFctry', ['$http', editFctry])

function editFctry($http){
    console.log("edit factory loaded!!!.. ")

    return {

        showText: function(id, success){
            console.log("editFctry.show fired!!!")
            $http.get('/text/' + id).then(success);
        },

        updateText: function(text, success){
            console.log("editFctry.update fired!!")
            $http.put('/text/' + text._id, text).then(success);
        },

        showGauge: function(id, success){
            console.log("editFctry.show fired!!!")
            $http.get('/gauge/' + id).then(success);
        },

        updateGauge: function(gauge, success){
            console.log("editFctry.update fired!!")
            $http.put('/gauge/' + gauge._id, gauge).then(success);
        }

        // create: function(newText, success){
        //     console.log("textFctry.create fired!!!!", newText)
        //     $http.post('/texts', newText).then(success);
        // },

    }
}
