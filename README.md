# PostCSS Simple Grid

<img align="right" width="57" height="108" title="Dev Kit Main Logo" src="http://adm-designhouse.com/dev-kit-logo.png">

<img align="right" width="108" height="108" title="Philosopher’s stone, logo of PostCSS" src="http://postcss.github.io/postcss/logo.svg" hspace="20">

Simple grid is a simple postcss plugin that will help you create a grid system with minimal settings. There is no need to specify every single column any more.


## Installation
```console
$ npm install postcss-simple-grid
```

## Usage
Setting up with gulp:
```js
var postcss = require('postcss');
var simpleGrid = require('postcss-simple-grid');

gulp.task('css', function(){
	var processors = [
		simpleGrid(separator: '--')
	];
	gulp.src(src + './*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest(root + './'))
});
```
HTML examples
```html
<!-- keep width for all viewport sizes -->
<div class="row">
	<div class="column small--1">column 1</div>
	<div class="column small--1">column 2</div>
	...
	<div class="column small--1">column 12</div>
</div>

<!-- keep width for specified with media query viewport size -->
<div class="row">
	<div class="column medium--1">column 1</div>
	<div class="column medium--1">column 2</div>
	...
	<div class="column medium--1">column 12</div>
</div>
```

### Row
Use ```create-row: 1320px;``` to create a grid wrapper, where ```1320px``` is the grid wrapper's  ```max-width```.
```css
.row {
	create-row: 1320px;
}
```
will compile to:
```css
.row {
	display: block;
	margin: 0 auto;
	max-width: 1320px;
	position: relative;
	width: 100%;
}
.row:before,
.row:after {
	content: " ";
	display: table;
}
.row:after {
	clear: both;
}
```
### Column
Use ```create-column: 40px;``` to create a grid column, where ```40px``` is the column gutter (padding).
```css
.column {
	create-column: 40px;
}
```
will compile to:
```css
.column {
	float: left;
	padding: 0 20px;
	position: relative;
	width: 100%;
}
```
### Grid
Use ```create-grid: 12;``` to create grid columns, where ```12``` is the number of columns.
```css
.small {
	create-grid: 12;
}
/* Use unique class name for media queries for example: */
@media screen and (max-width: 640px;) {
	.medium {
		create-grid: 12;
	}
}
```
will compile to:
```css
.small--1 {
	width: 8.33333%;
}
.small--2 {
	width: 16.66667%;
}
...
.small--12 {
	width: 100%;
}

@media screen and (min-width: 640px) {
	.medium--1 {
		width: 8.33333%;
	}
	.medium--2 {
		width: 16.66667%;
	}
	...
	.medium--12 {
		width: 100%;
	}
}
```

### Offset
Use ```create-offset: 12;``` to create offset columns, where ```12``` is number of offset columns.
```css
.offset{
	create-offset: 12;
}
```
will compile to:
```css
.offset--0 {
	margin-left: 0%;
}
.offset--1 {
	margin-left: 8.33333%;
}
...
.offset--11 {
	margin-left: 91.66667%;
}
```

### Push/Pull
Use ```create-push: 12;``` to create push columns, where ```12``` is number of push columns.
```css
.push {
	create-push: 12;
}
```
will compile to:
```css
.push--0 {
	left: 0%;
	right: auto;
}
.push--1 {
	left: 8.33333%;
	right: auto;
}
...
.push--11 {
	left: 91.66667%;
	right: auto;
}
```
Use ```create-pull: 12;``` to create pull columns, where ```12``` is number of pull columns.
```css
.pull {
	create-pull: 12;
}
```
will compile to:
```css
.pull--0 {
	left: auto;
	right: 0%;
}
.pull--1 {
	left: auto;
	right: 8.33333%;
}
...
.pull--11 {
	left: auto;
	right: 91.66667%;
}
```

It just can't be easier!
