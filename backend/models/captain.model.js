const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captainSchema = new mongoose.Schema({
    fullname : {
        firstname : {
            type : String,
            required : true,
            minlength : [3 , 'FirstName should be at least 3 characters'],
        },
        lastname : {
            type : String,
            minlength : [3 , 'LastName should be at least 3 characters'],

        },
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
    },
    password : {
        type : String,
        required : true,
        select : false,
    },
    socketId : {
        type : String,
    },

    status : {
        type : String,
        enum : ['active' , 'inactive'],
        default : 'inactive', 
    },

    vehicle : {
        color : {
            type : String,
            required : true,
            minlength : [3 , 'Color should be valid'],
        },
        plate : {
            type : String,
            required : true,
            minlength: [3 , 'Enter correct plate no'],
        },
        capacity : {
            type : Number,
            required : true,
            minlength : [1 , 'Capacity must be at leat 1'],
        },
        vehicleType : {
            type : String,
            required : true,
            enum : ['motorcycle' , 'auto' , 'car'],
        }
    },

    location : {
        lat : {
            type : Number,
        },
        lng : {
            type : Number,
        },
    },
});

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id : this._id} , process.env.JWT_SECRET , {expiresIn : '24h'});
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password , this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password , 10);
}

const captainModel = mongoose.model('captain' , captainSchema)

module.exports = captainModel;