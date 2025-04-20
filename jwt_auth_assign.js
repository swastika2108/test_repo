const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
const mongoose=require("mongoose");

const value={
    name:"swastika",
    accountNumber:21082004
}

const token=jwt.sign(value,"secret");
console.log(token);

//try and catch
function getlength(name){
    return name.length;
}
try{
    const ans=getlength();
    console.log(ans);
    console.log("hi there from inside");
}
catch(e){
    console.log("inside the catch statement");
}


//without the try and catch the code panics a lot
const ans2=getlength();
console.log(ans);
console.log("hi control")//control never reaches here




