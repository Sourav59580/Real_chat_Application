const express = require("express");
const socket = require("socket.io");
const app = express();

//Static file
app.use(express.static('./public'));

//Routes
app.get("/",(req,res)=>{
   res.sendfile("index.html");
})


//Connection create
const port = process.env.PORT || 3000;
var server = app.listen(port,()=> console.log(`server is running at port ${port}`));

//Socket connection
var io = socket(server);

io.on("connection",function(socket){
  socket.on("chat",function(data){
     io.sockets.emit("chat",data);
  });

  socket.on("typing",function(data){
     socket.broadcast.emit("typing",data);
  })
})