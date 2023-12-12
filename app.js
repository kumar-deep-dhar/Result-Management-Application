const express=require("express");
const app = express();

//defining the port
const port=5000 ;

//mongodb connection and request listening.
const mongoose=require("mongoose");
const dburl="mongodb+srv://kumardeepdhar2023:Deep123@cluster0.hzfa4vx.mongodb.net/resultmanagementapp?retryWrites=true&w=majority";
mongoose.connect(dburl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
const db=mongoose.connection;
db.on("error",(error)=>console.log(error));
db.once("open",()=>console.log("connected"));

//view engine
app.set('view engine','ejs');


//static files and middleware
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());


//express layouts
var explayouts=require("express-ejs-layouts");
app.use(explayouts);
app.set('layout','layouts/layout');


//routes
const teachroutes=require("./routes/TeacherRoutes");
const studroutes=require("./routes/StudentRoutes");
app.use("/teacher",teachroutes);
app.use("/student",studroutes);

//index route
app.get("/",(req,res)=>{
    res.render("index");
});

app.listen(port,()=>{
    console.log(`Example app listenting at http://localhost:${port}`);
});

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});