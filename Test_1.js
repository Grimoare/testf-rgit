const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/views"));

app.set("view engiene", "hbs");

app.get("/", (req, res)=> {

    res.render("index.hbs", { födelsedatum: "new Date().getFullYear"});

});

app.listen(3000);