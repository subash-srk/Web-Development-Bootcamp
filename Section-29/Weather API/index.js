import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
const APP_ID = ""

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    res.render("index.ejs", { content: "API Response." });
});

app.post("/submit", async (req, res) => {
    console.log(req.body);
    try {
        const response = await axios.get(API_URL, {
          params: {
            lat: req.body.lat,
            lon: req.body.lon,
            appid: APP_ID,
            cnt: 4,
          },
        });
        const result = response.data;
        const list = result.list;
        const weather = list[0].weather;
        res.render("index.ejs", { content: weather[0] });
        // console.log(content);
      } catch (error) {
        res.status(404).send(error.message);
      }
 });

app.listen(port, () => {
    console.log("Server started at 3000");
});
