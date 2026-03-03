const express=require('express');
const database=require('./connect');

const postRoutes=express.Router();

// Read/Retrieve all posts
postRoutes.route("/posts").get(async (request,response)=>{
    let db = database.getDb();
    let data = await db.collection("posts").find({}).toArray()

    if(data.length>0){
        response.json(data)
    }else{
        throw new Error('No Data Found')
    }
})

module.exports=postRoutes;