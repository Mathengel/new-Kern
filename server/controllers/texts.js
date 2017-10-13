console.log("TextWorks controller loaded...")
var mongoose = require('mongoose');
var TextWork = mongoose.model('TextWork');


module.exports = {

    index: function(req, res){
        console.log('getting from /TextWorks')
        TextWork.find({}, function(err, TextWorks){
            if(err){
                console.log(err)
                res.status(400).json(err);
            }
            res.json(TextWorks);
        })
    },

    show: function(req, res){
        console.log('showing from textworks', req.params.id)
        TextWork.findById(req.params.id, function(err, textWork){
            if(err){
                console.log(err)
                res.status(400).json(err);
            }
            console.log(textWork)
            res.json(textWork)
        })
    },

    update: function(req, res){
        console.log('updating from textworks', req.params.id)
        TextWork.findOneAndUpdate({_id: req.params.id}, req.body, function(err, textWork){
            if(err){
                res.status(400).json(err);
            }
                res.json(textWork);
        })
    },

    delete: function(req, res){
        console.log('deleting from /texts/'+ req.params.id)
        TextWork.remove({_id: req.params.id}, function(err, text){
            if(err){
                res.status(400).json(err);
            }
            res.json(text);
        })
    },
    // create: function(req, res){
    //     console.log('posting to /TextWorks', req.body)
    //     TextWork.create(req.body, function(err, TextWork){
    //         if(err){
    //             res.status(400).json(err);
    //         }
    //         res.json(TextWork);
    //     })
    // }
}
