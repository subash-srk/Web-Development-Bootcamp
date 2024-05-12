import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Subash K</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Info</h1><p>Phone: +9102033030</p>");
});

app.listen(port, () => {
  console.log(`Server Running on Port ${port}. `)
});