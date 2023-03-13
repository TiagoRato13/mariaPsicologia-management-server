const router = require("express").Router();
const mongoose = require("mongoose");
const axios = require("axios");

// Require the About model in order to interact with the database
const Contacts = require("../models/Contact.model");

//get about
router.get("/contacts", async (req, res, next) => {
  try {
    const contacts = await Contacts.find();
    res.json(contacts);
  } catch (error) {
    res.json(error);
  }
});

//Update

router.put("/contacts/edit/:id", async (req, res, next) => {
  const { phoneNumber, email, address, facebook, instagram } = req.body;
  const { id } = req.params;

  try {
    const updatedContacts = await Contacts.findByIdAndUpdate(
      id,
      { phoneNumber, email, address, facebook, instagram },
      { new: true }
    );

    res.json(updatedContacts);
  } catch (error) {
    res.json(error);
  }
});

//create
router.post("/contacts", async (req, res, next) => {
  const { phoneNumber, email, address, facebook, instagram } = req.body;

  try {
    const contacts = await Contacts.create({
      phoneNumber,
      email,
      address,
      facebook,
      instagram,
    });

    res.json(contacts);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
