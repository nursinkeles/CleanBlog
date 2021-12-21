const express = require("express");
const path = require("path");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const Post = require("./models/Post");

// connect DB
mongoose.connect("mongodb://localhost:27017/cleanblog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//ROUTES
app.get("/", async (req, res) => {
  //   const blog = {
  //     id: 1,
  //     name: "Blog name",
  //     description: "Blog description",
  //   };
  //   res.send(blog);
  const posts = await Post.find({});
  res.render("index", { posts });
});
app.get("/posts/:id", async (req, res) => {
  const posts = await Post.findById(req.params.id);
  res.render("post", { posts });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add_post", (req, res) => {
  res.render("add_post");
});
app.post("/posts", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
