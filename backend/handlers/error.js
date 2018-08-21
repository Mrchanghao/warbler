const errorHandler = (error, request, response, next) => {
    return response.status(error.status || 500).json({
        error: {
            message: error.message || 'this is the Wrong!! Error!!'
        }
    })
};


module.exports = errorHandler;