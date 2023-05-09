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

app.post('/register', (req, res) => {
  const user = new User(
    req.body.values
  );
  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post('/login', (req, res) => {
  const login = new Login(
    req.body.values
  );
login
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

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





