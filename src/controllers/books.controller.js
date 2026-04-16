import booksService from "../services/books.service.js";

export const getBooks = async (req, res, next) => {
    try {
        const books = await booksService.getBooks();
        res.json(books);
    } catch (error) {
        next(error);
    }
};
