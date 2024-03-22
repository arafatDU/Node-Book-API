import express from "express";
import mongoose from "mongoose";
import bookRouter from "./routes/bookRoute.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const mongodb_connect = process.env.MONGODB_CONNECT;
const app = express();

// middleware
app.use(express.json());


app.get('/', (req, res) => {
  res.send("Book Store Backend");
})


// Route
app.use('/api/books', bookRouter)



mongoose.connect(mongodb_connect)
  .then( () => {
    console.log("Connected to Database");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    })
  })
  .catch(() => {
    console.log("Connection Failed");
  })