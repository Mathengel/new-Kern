console.log("textWork model loaded...")

var mongoose = require('mongoose');

var TextSchema = new mongoose.Schema({
    title: String,
    date_created: String,
    small: String,
    large: String,
    phrase: String,
    keywords: String,

}, {timestamps: true})

mongoose.model("TextWork", TextSchema);


// var TextSchema = new mongoose.Schema({
//     title: String,
//     date_created: String,
//     small: String,
//     large: String,
//     detail: String,
//     phrase: String,
//     description: String,
//     colors: String,
//     shapes: String,
//
// }, {timestamps: true})
