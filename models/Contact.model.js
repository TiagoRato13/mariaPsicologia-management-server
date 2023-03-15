const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const contactSchema = new Schema(
  {
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required."],
    },
    email: {
      type: String,
      required: [true, "email is required."],
    },
    address: {
      type: String,
      required: [true, "morada is required."],
    },
    facebook: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
      required: true,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Contact = model("Contact", contactSchema);

module.exports = Contact;
