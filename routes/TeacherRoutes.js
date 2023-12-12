var express = require("express");
const router=express.Router();

const teacheropeartions= require("../operations/TeacherOperations");

router.get('/teacherlogin',teacheropeartions.get_teacher_login);
router.post('/teacherlogin',teacheropeartions.post_teacher_login);
router.get('/viewall',teacheropeartions.get_teacher_viewall);
router.get('/edit/:id',teacheropeartions.get_teacher_edit);
router.post('/edit/:id',teacheropeartions.post_teacher_edit);
router.get('/delete/:id',teacheropeartions.get_teacher_delete);
router.get('/dashboard',teacheropeartions.get_teacher_option);
router.post('/addstudent',teacheropeartions.post_teacher_add);
router.get('/addstudent',teacheropeartions.get_teacher_add);

module.exports= router;