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

//Get single User

router.get("/user/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

//Update

router.put("/user/edit/:id", async (req, res, next) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  //check if id is a mongoDB valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided id is not valid");
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        password,
      },
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    res.json(error);
  }
});

//Delete

router.delete("/user/:id", async (req, res, next) => {
  const { id } = req.params;

  //check if id is a mongoDB valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided id is not valid");
  }

  //remove the project
  try {
    await User.findByIdAndRemove(id);
    res.json({ message: `User with the id ${id} deleted successfully` });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
