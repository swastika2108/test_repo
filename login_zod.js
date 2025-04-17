const express=require("express")
const app=express();
const PORT=3000

app.use(express.json())

const schema=Zod.object({
    email:ZOD.string.email(),
    password:Zod.string.min(6),
})

app.get('/login',function(req,res){
    const response=schema.safeParse(req.body);
    if(response.success){
        res.json({
            msg:"Your inputs are valid"
        })
    }
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on the ${PORT}`);
})