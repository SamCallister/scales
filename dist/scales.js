var scales=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t){return this.svg=d3.select(t.scaleSelector),this.legendInfo=t.legendInfo,this.leftColor=t.leftColor,this.rightColor=t.rightColor,this.plankWidth=80,this.plankHeight=4,this.plankX=10,this.plankY=78,this.blockWidth=4,this.blockHeight=4,this.maxRotation=25,this.plankGroup=this.svg.append("g"),this.fadeInDuration=1e3,this.rotateDuration=4e3,this.triangleHeight=4,this.totalNumBlocks=100,this}n(1),r.prototype.draw=function(){var t=this;t.plankGroup.append("rect").attr("id","plank").attr("x",t.plankX).attr("y",t.plankY).attr("width",t.plankWidth).attr("height",t.plankHeight);var e=t.plankY+t.plankHeight+1,n=[[50,e],[52,e+t.triangleHeight],[48,e+t.triangleHeight],[50,e]];t.svg.append("polygon").attr("points",n).attr("stroke","black")},r.prototype.drawBlocks=function(t,e){function n(t,e){for(var n=[],r=o.plankWidth/2-o.blockWidth,i=o.blockWidth,a=o.blockHeight,l=0;l<t;l++){var s=l*i,c=Math.floor(s/r),u=o.plankY-a-a*c,f=s%r;n.push({x:f+e,y:u,width:o.blockWidth,height:o.blockHeight})}return n}function r(t,e,n){o.plankGroup.selectAll("rect.".concat(e)).data(t).enter().append("rect").attr("class",e).attr("x",function(t){return t.x}).attr("y",function(t){return t.y}).attr("width",function(t){return t.width}).attr("height",function(t){return t.height}).attr("fill",n)}var o=this,i=o.totalNumBlocks*t,a=o.totalNumBlocks*e,l=n(i,o.plankX),s=n(a,o.plankWidth/2+o.plankX+o.blockWidth);r(l,"block left-block",o.leftColor),r(s,"block right-block",o.rightColor),o.plankGroup.selectAll(".block").transition().duration(o.fadeInDuration).style("opacity",1),function(){function n(t){return"".concat(Math.round(100*t,1),"%")}var r=o.svg.append("g"),i=(100-o.plankWidth)/2;r.append("text").attr("x",i).attr("y",35).attr("text-anchor","start").text(n(t)),r.append("text").attr("x",i+o.plankWidth).attr("y",35).attr("text-anchor","end").text(n(e))}(),function(){if(o.legendInfo){var t=d3.select(o.legendInfo.legendSelector);t.append("g").attr("class","legend").attr("transform","translate(20,20)").attr("height",10);var e=d3.scaleOrdinal().domain([o.legendInfo.leftSideLabel,o.legendInfo.rightSideLabel]).range([o.leftColor,o.rightColor]),n=d3.legendColor().shapeWidth(10).shapeHeight(10).orient("vertical").scale(e).title(o.legendInfo.legendTitle);t.select(".legend").call(n)}}(),o.plankGroup.transition().delay(o.fadeInDuration).duration(o.rotateDuration).attrTween("transform",function(){var t=Math.sign(a-i),e=Math.abs(a-i)/(i+a)*o.maxRotation,n=o.plankY;return d3.interpolateString("rotate(0 ".concat(50," ").concat(n,")"),"rotate(".concat(e*t," ").concat(50," ").concat(n,")"))}.bind(null,25))},t.exports={drawScale:function(t){var e=new r(t);return e.draw(),e.drawBlocks(t.leftPercent,t.rightPercent),e}}},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);n(4)(r,{hmr:!0,transform:void 0}),r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".left-block {\n    stroke: white;\n}\n\n.right-block {\n    stroke: white;\n}\n\n.block {\n    opacity: 0;\n    stroke-width: 0.1;\n}\n\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n,r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var i=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[r].concat(a).concat([i]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i,a={},l=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=(i={},function(t){if(void 0===i[t]){var e=function(t){return document.querySelector(t)}.call(this,t);if(e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}i[t]=e}return i[t]}),c=null,u=0,f=[],p=n(5);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(k(r.parts[i],e))}else{var l=[];for(i=0;i<r.parts.length;i++)l.push(k(r.parts[i],e));a[r.id]={id:r.id,refs:1,parts:l}}}}function h(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function g(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);0<=e&&f.splice(e,1)}function v(t){var e=document.createElement("style");return t.attrs.type="text/css",y(e,t.attrs),g(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function k(t,e){var n,r,o,i,a,l;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var s=u++;n=c||(c=v(e)),r=x.bind(null,n,s,!1),o=x.bind(null,n,s,!0)}else o=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=e,l=document.createElement("link"),a.attrs.type="text/css",a.attrs.rel="stylesheet",y(l,a.attrs),g(a,l),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=p(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,n=l,e),function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),function(){b(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=l()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var i=n[o];(l=a[i.id]).refs--,r.push(l)}for(t&&d(h(t,e),e),o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete a[l.id]}}}};var m,w=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);