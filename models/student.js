const mongoose=require("mongoose");
const {Schema}=mongoose;

const StudentSchema=new Schema({
    rollnumber:{
        type:Number,
        unique:true
    },
    name:String,
    dob:Date,
    score:Number
});

module.exports = mongoose.model("Student",StudentSchema);