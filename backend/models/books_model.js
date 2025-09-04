import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  publishYear: {
    type: Number,
    required: true,
  },
  img:{
    type: String,
    required: true,
  }
}, { timestamps: true });

const Book = mongoose.model("Book", booksSchema);

export default Book;

