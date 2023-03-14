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
      default:
        "https://res.cloudinary.com/datglss57/image/upload/v1678807732/maria-psicologa/cenqrqgeemxedj6swlfp.jpg",
    },
    description: {
      type: String,
      required: [true, "Description is required."],
    },
  },
  {
    timestamps: true,
  }
);

const MonthlySubject = model("MonthlySubject", monthlySubjectSchema);

module.exports = MonthlySubject;
