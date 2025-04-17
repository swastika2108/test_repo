const express=require("express");
const app=express();
const PORT=3000;
app.use(express.json());
const schema=zod.object({
    email:zod.string(),
    password:zod.string(),
    country:zod.literal("IN").orzod.literal("US")

})
app.post('/health-checkup',function(req,res){
    const kidneys=req.body.kidneys;
    const kidney_length=schema.safeParse(kidneys);
    res.send({response})
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
