import mongoose from 'mongoose';
import config from '../configuration/config.js';
import Book from '../models/book.model.js';
const initBooks = [
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        isbn: "9780140447934",
        price: 19.99,
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        isbn: "9780140449136",
        price: 15.50,
    },
    {
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        isbn: "9780143035008",
        price: 17.75,
    },
    {
        title: "Fathers and Sons",
        author: "Ivan Turgenev",
        isbn: "9780140441475",
        price: 12.90,
    },
    {
        title: "The Master and Margarita",
        author: "Mikhail Bulgakov",
        isbn: "9780141180144",
        price: 16.99,
    },
    {
        title: "Eugene Onegin",
        author: "Alexander Pushkin",
        isbn: "9780140448030",
        price: 11.25,
    },
    {
        title: "The Three Musketeers",
        author: "Alexandre Dumas",
        isbn: "9780140449266",
        price: 13.40,
    },
    {
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        isbn: "9780143039563",
        price: 12.30,
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        isbn: "9780141439518",
        price: 14.80,
    },
    {
        title: "Great Expectations",
        author: "Charles Dickens",
        isbn: "9780141439563",
        price: 15.20,
    },
];

async function seedBooks() {
    try {
        await mongoose.connect(config.mongodb.uri, {
            ...config.mongodb.db,
            serverSelectionTimeoutMS: 5000,
        });

        console.log('Connected to MongoDB');

        await Book.deleteMany({});
        console.log('Old books removed');

        await Book.insertMany(initBooks);
        console.log('Books inserted successfully');

        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Seeding failed:', error.message);
        process.exit(1);
    }
}

seedBooks();