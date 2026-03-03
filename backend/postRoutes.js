const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;
const postRoutes = express.Router();

// Read/Retrieve all posts
postRoutes.route("/posts").get(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("posts").find({}).toArray();

  if (data.length > 0) {
    response.json(data);
  } else {
    throw new Error("No Data Found");
  }
});

// Read/Retrieve particular/one post
postRoutes.route("/posts/:id").get(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("posts").findOne({ _id: new ObjectId(request.params.id) });

  if (Object.keys(data).length > 0) {
    response.json(data);
  } else {
    throw new Error("No Data Found");
  }
});

// Create a post
postRoutes.route("/posts").post(async (request, response) => {
  let db = database.getDb();
  let newPost = {
    title: request.body.title,
    author: request.body.author,
    description: request.body.description,
    date: new Date(request.body.date),
  };
  let data = await db.collection("posts").insertOne(newPost);

  response.json(data);
});

// Update a post
postRoutes.route("/posts/:id").put(async (request, response) => {
  let db = database.getDb();
  let updatedPost = {
   $set:{
    title: request.body.title,
    author: request.body.author,
    description: request.body.description,
    date: new Date(request.body.date),
   }
  };
  let data = await db.collection("posts").updateOne({_id:new ObjectId(request.params.id)},updatedPost);

  response.json(data);
});


module.exports = postRoutes;
