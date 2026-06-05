const express=require("express");
const Signup=require("../controllers/signup.auth.js")
const LoginData=require("../controllers/login.auth.js")

const router=express.Router();

router.post("/register",Signup);
router.post("/login",LoginData);

module.exports=router;

