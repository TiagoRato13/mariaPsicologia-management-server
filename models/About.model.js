const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const aboutSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    education: {
      type: String,
      required: true,
    },
    imageHome: {
      type: String,
      default:
        "https://res.cloudinary.com/datglss57/image/upload/v1678807826/maria-psicologa/ucdvjpxfyeziylzi84lm.jpg",
    },
    imageAbout: {
      type: String,
      default:
        "https://res.cloudinary.com/datglss57/image/upload/v1678807826/maria-psicologa/ucdvjpxfyeziylzi84lm.jpg",
    },

    bigAbout: {
      type: String,
      required: true,
    },
    smallAbout: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const About = model("About", aboutSchema);

module.exports = About;
