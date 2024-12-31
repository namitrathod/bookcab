const mongoose =require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { use } = require('../app')


const userSchema= new mongoose.Schema({
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
    },
    password:{
        type:String,
        required: true,
        select: false
    },
    socketId: {
        type:String,
    }
})

userSchema.methods.generateAuthToken = function(){
    const token =jwt.sign({_id:this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}
userSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password,10);
}

const userModel = mongoose.model('User',userSchema)
module.exports= userModel