const Student = require("../models/student");

const student_login_get=(req,res)=>{
    res.render("student/login");
};

const verifystu= async (req,res)=>{
    try{
        const {rollnumber,dob} =req.body;
        const student= await Student.findOne({rollnumber,dob});
        
        if(student){
            res.redirect('/student/view/${student._id}');
        }
        else{
            res.render("student/login",{error:'Invalid Roll Number or Date of birth'})
        }
    }
    catch(error){
            res.send('OOH! an error occured.');
    }
};
const student_login_post= async (req,res)=>{
    const studentrollno= req.body.rollnumber;
    const dob=req.body.dob;
    const indivisualstudent= await Student.findOne({rollnumber:studentrollno});
    if(!indivisualstudent){
        res.render("student/login",{error:"Login with Correct roll number and Date of Birth"})
    }
    res.render("student/view",{one:indivisualstudent});

    
};

module.exports={
    student_login_get,
    student_login_post
}