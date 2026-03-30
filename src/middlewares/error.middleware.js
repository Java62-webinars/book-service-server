const errorHandler = (err, req, res, next) => {
    console.log(err.stack)
    const contains = err.message.toLowerCase().includes('not found');

    if (err.message && contains) {
        return res.status(404).json({
            "timestamp": new Date().toISOString(),
            "status": 404,
            "error": "Not Found",
            "message": err.message,
            "path": req.path
        });
    }

    const status = err.statusCode || 500;
    const message = err.statusCode ? err.message : "Internal Server Error";
    return res.status(status).json({
        message,
        error: err.name || "Server Error",
        "path": req.path,
        "timestamp": new Date().toISOString()
    })

}

export default errorHandler;