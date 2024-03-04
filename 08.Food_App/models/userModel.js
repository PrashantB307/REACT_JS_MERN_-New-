const mongoose = require('mongoose')

// Schema
const userSchema = new mongoose.Schema( {
    username : {
        type : String,
        required : [true, 'User Name is Required']
    },
    email : {
        type : String,
        required : [true, 'Email is Required'],
        unique : true
    },
    password : {
        type : String,
        required : [true, 'Password is Required']
    },
    address : {
        type : Array,
    },
    phone : {
        type : String,
        required : [true, 'Phone No. is Required']
    },
    usertype : {
        type : String,
        required : [true, 'User type is Required'],
        default : 'clint',
        enum : ['clint', 'admin', 'vendor', 'driver']
    },
    profile : {
        type : String,
        default : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&usqp=CAU',
    },
    answer : {
        type : String,
        required : [true, "Answer is Required"],
    }
}, {timestamps : true})


//  Exports  ===>
module.exports = mongoose.model('User', userSchema);