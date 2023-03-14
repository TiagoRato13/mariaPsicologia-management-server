const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const therapySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Therapy title is required."],
      unique: true,
      trim: true,
    },
    image: [
      {
        type: String,
        default:
          "https://res.cloudinary.com/datglss57/image/upload/v1678807732/maria-psicologa/cenqrqgeemxedj6swlfp.jpg",
      },
    ],
    description: {
      type: String,
      required: [true, "Description is required."],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Therapy = model("Therapy", therapySchema);

module.exports = Therapy;
