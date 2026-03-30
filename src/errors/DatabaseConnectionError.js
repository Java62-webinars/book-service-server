export default class DatabaseConnectionError extends Error {
    constructor(message = 'Database is unavailable. Please try again later') {
        super(message);
        this.name = "DatabaseConnectionError";
        this.statusCode = 503;
    }
}