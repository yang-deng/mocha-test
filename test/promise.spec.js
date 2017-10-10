var fetch = require('node-fetch');
var expect = require('chai').expect;

describe('test asynchronous function', function () {

    it('return async object', function () {
        return fetch('https://api.github.com')
            .then(function (res) {
                return res.json;
            }).then(function (json) {
                expect(json).to.be.an('function');
            });
    });

});