console.log("animationWork model loaded...")

var mongoose = require('mongoose');

var AnimationSchema = new mongoose.Schema({
    title: String,
    date_created: String,
    source: String,
    thumbnail: String,
    phrase: String,
    description: String,
    colors: String,
    shapes: String,

}, {timestamps: true})

mongoose.model("AnimationWork", AnimationSchema);
