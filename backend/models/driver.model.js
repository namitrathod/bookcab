const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');  

const driverSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength:[3,'first name should be atleast 3 characher long'],
        },
        lastname:{
            type: String,
            required: true,
            minlength:[3,'Last name should be atleast 3 characher long'],
        },
    },
    email:{
        type: String,
        required: true,
        minlength:[3,'email should be atleast 3 characher long'],
        match: [/\S+@\S+\.\S+/, 'Enter valid email'],
    },
    password:{
        type:String,
        required: true,
        select: false
    },
    socketId: {
        type:String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength:[3,'color should be atleast 3 characher long'],
        },
        plate:{
            type: String,
            required: true,
            minlength:[3,'plate should be atleast 3 characher long'],
        },
        type:{
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, 'capacity should be atleast 1'],
        },
    },

    location:{
        latitude:{
            type: Number,        },
        longitude:{
            type: Number,
        },
    }

})

driverSchema.methods.generateAuthToken = function(){
    const token =jwt.sign({_id:this._id}, process.env.JWT_SECRET,{expiresIn: '24h'});
    return token;
}

driverSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}
driverSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password,10);
}
const driverModel = mongoose.model('Driver',driverSchema);
module.exports= driverModel;