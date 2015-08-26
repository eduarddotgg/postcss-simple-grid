var postcss = require('postcss');

module.exports = postcss.plugin('postcss-grid', function (opts) {
    opts = opts || {};
    return function(css, result){

		// css.walkRules(function(rule){
		// 	if (rule.selector === 'grid'){
		// 		console.log(rule.nodes);
		// 	}
		// });
		// css.walkRules('.column', function (rule) {
		// 	if (rule.nodes.indexOf('.column-gutter') >= -1){
		// 		var index = rule.nodes.indexOf('.column-gutter');
		// 		var test = rule.nodes[0];
		// 		console.log(test);
		// 	}
		// });
		// css.walkRules('.s-', function (rule) {
		// 	console.log(rule);
		// });
		css.walkDecls(function(decl){
			if (decl.prop === 'column-type'){
				var columnType = decl.value;
				if (columnType === 'regular'){
					decl.parent.append('float: left; position: relative; width: 100%;');
				}
				decl.remove();
			}
			if (decl.prop === 'column-gutter'){
				var columnGutter = decl.value / 2;
				decl.parent.append('padding: 0 ' + columnGutter + 'px;');
				decl.remove();
			}
			if (decl.prop === 'total-columns'){
				var totalColumns = decl.value;
				var columnClassName = decl.parent.selector + '__';
				for (i = 1; i <= totalColumns; i++){
					var width = ((i / totalColumns) * 100).toFixed(5) * 1;
					decl.parent.parent.append(columnClassName + i + '{width: '+ width + '%; }');
				}
				decl.parent.remove();
			}
		});
    };
});
