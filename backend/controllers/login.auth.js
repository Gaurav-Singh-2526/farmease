
const express= require("express");
const { User } = require("../model/model");
const bcrypt=require("bcryptjs")
 
const LoginData = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const isEmail = await User.findOne({ Email: Email });

        if (!isEmail) {
            console.log("User does not exist");
            return res.status(400).json({ message: "User does not exist" });
        }

        
         const match = await bcrypt.compare(Password,isEmail.Password)
      
        // if (String(isEmail.Password) === String(Password))
        if(match){
            console.log("Login successful");
            return res.status(200).json({ message: "Login successful",
                user:{
                    _id: isEmail._id,
                    FullName: isEmail.FullName,
                    Email: isEmail.Email,
                    Phone: isEmail.Phone
                }
            }); 
        } else {
            console.log("Password does not match");
            return res.status(401).json({ message: "Incorrect password" });
        }
    } catch (error) {
        console.log("Login Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports=LoginData;