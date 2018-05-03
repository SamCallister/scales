'use strict';

require('../css/style.css');
const scale = require('./scale');

// Only executed our code once the DOM is ready.
window.onload = function () {
    const scales = scale.getScaleComponent('#scale');
    scales.draw()
    scales.drawBlocks(150, 50)
};