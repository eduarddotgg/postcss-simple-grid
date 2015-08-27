var postcss = require('postcss');

module.exports = postcss.plugin('postcss-grid', function (opts) {
    opts = opts || {};
    
    function unitParse(str){
		var returnValue = {};
		var match = str.match(/\d./);
		
		if(str.length) {
			var value = match[0];
			var unit = (str.replace(value, '')).trim();
			returnValue.unit = unit;
			returnValue.value = parseInt(value, 10);
		}
		return returnValue;
	}
    
    return function(css, result){

        css.walkDecls(function (decl){
			if(decl.prop === 'create-row'){
				var selectorName = decl.parent.selector;
				var rowValue = decl.value;
				
				decl.parent.append({prop: 'display', value: 'block'});
				decl.parent.append({prop: 'margin', value: '0 auto'});
				decl.parent.append({prop: 'max-width', value: rowValue});
				decl.parent.append({prop: 'position', value: 'relative'});
				decl.parent.append({prop: 'width', value: '100%'});
				
				// css.insertAfter((selectorName + ':before,' + selectorName + ':after { content: " "; display: table; }' + selectorName + ':after { clear: both;}'));
				
				decl.removeSelf();
			}
			
			if(decl.prop === 'create-column'){
				var selectorName = decl.parent.selector;
				var colGut = unitParse(decl.value);
				
				decl.parent.append({prop: 'float', value: 'left'});
				decl.parent.append({prop: 'padding', value: '0 ' + (colGut.value/2) + colGut.unit});
				decl.parent.append({prop: 'position', value: 'relative'});
				decl.parent.append({prop: 'width', value: '100%'});

				decl.removeSelf();
			}
			
			if(decl.prop === 'create-grid'){
				var totalColumns = decl.value;
				var selectorName = decl.parent.selector + '__';
				for (i = 1; i <= totalColumns; i++){
					var width = ((i / totalColumns) * 100).toFixed(5) * 1;
					decl.parent.parent.append(selectorName + i + '{width: '+ width + '%; }');
				}
				decl.parent.remove();
			}
		});

    };
});
