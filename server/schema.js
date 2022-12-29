const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:String,
    confirmpassword:String
});
const userModel=mongoose.model("user",userSchema);
module.exports=userModel;
