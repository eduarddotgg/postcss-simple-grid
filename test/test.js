var postcss = require('postcss'),
	grid = require('../'),
	assert = require('assert');
	
var settings = {
	columns: 12,
	maxWidth: 960,
	gutter: 20
};

var test = function (input, output) {
    assert.equal(postcss(grid(settings)).process(input).css, output);
};

test('.row{create-row: 1320px;}', '.row{display: block; margin: 0 auto; max-width: 1320px; position: relative; width: 100%; } .row:before,.row:after{ content: " "; display: table; } .row:after{ clear: both; }');
test('.column{create-column: 40px;}', '.column{ float: left; padding: 0 20px; position: relative; width: 100%; }');
test('.small{create-grid: 12;}', '.small_1{ width: 8.33333%; } .small_2{ width: 16.66667%; } .small_3{ width: 25%; } .small_4{ width: 33.33333%; } .small_5{ width: 41.66667%; } .small_6{ width: 50%; } .small_7{ width: 58.33333%; } .small_8{ width: 66.66667%; } .small_9{ width: 75%; } .small_10{ width: 83.33333%; } .small_11{ width: 91.66667%; } .small_12{ width: 100%; }');
test('.small-offset{create-offset: 12;}', '.small-offset_0{ margin-left: 0%; } .small-offset_1{ margin-left: 8.33333%; } .small-offset_2{ margin-left: 16.66667%; } .small-offset_3{ margin-left: 25%; } .small-offset_4{ margin-left: 33.33333%; } .small-offset_5{ margin-left: 41.66667%; } .small-offset_6{ margin-left: 50%; } .small-offset_7{ margin-left: 58.33333%; } .small-offset_8{ margin-left: 66.66667%; } .small-offset_9{ margin-left: 75%; } .small-offset_10{ margin-left: 83.33333%; } .small-offset_11{ margin-left: 91.66667%; }');
test('.small-push{create-push: 12;}', '.small-push_0{ left: 0%; right: auto; } .small-push_1{ left: 8.33333%; right: auto; } .small-push_2{ left: 16.66667%; right: auto; } .small-push_3{ left: 25%; right: auto; } .small-push_4{ left: 33.33333%; right: auto; } .small-push_5{ left: 41.66667%; right: auto; } .small-push_6{ left: 50%; right: auto; } .small-push_7{ left: 58.33333%; right: auto; } .small-push_8{ left: 66.66667%; right: auto; } .small-push_9{ left: 75%; right: auto; } .small-push_10{ left: 83.33333%; right: auto; } .small-push_11{ left: 91.66667%; right: auto; }');
test('.small-pull{create-pull: 12;}', '.small-pull_0{ left: auto; right: 0%; } .small-pull_1{ left: auto; right: 8.33333%; } .small-pull_2{ left: auto; right: 16.66667%; } .small-pull_3{ left: auto; right: 25%; } .small-pull_4{ left: auto; right: 33.33333%; } .small-pull_5{ left: auto; right: 41.66667%; } .small-pull_6{ left: auto; right: 50%; } .small-pull_7{ left: auto; right: 58.33333%; } .small-pull_8{ left: auto; right: 66.66667%; } .small-pull_9{ left: auto; right: 75%; } .small-pull_10{ left: auto; right: 83.33333%; } .small-pull_11{ left: auto; right: 91.66667%; }');