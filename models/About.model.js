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
    image: [
      {
        type: String,
        default:
          "https://images.pexels.com/photos/5699466/pexels-photo-5699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
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
