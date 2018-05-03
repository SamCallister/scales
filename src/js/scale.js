'use strict';

function Scale(selector) {
    this.svg = d3.select(selector);
    const svgWidth = this.svg.attr('width');
    const svgHeight = this.svg.attr('height');
    this.plankWidth = 80;
    this.plankHeight = 1;
    this.plankX = 10;
    this.plankY = 48;
    this.blockWidth = 2;
    this.blockHeight = 2;
    this.maxRotation = 25;
    this.plankGroup = this.svg.append('g')
        .style('transform-origin', 'center');
    this.fadeInDuration = 1000;
    this.rotateDuration = 4000;

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
    const triangleHeight = 2;
    const underPoint = self.plankY + self.plankHeight + 1;
    const trianglePoints = [[midpoint, underPoint], [midpoint + halfBase, underPoint + triangleHeight], [midpoint - halfBase, underPoint + triangleHeight], [midpoint, underPoint]];

    self.svg.append('polygon')
        .attr('points', trianglePoints)
        .attr('stroke', 'black');
};


Scale.prototype.drawBlocks = function drawBlocks(left, right) {

    function generateBlockData(numBlocks, xOffset) {
        const blocksList = [];
        const midpointX = (self.plankWidth / 2) - self.blockWidth;
        const xGap = self.blockWidth;
        const yGap = self.blockHeight;
        // get up to certain x and then start stacking them
        for (let i = 0; i < numBlocks; i++) {
            let potX = (i * xGap);
            const yMultiplier = Math.floor(potX / midpointX);
            const y = (self.plankY - yGap) - (yGap * yMultiplier);
            const x = potX % midpointX
            blocksList.push({
                x: x + xOffset,
                y: y,
                width: self.blockWidth,
                height: self.blockHeight
            })
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
                return d.y
            })
            .attr('width', (d) => {
                return d.width;
            })
            .attr('height', (d) => {
                return d.height;
            })
    }

    function rotateScales() {

        function rotateRectangles(final) {
            const direction = Math.sign(right - left);
            const percentRotate = Math.abs(right - left) / (left + right);
            const deg = percentRotate * self.maxRotation;
            return d3.interpolateString("rotate(0)", `rotate(${deg * direction})`);
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
    const leftBlocksList = generateBlockData(left, self.plankX);
    const rightBlocksList = generateBlockData(right, (self.plankWidth / 2) + self.plankX + self.blockWidth);

    draw(leftBlocksList, 'block left-block');
    draw(rightBlocksList, 'block right-block');

    fadeInBlocks();

    rotateScales();
}

function getScaleComponent(selector) {
    return new Scale(selector);
}

module.exports = {
    getScaleComponent
}