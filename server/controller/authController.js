const User = require("../models/schema/userSchema.js")
const bcrypt = require("bcrypt")

const home = async (req,res)=>{
    try {
        res.status(200).send("Welcome");
    } catch (error) {
        console.log(error);
    }
}

const register = async (req,res)=>{

    // console.log(req.body);
    try {
        const {name, email, gender, password, cfPassword, country} = req.body;
        if (!name || !email || !password || !cfPassword) {
            return res.status(400).json({ error: 'Fill the fields properly' });
        }        
        else if (password != cfPassword) {
            return res.status(400).send({error: "Password and Confirm Password do not match"});
        }
        
        const userExist = await User.findOne({email:email});

        if(userExist){
            return res.status(400).send({error: "User already exist with this email"});
        }
        else{
                const newUser = await User.create({name, email, gender, password, country});
                res.status(201).json({message:"User created successfully"});
           
        }
        
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

const login = async (req,res)=>{

    // console.log(req.body);
    // console.log("clicked");
    
    try {
        const {email,password} = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please provide all details." })
        }
        const user = await User.findOne({email});
        // const doctor = await Doctor.findOne({email});
        // console.log(user);
        if(user){

            const isMatch = await user.comparePassword(password)
            if (isMatch) {
                const token = await user.generateAuthToken();
                // console.log(token);
                user.password = undefined;
                res.status(201).cookie("token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    maxAge: 1000 * 60 * 60,
                }).json({message:"User logged in successfully",user});
            }
            
            else{
                return res.status(400).send({error:"Invalid credentials"});
            }
        }
       

    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

const profile = async(req, res) =>{
    const userId = req.userId;
    // console.log(userId);
    
    try {
        const user = await User.findOne({_id:userId});
       
        if(!user){
            return res.status(400).send({error:"Invalid role"});
        }
        // console.log(user);
        res.status(201).json({message: "Get Profile", Id: userId, Profile: user });
        // res.status(201).json({message: "User  profile"});
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

const logout = async(req, res) =>{
    res
    .clearCookie("token")
    .status(201).json({ message: "Logged out successfully" });
}
module.exports = {home,register,login,profile,logout}