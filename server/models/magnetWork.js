console.log("magnetWork model loaded...")

var mongoose = require('mongoose');

var MagnetWork = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    dimensions: String,
    materials: String,
    colors: String,
    
}, {timestamps: true})

mongoose.model("MagnetWork", MagnetWork);