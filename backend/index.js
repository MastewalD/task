const express = require('express');
const Login =require("./models/login")
const Grade =require("./models/grade")
const mongoose = require('mongoose');
const User = require('./models/user');
const cors=require('cors')
const port = 8000;
const dbURI="mongodb+srv://mas:uiIAFlAsDB9Fua7x@cluster0.zdppoty.mongodb.net/node-tuts?retryWrites=true&w=majority"
mongoose.connect(dbURI).then(()=>{app.listen(port)}).catch((err)=>{
    console.log(err)
})
const app = express();
app.use(express.json())

app.use(cors())
app.use(express.urlencoded({extended:true}))

app.post('/register', async(req,res)=>{
  const {userName,email,password}=req.body.values
  const data={
    userName:userName,
    email:email,
    password:password,
  }
  try{
    const check=await collection.findOne({userName:userName})
    if (check){
      res.json("exist")
    }
    else{
      res.json("not exist")
      await collection.insertMany({data})
    }
  }
  catch(e){
    res.json("not exist")
}}
)
app.get("/",cors(),(req,res)=>{
  
})
app.post('/login', async(req,res)=>{
  const {userName,password}=req.body.values
  try{
    const check=await collection.findOne({userName:userName,
    password:password})
    if (check){
      res.json("exist")
    }
    else{
      res.json("notexist")
    }
    
    
    
  }
  catch(e){
    res.json("not exist")
}}
)

app.post('/add_grade', (req, res) => {
  const grade = new Grade(
    req.body.values
  );
grade
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});





