import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/db.js'
import Book from './models/books_model.js'

dotenv.config()
const app = express()
const port = 8000

app.use(cors())
app.use(express.json())

connectDB()



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
