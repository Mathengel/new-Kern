app.factory('editFctry', ['$http', editFctry])

function editFctry($http){
    console.log("edit factory loaded!!!.. ")

    return {

        show: function(id, success){
            console.log("editFctry.show fired!!!")
            $http.get('/text/' + id).then(success);
        },

        update: function(text, success){
            console.log("editFctry.update fired!!")
            $http.put('/text/' + text._id, text).then(success);
        }

        // create: function(newText, success){
        //     console.log("textFctry.create fired!!!!", newText)
        //     $http.post('/texts', newText).then(success);
        // },

    }
}
