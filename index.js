const express=require("express")
const app=express();
const PORT=3000;


//without middleware
app.get('/',(req,res)=>{
    let username=req.headers.username;
    let kidneyid=req.headers.kidneyid;
    let password=req.params.password;
    if(username!="swastika" && password!="lakshya"){
        res.status(403).json({
            msg:"User doesnt exist"
        });
        return;
    }
    if(kidneyid!=1 ||kidneyid!=2){
        res.status(411).json({
            msg:"Wrong input of kidneys"
        })
        return;
    }
    res.send("your heart is healthy");
})

//with middleware

function user_auth(req,res,next){
    if(username!="swastika" && password!="lakshya"){
        res.status(403).json({
            msg:"incorrect inputs"
        })
    }
    else{
        next();
    }
}

function kidney_check(req,res,next){
    if(kidneyid==1||kidneyid==2){
        res.status(403).json({
            msg:"incorrect kidney_inputs"
        })
    }
    else{
        next();
    }
};



app.get('/',user_auth,kidney_check,(req,res)=>{
    res.send("Your heart is healthy");
})

//function to calculate the number_of_middleware

let number_of_middleware=0;
function calculate_requests(req,res,next){
    number_of_middleware++;
    console.log(number_of_middleware);
}

app.get("/",()=>{})
app.post("/",()=>{})
app.delete("/",(req,res)=>{})
app.listen("/",(req,res)=>{})