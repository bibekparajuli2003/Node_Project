const express = require('express');
const app = express();
const ejs = require('ejs');
const { sequelize } = require("./model/")
const { loginUser, registerUser } = require('./controller/userController');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');



app.get("/",(req,res)=>{
    res.render('home')
})


app.get("/register",(req,res)=>{
    res.render ('Register')
})


app.get ("/login",(req,res)=>{
    res.render ("Login")
})
app.get("/sign",(req,res)=>{
    res.render('Login')
})
app.post("/register",registerUser)

app.listen (3000,()=>{
    console.log('server  on port: 3000')
})