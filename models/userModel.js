const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    DOB: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    }


},{timestamps: true})



module.exports = ('User', UserSchema)