const express = require("express");
const socket = require("socket.io");
const app = express();



//Routes
app.get("/",(req,res)=>{
   res.sendfile("./index.html");
})


//Connection create
const port = process.env.PORT || 3000;
var server = app.listen(port,()=> console.log(`server is running at port ${port}`));