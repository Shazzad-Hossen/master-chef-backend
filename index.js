const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const chefs = require("./data/chef.json");
const recipes = require("./data/recipes.json");
const blogs = require("./data/blog.json");
app.use(cors());

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/blogs", (req, res) => {
  res.send(blogs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const chef= chefs.find(data=>data.id===id);
  res.send(chef);
});



app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  const recipe= recipes.find(data=>data.id===id);
  res.send(recipe);
});

app.get("/", (req, res) => {
  res.send("Backend is Running");
});


app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});

