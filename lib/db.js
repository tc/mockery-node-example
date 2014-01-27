var doc = require("./doc");

var db = {
    connect: function() {return "db"; },
    get: function() { return doc.get(); }
};

module.exports = db;

