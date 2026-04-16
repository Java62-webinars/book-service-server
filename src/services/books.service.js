import booksRepository from "../repositories/books.repository.js";

const getBooks = async () => {
    return booksRepository.findAll();
  };
export default {
    getBooks,
}