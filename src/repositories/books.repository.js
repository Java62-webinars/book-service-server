import Book from "../models/book.model.js";

const findAll = async () => {
    const books = await Book.find().sort({title:1});
    return books;
}

export default {
    findAll
}