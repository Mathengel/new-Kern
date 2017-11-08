console.log("gaugeWork model loaded...")

var mongoose = require('mongoose');

var GaugeSchema = new mongoose.Schema({
    title: String,
    date_created: String,
    small: String,
    large: String,
    detail: String,
    dimensions: String,
    description: String,
    materials: String,

}, {timestamps: true})

mongoose.model("GaugeWork", GaugeSchema);
