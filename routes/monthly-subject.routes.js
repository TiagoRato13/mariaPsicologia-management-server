const router = require("express").Router();
const mongoose = require("mongoose");
const axios = require("axios");

// Require the MonthlySubject model in order to interact with the database
const MonthlySubject = require("../models/MonthlySubject.model");

//get about
router.get("/monthly-subject", async (req, res, next) => {
  try {
    const monthlySubject = await MonthlySubject.find();
    res.json(monthlySubject);
  } catch (error) {
    res.json(error);
  }
});

//Update

router.put("/monthly-subject/edit/:id", async (req, res, next) => {
  const { title, description, image } = req.body;
  const { id } = req.params;

  try {
    const updatedMonthlySubject = await MonthlySubject.findByIdAndUpdate(
      id,
      { title, description, image },
      { new: true }
    );

    res.json(updatedMonthlySubject);
  } catch (error) {
    res.json(error);
  }
});

//create
router.post("/monthly-subject", async (req, res, next) => {
  const { title, description, image } = req.body;

  try {
    const monthlySubject = await MonthlySubject.create({
      title,
      description,
      image,
    });

    res.json(monthlySubject);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
