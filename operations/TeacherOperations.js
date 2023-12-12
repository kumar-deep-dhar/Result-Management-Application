const { response, request } = require("express");
const Student = require("../models/student");

const get_teacher_login=(req,res) => {
    res.render("teacher/teacherlogin");
};

const post_teacher_login=(req,res)=>{
    //const password="1234";
    if(req.body.password=="1234"){
        res.redirect("/teacher/dashboard");
    }
    else{
        res.render("/teacher/teacherlogin",{error:"Incorrect Password"});
    }
}

const get_teacher_viewall= async (req,res)=>{
    const allstudent=await Student.find();
    res.render("teacher/viewall",{students:allstudent});
};

const get_teacher_edit = async (request,response)=>{
    const user = await Student.findById(request.params.id);
    response.render("teacher/edit",{user:user});
};

const post_teacher_edit = async(request,response)=>{
    const user = await Student.findByIdAndUpdate(request.params.id,request.body);
    response.redirect("/teacher/viewall");
};

const get_teacher_delete= async (request,response)=>{
    await Student.findByIdAndDelete(request.params.id);
    response.redirect("/teacher/viewall");
};

const get_teacher_option = (request,response)=>{
    response.render("teacher/dashboard");
};

const get_teacher_add = (request,response)=>{
    response.render("teacher/addstudent");
};

const post_teacher_add = async (request,response) => {
    const singlestu = new Student ({
        name : request.body.name,
        rollnumber: request.body.rollnumber,
        dob : request.body.dob,
        score : request.body.score
    })
    try{
        const newstu=await singlestu.save();
        response.redirect("/teacher/addstudent");
    }
    catch{
        response.send("error")
    }
};

module.exports={
    get_teacher_login,
    post_teacher_login,
    get_teacher_viewall,
    get_teacher_edit,
    post_teacher_edit,
    get_teacher_delete,
    get_teacher_option,
    get_teacher_add,
    post_teacher_add
}