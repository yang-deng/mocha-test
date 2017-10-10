var add = require('../src/add.js');
var expect = require('chai').expect;

describe('test add function', function () {

    it('1+1 should be 2', function () {
        expect(add(1, 1)).to.be.equal(2);
    });

    it('any number add 0 should be the same number', function () {
        expect(add(100, 0)).to.be.equal(100);
    });

});