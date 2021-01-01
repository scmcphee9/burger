const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./connection");

const app = express();

const PORT = process.env.PORT || 8080;

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
