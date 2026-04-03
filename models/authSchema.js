const mongoose = require("mongoose")

const authSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
        required: false,
        default: ""
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    otp:{
        type: String,
        required: false
    },
    otpExpiry:{
        type: Date
    }
})



module.exports = mongoose.model("user", authSchema)