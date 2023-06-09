const router = require("express").Router();
const mongoose = require("mongoose");
const axios = require("axios");

// Require the Therapy model in order to interact with the database
const Therapy = require("../models/Therapy.model");
const fileUploader = require("../config/cloudinary.config");


//get all
router.get("/therapies", async (req, res, next) => {
  try {
    const therapies = await Therapy.find();
    res.json(therapies);
  } catch (error) {
    res.json(error);
  }
});

//create therapy

router.post("/therapies", async (req, res, next) => {
  const { title, description, image } = req.body;

  try {
    const therapy = await Therapy.create({ title, description, image });
    res.json(therapy);
  } catch (error) {
    res.json(error);
  }
});



// POST '/api/therapies' => for saving a new therapy in the database
router.post('/therapies', (req, res, next) => {
 
  Therapy.create(req.body)
    .then(createdTherapy => {
      res.status(200).json(createdTherapy);
    })
    .catch(err => next(err));
  });
  
  
  //Read (by id)
  
  router.get("/therapies/:id", async (req, res, next) => {
    const { id } = req.params;
    
  try {
    const therapy = await Therapy.findById(id);

    res.json(therapy);
  } catch (error) {
    res.json(error);
  }
});

//Delete

router.delete("/therapies/:id", async (req, res, next) => {
  const { id } = req.params;

   
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided id is not valid");
} 

  //remove the therapy
  try {
    await Therapy.findByIdAndRemove(id);
    res.json({ message: `Therapy with the id ${id} deleted successfully` });
  } catch (error) {
    res.json(error);
  }
});


//Update

router.put("/therapies/edit/:id", async (req, res, next) => {
  const { id } = req.params;
  const { title, description, image } = req.body;

  //check if id is a mongoDB valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided id is not valid");
  }

  try {
    const updatedTherapy = await Therapy.findByIdAndUpdate(
      id,
      { title, description, image },
      { new: true }
    );

    res.json(updatedTherapy);
  } catch (error) {
    res.json(error);
  }
});


module.exports = router;
