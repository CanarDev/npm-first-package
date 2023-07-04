const assert = require('assert');
const getRandomNumber = require('../randomNumber');


describe('random number between 0 and 100', function () {
    it('should return a number between 0 and 100', function () {
        let number = getRandomNumber.getRandomNumber();
        assert.ok(number >= 0 && number <= 100);
    });
});