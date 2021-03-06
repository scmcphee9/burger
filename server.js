const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller");

const PORT = process.env.PORT || 3000;

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => console.log(`App now listening at localhost:${PORT}`));
