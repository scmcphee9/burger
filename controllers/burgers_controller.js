const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// get, post, put routes

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const allBurgerObject = { burgers: data };

    res.render("index", allBurgerObject);
  });
});

module.exports = router;
