var assert = require("assert");
var mockery = require("mockery");
var mockDoc = require("../mocks/doc");

describe("Doc mockery example", function () {
    beforeEach(function (done){
         mockery.enable();
         mockery.registerMock('./doc', mockDoc); // must match exact require string in the js files
         done();
    });

    afterEach(function (done){
        mockery.deregisterAll();
        mockery.disable();
        done();
    });

    it("should get the mock's text", function (done) {
        // db must be declared in the it block, not in the header
        var db = require("../../lib/db");
        var result = db.get();
        assert.equal("mock doc", result);
        done();
    });

});


