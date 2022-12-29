const mongoose=require("mongoose");
const postSchema=new mongoose.Schema({
    title:String,
    description:String,
    author:String,
    date:{
        type:String,
        required:true,
    },
    path:{
        type:String,
        required:true
    }
    
});
const postModel=mongoose.model("post",postSchema);
module.exports=postModel;
