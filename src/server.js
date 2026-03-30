import express from 'express';
import mongoose from "mongoose";
import config from "./configuration/config.js";
import postRoutes from "./routes/post.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import DatabaseConnectionError from "./errors/DatabaseConnectionError.js";
import {setDbConnectionError} from "./state/db.state.js";
import dbGuard from "./middlewares/db-guard.middleware.js";

const app = express();

app.use(express.json());
app.get('/health', (req, res) => {
    res.json({ status: "server online",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected" });
})
app.use(dbGuard);
app.use('/forum', postRoutes)

app.use(errorHandler)

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongodb.uri,{ ...config.mongodb.db, serverSelectionTimeoutMS: 5000} );
        console.log("Connected to MongoDB");
    } catch (e) {
        console.log('Failed connecting to MongoDB: ', e);
    }
}
//
// mongoose.connection.on("disconnected", () => {
//     setDbConnectionError(new Error("Database connection was lost."));
//     console.error("Connect to MongoDB was lost");
// });
//
// mongoose.connection.on("error", error  => {
//     setDbConnectionError(error);
//     console.error("MongoDB error", error.message);
// });

async function startServer() {
    await connectDB();
    app.listen(config.port, () => console.log(`Server running on port ${config.port}. Press Ctrl+C to quit.`));
}

startServer();