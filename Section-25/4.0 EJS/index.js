import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.render("index.ejs", {
        dayType: dayStr, 
        advice: adv
    });
});

app.listen(port, () => {
    console.log(`Server started at ${port}.`);
});


const d = new Date();
let day = d.getDay();
// console.log(day);
let dayStr = "";
let adv = "";


if(day === 0 || day == 6){
    dayStr = "the Weekend";
    adv = "Chill n Take Rest";
}
else{
    dayStr = "a Weekday";
    adv = "It's time to work hard";
}

// console.log(dayStr);

