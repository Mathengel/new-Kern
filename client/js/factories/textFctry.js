app.factory('textFctry', ['$http', textFctry])

function textFctry($http){
    console.log("text factory loaded!!!.. ")

    return {

        index: function(success){
            console.log("textFctry.index fired!!!")
            $http.get('/texts').then(success);
        },

        delete: function(text, success){
            console.log("textFctry.delete fired!!!", text.title)
            $http.delete('/texts/'+text._id).then(success);
        },

        show: function(id, success){
            console.log("textFctry.show fired!!!")
            $http.get('/text/' + id).then(success);
        }

        // create: function(newText, success){
        //     console.log("textFctry.create fired!!!!", newText)
        //     $http.post('/texts', newText).then(success);
        // },

    }
}
