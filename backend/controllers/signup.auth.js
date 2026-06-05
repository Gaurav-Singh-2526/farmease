const bcrypt = require('bcryptjs'); 
const { User } = require("../model/model");

const Signup = async (req, res) => {
  try{
    const Password=req.body.Password;
    const ConfirmPassword=req.body.ConfirmPassword;
   
     
    if(Password===ConfirmPassword){
    const data= await User({
        FullName:req.body.FullNameName,
        Email:req.body.Email,
        Password:req.body.Password,
        ConfirmPassword: req.body.ConfirmPassword
    });
    const result= await data.save();
    console.log(result);
    res.status(201).json({ message: "User registered successfully", user: result });
}
else{
    res.status(404).json({ message: "Password not match.... "});
}
}catch(e){
    console.log(`Resgister Error:=>> ${e}`);
}

  
};



module.exports = Signup;



// const { Name, Email, Password, ConfirmPassword } = req.body;

    
// if (!Name || !Email || !Password || !ConfirmPassword) {
//   return res.status(400).json({ error: "All fields are required" });
// }


// if (Password !== ConfirmPassword) {
//   return res.status(400).json({ error: "Passwords do not match" });
// }


// const newUser = new User({
//   Name,
//   Email,
//   Password, 
// });


// const result = await newUser.save();

// console.log(result);
// return res.status(201).json({ message: "User registered successfully", user: result });