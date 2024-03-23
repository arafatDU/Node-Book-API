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
    const { id } = req.params;
    const book = await Book.findById(id);
    if(!book){
      res.status(404).json({message: "Book Not Found"});
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};



const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    if(!book){
      res.status(404).json({message: "Book Not Found"});
    }

    const updatedBook = await Book.findById(id);

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};



const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if(!book){
      res.status(404).json({message: "Book Not Found"});
    }
    res.status(200).json({message: "Book deleted successfully"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};



export {getAllBooks, addBook, getBook, updateBook, deleteBook };