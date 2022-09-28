const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { response } = require('express');
const port = 9002;

const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegister" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
} , () => {
    console.log("Database Connected");
})

//Routes

app.post("/login" , (req,res) => {
    const {email,password} = req.body
    User.findOne({email:email} , (err,user) => {
        if(user){
    if(password === user.password){
        res.send({  message : "Successfully Logged In" , user : user  })
    }
    else {
        res.send({message : "Password did'st matched"})
    }
        }
        else{
            res.send({message : "User not registered"})
        }
    })
})

app.post("/register" , (req,res) => {
    const {name,email,password  } = req.body

  User.findOne({email : email} , (err,user) => {
    if(user){
   res.send({
    message : "User Already Registered"
   })
    }
    else{
        const user = new User({
            name,
            email,
            password
        })
        user.save(err => {
            if(err){
        res.send(err);
            }
            else{
        res.send({
            message : "Successfully Registered"
        })
            }
        })
    }
  })

   
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})



const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const User = new mongoose.model("User", userSchema);
