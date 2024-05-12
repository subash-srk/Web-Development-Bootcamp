import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201)
});

app.put("/user/subash", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/subash", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/subash", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on ${port}.`);
});