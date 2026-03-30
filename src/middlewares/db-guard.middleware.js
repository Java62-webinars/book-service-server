
import DatabaseConnectionError from "../errors/DatabaseConnectionError.js";
import mongoose from "mongoose";

 const dbGuard = (req, res, next) => {

    if (mongoose.connection.readyState !== 1 ) {
        return next(new DatabaseConnectionError());
    }
            next()         }

export default dbGuard;