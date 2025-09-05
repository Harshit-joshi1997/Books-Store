import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import Book from "./models/books_model.js";

dotenv.config({ path: "./backend/.env" });
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

connectDB();

app.get("/books", async (req, res) => {
  const { author, subject, publishYear, img } = req.query;
  try {
    const query = {};
    if (author) query.author = author;
    if (subject) query.subject = subject;
    if (publishYear) query.publishYear = publishYear;
    if (img) query.img = img;

    const books = await Book.find(query);
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
