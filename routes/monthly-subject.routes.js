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

//Delete

router.delete("/monthly-subject/:id", async (req, res, next) => {
  const { id } = req.params;

   
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided id is not valid");
} 

  //remove the therapy
  try {
    await MonthlySubject.findByIdAndRemove(id);
    res.json({ message: `Monthly Subject with the id ${id} deleted successfully` });
  } catch (error) {
    res.json(error);
  }
});

//Update

router.put("/monthly-subject/edit/:id", async (req, res, next) => {
  const { title, description, image, month } = req.body;
  const { id } = req.params;

  try {
    const updatedMonthlySubject = await MonthlySubject.findByIdAndUpdate(
      id,
      { title, description, image, month },
      { new: true }
    );

    res.json(updatedMonthlySubject);
  } catch (error) {
    res.json(error);
  }
});

//create
router.post("/monthly-subject", async (req, res, next) => {
  const { title, description, image, month } = req.body;

  try {
    const monthlySubject = await MonthlySubject.create({
      title,
      description,
      image,
      month,
    });

    res.json(monthlySubject);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
