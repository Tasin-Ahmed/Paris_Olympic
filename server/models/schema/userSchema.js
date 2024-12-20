const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        },
    gender: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        },
    country: {
        type: String,
    }
            
});

// Hashing password
userSchema.pre("save", async function(next){
    const user = this;
    if (!user.isModified("password")) {
        next();
    }

    try {
        const salt = await bcrypt.genSalt(15);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
    } catch (error) {
        console.log(error);
        next(error);
    }
})

userSchema.methods.comparePassword = async  function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};


// Generate token 
userSchema.methods.generateAuthToken = async function(){
    try {
        const user = this;
        const token = jwt.sign({ userId: user._id.toString(), email: user.email }, process.env.JWT_SECRET, {expiresIn:"30d"});
        return token;
    } catch (error) {
        console.error(error);
    }}


const User = new mongoose.model("User", userSchema);
module.exports = User;