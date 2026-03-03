const express=require('express');
const database=require('./connect');
const ObjectId=require('mongodb').ObjectId;
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

// Read/Retrieve particular/one post
postRoutes.route("/posts/:id").get(async(request,response)=>{
    let db=database.getDb();
    let data= await db.collection("posts").findOne({_id:new ObjectId(request.params.id)})

    if(Object.keys(data).length>0){
        response.json(data)
    }else{
        throw new Error('No Data Found')
    }
})

module.exports=postRoutes;