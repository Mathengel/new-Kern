console.log("gaugeWork model loaded...")

var mongoose = require('mongoose');

var GaugeSchema = new mongoose.Schema({
    title: String,
    image: String,
    dimensions: String,
    description: String,
    materials: String,
    
}, {timestamps: true})

mongoose.model("GaugeWork", GaugeSchema);