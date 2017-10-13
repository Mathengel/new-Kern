console.log("Admin model loaded...")

var mongoose = require('mongoose');

var AdminSchema = new mongoose.Schema({
    adminName: String,
    password: {type: String, select: false},

}, {timestamps: true})

mongoose.model("Admin", AdminSchema);
