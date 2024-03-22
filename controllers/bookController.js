import { Book } from '../models/bookModel.js';

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};


const addBook = async (req, res) => {
  try {
    if(
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear
    ){
      return res.status(400).json({
        message: "Send all required fields: title, author, publishYear"
      });
    }
    
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear
    };
    const book = await Book.create(newBook);

    return res.status(201).json(book);

  } catch (error) {
    res.status(500).json({message: error.message});
  }
};



const getBook = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};



const updateBook = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};



const deleteBook = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};



export {getAllBooks, addBook, getBook, updateBook, deleteBook };