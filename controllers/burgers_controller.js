const express = require("express");
const burger = require("../models/burger");

const app = express();

const PORT = process.env.PORT || 8080;

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);

module.exports = { router };
