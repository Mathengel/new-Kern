app.factory('gaugeFctry', ['$http', gaugeFctry])

function gaugeFctry($http){
    console.log("gauge factory loaded!!!.. ")

    return {

        index: function(success){
            console.log("gaugeFctry.index fired!!!")
            $http.get('/gauges').then(success);
        },

        delete: function(gauge, success){
            console.log("gaugeFctry.delete fired!!!", gauge.title)
            $http.delete('/gauges/'+gauge._id).then(success);
        },

        show: function(id, success){
            console.log("gaugeFctry.show fired!!!")
            $http.get('/gauge/' + id).then(success);
        }

        // create: function(newText, success){
        //     console.log("gaugeFctry.create fired!!!!", newText)
        //     $http.post('/texts', newText).then(success);
        // },

    }
}
