const mongoose=require("mongoose")

 const Database= async () => {
    
// mongodb://localhost:27017/loginData
    // mongoose.connect("mongodb+srv://Gaurav:Gaurav%4000@farmingproject.kiub9.mongodb.net/loginAuth?retryWrites=true&w=majority&appName=FarmingProject")
   // mongoose.connect("")
    mongoose.connect("mongodb+srv://Gaurav:Gaurav87@farmingproject.kiub9.mongodb.net/loginAuth?retryWrites=true&w=majority&appName=FarmingProject")

    .then(()=>console.log("database connected succesfully"))
    .catch((error)=>console.log("Database conection error",error));
    };
  
   
    Database();
    module.exports=mongoose;
    