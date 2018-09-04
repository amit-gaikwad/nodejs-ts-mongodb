var Constants = (function () {
    function Constants() {
    }
    Constants.DB_CONNECTION_STRING = "mongodb://localhost:27017/preschool";
    return Constants;
})();
Object.seal(Constants);
module.exports = Constants;
