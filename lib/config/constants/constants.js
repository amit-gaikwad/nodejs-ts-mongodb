var Constants = (function () {
    function Constants() {
    }
    Constants.DB_CONNECTION_STRING = "mongodb://127.0.0.1:27017/preschool";
    return Constants;
})();
Object.seal(Constants);
module.exports = Constants;
