const mongoose = require("mongoose");
const bcrypt=require("bcryptjs");

// const UserSchema = new mongoose.Schema({
//     Name: {
//         type: String,
//         required: [true, "Name is required"],
//         trim: true,  
//     },
//     Email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     Password: {
//         type: String,
       
//     },
//    ConfirmPassword: {
//         type: String,
       
//     }
// });

const  UserSchema = new mongoose.Schema({
   FullName:{type:String},
    Email:{type:String},
    Password:{type:String},
    ConfirmPassword:{type:String}
});

const RentalSchema = new mongoose.Schema({
    toolName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    userId:{
        type:String
    }
});

//  ENCRYPTION ON USER DATA 

// UserSchema.pre("save",async function(next){
   
//     this.Password= await bcrypt.hash(this.Password,10);
//     this.ConfirmPassword=await bcrypt.hash(this.ConfirmPassword,10);
//     next();
    
// })

UserSchema.pre("save", async function (next) {
    if (!this.Password ) {
        return next(new Error("Password are required"));
    }

    // Hash only if the Password field is modified
    if (this.isModified("Password")) {
        this.Password = await bcrypt.hash(this.Password, 10);
    }

   

    console.log("After Hashing - Password:", this.Password);

    next();
});





const Rental = mongoose.model("Rental", RentalSchema);

const User = mongoose.model("User", UserSchema);

module.exports = { User, Rental };
