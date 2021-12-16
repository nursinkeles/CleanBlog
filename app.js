const express = require("express");
const path = require("path");

const app = express();
const ejs = require("ejs");
// TEMPLATE ENGINE
app.set("view engine", "ejs");
// MIDDLEWARES
app.use(express.static("public"));

//ROUTES
app.get("/", (req, res) => {
  //   const blog = {
  //     id: 1,
  //     name: "Blog name",
  //     description: "Blog description",
  //   };
  //   res.send(blog);
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add_post", (req, res) => {
  res.render("add_post");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
