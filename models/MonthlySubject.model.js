const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const monthlySubjectSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Monthly subject title is required."],
      trim: true,
    },
    image: {
      type: String,
      default: "https://images.pexels.com/photos/54300/pexels-photo-54300.jpeg",
    },
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

const MonthlySubject = model("MonthlySubject", monthlySubjectSchema);

module.exports = MonthlySubject;
