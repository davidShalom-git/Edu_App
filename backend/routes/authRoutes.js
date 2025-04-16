const express = require('express')
const router = express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')


router.post('/register', async(req,res)=> {
    try{
        const {Name, Email, Password} = req.body

        if(!Name || !Email || !Password){
            return res.status(400).json({message: "Please fill all the fields"})
        }

        const existingEmail = await User.findOne({Email})
        if(existingEmail){
            return res.status(400).json({message: "Email already exists"})
        }

        const user = await User.create({
            Name,
            Email,
            Password
        })

        const newUser = await user.save();
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET,{
            expiresIn: '30d'
        })

        res.status(201).json({
            _id: newUser._id,
            Name: newUser.Name,
            Email: newUser.Email,
            token: token
        })
    }
    catch(error){

        console.log(errro)
        res.status(500).json({message: "Internal Server Error"})

    }
})

router.post('/login',async(req,res)=> {
    try{

        const {Email, Password} = req.body
        if(!Email || !Password){
            return res.status(400).json({message: "Please fill all the fields"})
        }
    
        const userLogin = await User.find({
            Email,
            Password
        })
    
        if(!userLogin){
            return res.status(400).json({message: "Invalid Credentials"})
        }
    
        const isMatch  = await userLogin.comparePassword(Password)
        if(!isMatch){
            return res.status(400).json({message: "Invalid Credentials"})
        }
    
        const token = jwt.sign({id: userLogin._id},process.env.JWT_SECRET,{
            expiresIn: '30d'
        })
    
        res.status(201).json({
            token,
            user:{
                _id: userLogin._id,
                Name: userLogin.Name,
                Email: userLogin.Email
            }
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }

})

module.exports = router;