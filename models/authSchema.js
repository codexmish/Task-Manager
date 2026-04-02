const mongoose = require("mongoose")

const authSchema = new mongoose.Schema({})


module.exports = mongoose.model("user", authSchema)