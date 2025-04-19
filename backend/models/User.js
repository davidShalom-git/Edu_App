const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({

    Name: {
        type:String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type:String,
        required: true
    }

})

userSchema.pre('save', async function(next){
    if(!this.isModified("Password")){
        return next()
    }

    const salt = await bcrypt.genSalt(10)
    this.Password = await bcrypt.hash(this.Password, salt);
    next()
})


userSchema.methods.comparePassword = async function(userPassword){
    return await bcrypt.compare(userPassword, this.Password)
}

module.exports = mongoose.model('User', userSchema)