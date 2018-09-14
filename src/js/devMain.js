'use strict';

const scale = require('./scale');

// Only executed our code once the DOM is ready.
window.onload = function () {
	scale.drawScale({
		scaleSelector: '#scale',
		leftPercent: 0.8,
		rightPercent: 0.2,
		leftColor: 'green',
		rightColor: 'blue',
		legendInfo: {
			legendSelector: '#legend',
			legendTitle: 'Red vs Blue',
			leftSideLabel: 'Republican',
			rightSideLabel: 'Democrat'
		}
	});
};