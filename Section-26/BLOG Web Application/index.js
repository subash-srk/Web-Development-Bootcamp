import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
import { timeLog } from "console";
import { title } from "process";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let titles = [];
let contents = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const data = {
    a_titles: titles,
  };
  res.render("index.ejs", data);
  });

app.get("/write", (req, res) => {
    res.render("write.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs")
});

app.get("/about", (req, res) => {
  res.render("about.ejs")
});

app.post("/submit", (req, res) => {
  titles.push(req.body["title"]);
  contents.push(req.body["content"]);
  console.log(titles)
  console.log(contents)
});

app.get("/articles", (req, res) => {
  const data = {
    a_titles: titles,
  };
  res.render("articles.ejs", data);
});

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});