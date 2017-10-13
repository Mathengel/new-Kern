console.log("AnimationWorks controller loaded...")
var mongoose = require('mongoose');
var AnimationWork = mongoose.model('AnimationWork');


module.exports = {

    index: function(req, res){
        console.log('getting from /AnimationWorks')
        AnimationWork.find({}, function(err, AnimationWorks){
            if(err){
                console.log(err)
                res.status(400).json(err);
            }
            res.json(AnimationWorks);
        })
    },

    show: function(req, res){
      console.log("showing from animations")
      AnimationWork.findOne({_id: req.params.id}, function(err, AnimationWork){
        if(err){
          console.log(err)
          res.status(400).json(err);
        }
        res.json(AnimationWork)
      })
    }

    // create: function(req, res){
    //     console.log('posting to /AnimationWorks', req.body)
    //     TextWork.create(req.body, function(err, TextWork){
    //         if(err){
    //             res.status(400).json(err);
    //         }
    //         res.json(TextWork);
    //     })
    // }
}
