const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://images.pexels.com/photos/5699466/pexels-photo-5699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    publishedDate: {
      type: String,
    },
    publisher: {
      type: String,
      required: true,
      trim: true,
    },
    author: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    languages: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    pages: {
      type: Number,
      required: true,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Book = model("Book", bookSchema);

module.exports = Book;
