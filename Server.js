const express = require("express");
const hbs = require("hbs");

const app = express();
hbs.registerPartials(__dirname + "/Views/Partials")
app.set("view engiene", "hbs");

 app.get("/", (req, res)=> {

     res.render("index.hbs", { År: new Date().getFullYear()});
     
 });
 app.get("Sida1.hbs", (req, res)=> {

    res.render("/Sida1.hbs");
    
});
app.use(express.static(__dirname + "/Views"));
app.get("/hem", (req, res) => {
    res.send("hello from express");
})

app.listen(3000);