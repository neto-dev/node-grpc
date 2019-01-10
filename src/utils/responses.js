module.exports = {
    respondJson: function(data) {
        var result = {
            results: data
        };
        return result;
    },
    respondErrorJson: function(code, message, database_error) {
        var response  = {
            code: code,
            message: message,
            database_error: database_error
        };
        return response;
    }
};
