app.factory('adminFctry', ['$http', adminFctry])

function adminFctry($http){
    console.log("admin factory loaded!!!.. ")

    return {
        register: function(newAdmin, success){
            console.log("adminFctry.create fired!!!!", newAdmin)
            $http.post('/register', newAdmin).then(success);
        },
        login: function(admin, success){
            console.log("logging in", admin)
            $http.post('/login', admin).then(success);
        }

    }
}
