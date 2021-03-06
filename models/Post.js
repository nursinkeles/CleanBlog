const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//connect Schema
const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema); //model oluşturduk

module.exports = Post;
