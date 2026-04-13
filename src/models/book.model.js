import mongoose from 'mongoose';
import bookRoutes from "../routes/books.routes.js";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    isbn: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 10,
        maxlength: 13,
        index: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0.01,
        max: 999.99,
    },
    flagOutOfStock: {
        type: Boolean,
        required: true,
        default: false,
    }
}, {
    versionKey: false,
    timestamps: false,
    toJSON: {
        transform:  (doc, ret) => {
            delete ret._id;
            return ret;
        }
    }
}
)
// const Book = mongoose.model('Book', bookSchema);
// export default Book;
export default bookSchema;