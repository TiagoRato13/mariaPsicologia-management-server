const router = require("express").Router();
const mongoose = require("mongoose");
const axios = require("axios");

// Require the About model in order to interact with the database
const User = require("../models/User.model");

//get about
router.get("/user", async (req, res, next) => {
  try {
    const about = await User.find();
    res.json(about);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
