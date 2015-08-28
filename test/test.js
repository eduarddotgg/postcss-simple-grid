var postcss = require('postcss'),
	simpleGrid = require('../'),
	assert = require('assert');
	

var test = function (input, output) {
    assert.equal(postcss(simpleGrid()).process(input).css, output);
};