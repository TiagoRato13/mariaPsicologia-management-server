const router = require("express").Router();
const mongoose = require("mongoose");
const axios = require("axios");

// Require the About model in order to interact with the database
const About = require("../models/About.model");

//get about
router.get("/about", async (req, res, next) => {
  try {
    const about = await About.find();
    res.json(about);
  } catch (error) {
    res.json(error);
  }
});

//Update

router.put("/about/edit/:id", async (req, res, next) => {
  const { name, education, image, bigAbout, smallAbout } = req.body;
  const { id } = req.params;

  try {
    const updatedAbout = await About.findByIdAndUpdate(
      id,
      { name, education, image, bigAbout, smallAbout },
      { new: true }
    );

    res.json(updatedAbout);
  } catch (error) {
    res.json(error);
  }
});

//create
router.post("/about", async (req, res, next) => {
  const { name, education, image, bigAbout, smallAbout } = req.body;

  try {
    let about = await About.create({
      name,
      education,
      image,
      bigAbout,
      smallAbout,
    });

    res.json(about);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
