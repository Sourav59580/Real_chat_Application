const express = require("express");
const app = express();



//Routes
app.get("/",(req,res)=>{
   res.send("Hello world");
})


//Connection create
const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`server is running at port ${port}`));