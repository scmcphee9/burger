const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./connection");






// handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



