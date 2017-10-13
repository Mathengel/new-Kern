console.log("Admin controller loaded...")
var mongoose = require('mongoose');
var Admin = mongoose.model('Admin');


module.exports = {

    register: function(req, res){

        var admin = new Admin(req.body);
        admin.save(function(err, admin){
            if(err){
                res.status(400).json(err);
            }else{
                req.session.admin = admin._id;
                res.sendStatus(200);
            }
        })
    },
    login: function(req, res){

        //Instead has the password then assign it to this
        var password = req.body.password;

        Admin.findOne({adminName:req.body.adminName, password:password}, function(err, admin){
            if(err){
                return res.status(400).json(err)
            }
            else if(admin){
                req.session.admin = admin._id;
                console.log(req.session.admin)
                res.sendStatus(200)
            }
            else{
                res.status(400).send({data:"No Admin Here!"})
            }
        })
    },
    logout: function(req, res){
        req.session.destroy();
        res.sendStatus(200);
    }
    // get: function(req, res){
    //
    // }
}
