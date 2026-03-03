const connect = require("./connect");
const express =require("express");
const cors = require("cors");
const posts = require("./postRoutes");
const app=express();

const PORT=3000;

// app.use is a function that mounts when we call the middleware
app.use(cors());  // Enable Cross-Origin Resource Sharing for requests from different origins
app.use(express.json());  // Parse incoming request bodies as JSON

app.use(posts)

app.listen(PORT,()=>{
    connect.connectToServer();
    console.log(`Server running on Port: ${PORT} `)
}) // creates our server