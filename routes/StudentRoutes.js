var express = require("express");
const router=express.Router();
const studentoperations=require('../operations/StudentOperations');

router.get('/login',studentoperations.student_login_get);
router.post('/login',studentoperations.student_login_post);
module.exports=router;