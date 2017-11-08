console.log("GaugeWorks controller loaded...")
var mongoose = require('mongoose');
var GaugeWork = mongoose.model('GaugeWork');


module.exports = {

    index: function(req, res){
        console.log('getting from /GaugeWorks')
        GaugeWork.find({}, function(err, GaugeWorks){
            if(err){
                console.log(err)
                res.status(400).json(err);
            }
            res.json(GaugeWorks);
        })
    },

    show: function(req, res){
        console.log('showing from gaugeworks', req.params.id)
        GaugeWork.findById(req.params.id, function(err, gaugeWork){
            if(err){
                console.log(err)
                res.status(400).json(err);
            }
            console.log(gaugeWork)
            res.json(gaugeWork)
        })
    },

    update: function(req, res){
        console.log('updating from gaugeworks', req.params.id)
        GaugeWork.findOneAndUpdate({_id: req.params.id}, req.body, function(err, gaugeWork){
            if(err){
                res.status(400).json(err);
            }
                res.json(gaugeWork);
        })
    },

    delete: function(req, res){
        console.log('deleting from /gauges/'+ req.params.id)
        GaugeWork.remove({_id: req.params.id}, function(err, gauge){
            if(err){
                res.status(400).json(err);
            }
            res.json(gauge);
        })
    },
    // create: function(req, res){
    //     console.log('posting to /GaugeWorks', req.body)
    //     GaugeWork.create(req.body, function(err, GaugeWork){
    //         if(err){
    //             res.status(400).json(err);
    //         }
    //         res.json(GaugeWork);
    //     })
    // }
}
