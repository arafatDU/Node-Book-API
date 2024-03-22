import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const app = express();

// middleware
app.use(express.json());


app.get('/', (req, res) => {
  res.send("Book Store Backend");
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})


