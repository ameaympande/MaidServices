const express = require('express')
const router = express.Router();

const User = require('../models/User');

router.get('/users', async (req , res)=>{
    try {
        const users = await User.find().sort({ createdAt : -1});
    
        if(users.length > 0){
            return res.status(200).json({data : users})
        }
        return res.status(400).json({messgage : "No records found."})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }


})

module.exports = router;