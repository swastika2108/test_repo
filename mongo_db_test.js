const express = require("express");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken")

const app=express();
app.use(express.json());

mongoose.connect("url");
let User=mongoose.model('Users',{
    name:String,
    password:String,
    gmail:String
});


app.post('/signup', async function(req,res){
    // const name=req.body.name;
    // const password=req.body.password;
    // const gmail=req.body.gmail;
    const {name,gmail,password}=req.body;

    const existingUser=await User.find({email:gmail});
    if(existingUser){
        return res.status(400).send("Username already exists");
    }
    const user=new User({
        name:name,
        password:password,
        email:gmail
    })
    await user.save();
    res.status(200).send("User has signed up successfully");
})

app.post('/signin',async(req,res)=>{
    const {name,password,gmail}=req.body;

    const existingUser=await User.findOne({gmail});

    if(!existingUser){
        res.status(403).send("Username does not exist please signup again");
    }
    if(existingUser.password!=password){
        return res.status(403).send("Incorrect password")
    }
    var token=jwt.sign({username:name},jwtpass);
    res.send({token});
})

app.get('/signin',(req,res)=>{
    var token=req.headers.authorization;
    try{
        const decode=jwt.verify(token,jwtpass);
    }
    catch(err){
        res.status(401).send("Invalid token")
    }
})

app.listen(3000,()=>
{
    console.log(`The server is running on the ${PORT}`);
})
