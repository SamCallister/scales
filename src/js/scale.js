'use strict';

require('../css/style.css');

function Scale(options) {
	this.svg = d3.select(options.scaleSelector);
	this.legendInfo = options.legendInfo;

	this.plankWidth = 80;
	this.plankHeight = 4;
	this.plankX = 10;
	this.plankY = 78;
	this.blockWidth = 4;
	this.blockHeight = 4;
	this.maxRotation = 25;
	this.plankGroup = this.svg.append('g');
	this.fadeInDuration = 1000;
	this.rotateDuration = 4000;
	this.triangleHeight = 4;
	this.totalNumBlocks = 100;

	return this;
}

Scale.prototype.draw = function draw() {

	const self = this;

	self.plankGroup.append('rect')
		.attr('id', 'plank')
		.attr('x', self.plankX)
		.attr('y', self.plankY)
		.attr('width', self.plankWidth)
		.attr('height', self.plankHeight);

	const midpoint = 50;
	const halfBase = 2;
	const underPoint = self.plankY + self.plankHeight + 1;
	const trianglePoints = [[midpoint, underPoint], [midpoint + halfBase, underPoint + self.triangleHeight], [midpoint - halfBase, underPoint + self.triangleHeight], [midpoint, underPoint]];

	self.svg.append('polygon')
		.attr('points', trianglePoints)
		.attr('stroke', 'black');
};


Scale.prototype.drawBlocks = function drawBlocks(leftPercent, rightPercent) {

	function generateBlockData(numBlocks, xOffset) {
		const blocksList = [];
		const midpointX = (self.plankWidth / 2) - self.blockWidth;
		const xGap = self.blockWidth;
		const yGap = self.blockHeight;
		// get to a certain x and then start stacking them
		for (let i = 0; i < numBlocks; i++) {
			let potX = (i * xGap);
			const yMultiplier = Math.floor(potX / midpointX);
			const y = (self.plankY - yGap) - (yGap * yMultiplier);
			const x = potX % midpointX;
			blocksList.push({
				x: x + xOffset,
				y: y,
				width: self.blockWidth,
				height: self.blockHeight
			});
		}

		return blocksList;
	}

	function draw(blockList, className) {
		const blocks = self.plankGroup.selectAll(`rect.${className}`).data(blockList);

		blocks.enter().append('rect')
			.attr('class', className)
			.attr('x', (d) => {
				return d.x;
			})
			.attr('y', (d) => {
				return d.y;
			})
			.attr('width', (d) => {
				return d.width;
			})
			.attr('height', (d) => {
				return d.height;
			});
	}

	function addPercentText() {

		function getPercentValue(value) {
			return `${Math.round(value * 100, 1)}%`;
		}

		const textGroup = self.svg.append('g');

		const remainderLength = (100 - self.plankWidth) / 2;

		textGroup.append('text')
			.attr('x', remainderLength)
			.attr('y', 35)
			.attr('text-anchor', 'start')
			.text(getPercentValue(leftPercent));

		textGroup.append('text')
			.attr('x', remainderLength + self.plankWidth)
			.attr('y', 35)
			.attr('text-anchor', 'end')
			.text(getPercentValue(rightPercent));
	}

	function addLegend() {

		if (!self.legendInfo) {
			return;
		}

		const legendSvg = d3.select(self.legendInfo.legendSelector);

		legendSvg.append('g')
			.attr('class', 'legend')
			.attr('transform', 'translate(20,20)')
			.attr('height', 10);

		const legendScale = d3.scaleOrdinal()
			.domain([self.legendInfo.leftSideLabel, self.legendInfo.rightSideLabel])
			.range(['red', 'blue']);

		const legend = d3.legendColor()
			.shapeWidth(10)
			.shapeHeight(10)
			.orient('vertical')
			.scale(legendScale)
			.title('wonderous things abound');

		legendSvg.select('.legend')
			.call(legend);
	}

	function rotateScales() {

		function rotateRectangles() {
			const direction = Math.sign(rightNumBlocks - leftNumBlocks);
			const percentRotate = Math.abs(rightNumBlocks - leftNumBlocks) / (leftNumBlocks + rightNumBlocks);
			const deg = percentRotate * self.maxRotation;
			const Xcenter = 50;
			const Ycenter = self.plankY;

			return d3.interpolateString(`rotate(0 ${Xcenter} ${Ycenter})`, `rotate(${deg * direction} ${Xcenter} ${Ycenter})`);
		}

		self.plankGroup.transition()
			.delay(self.fadeInDuration)
			.duration(self.rotateDuration)
			.attrTween('transform', rotateRectangles.bind(null, 25));
	}

	function fadeInBlocks() {
		self.plankGroup.selectAll('.block')
			.transition()
			.duration(self.fadeInDuration)
			.style('opacity', 1);
	}


	const self = this;

	const leftNumBlocks = self.totalNumBlocks * leftPercent;
	const rightNumBlocks = self.totalNumBlocks * rightPercent;

	const leftBlocksList = generateBlockData(leftNumBlocks, self.plankX);
	const rightBlocksList = generateBlockData(rightNumBlocks, (self.plankWidth / 2) + self.plankX + self.blockWidth);

	draw(leftBlocksList, 'block left-block');
	draw(rightBlocksList, 'block right-block');

	fadeInBlocks();
	addPercentText();
	addLegend();
	rotateScales();
};


function drawScale(options) {
	const scale = new Scale(options);
	scale.draw();
	scale.drawBlocks(options.leftPercent, options.rightPercent);

	return scale;
}

module.exports = {
	drawScale
};