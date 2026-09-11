"use strict";
// listen to the load-event, indicating that the browser has finished loading, then call main
window.addEventListener("load", main);
// declare necessary variables
let crc2;
// main function
function main(_event) {
    console.log("Kasimir sagt Hal");
    createCanvas(990, 880);
    drawBackground();
    crc2.fillStyle = "lightblue";
    crc2.fillRect(1, 1, 988, 878);
    crc2.fillStyle = "lightgreen";
    crc2.fillRect(2, 2, 986, 876);
    //animate();
}
// create a canvas element, append it to the html-document and store the rendering-api as crc2
function createCanvas(_width, _height) {
    let canvas = document.createElement("canvas");
    canvas.width = _width;
    canvas.height = _height;
    document.body.appendChild(canvas);
    crc2 = canvas.getContext("2d");
}
// draw the background image
function drawBackground() {
    crc2.fillStyle = "cyan";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
}
// the animation loop. Installs a timeout-listener, that calls animate again after a given amount of milliseconds
function animate() {
}
