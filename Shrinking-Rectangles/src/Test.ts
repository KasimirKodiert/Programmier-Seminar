// listen to the load-event, indicating that the browser has finished loading, then call main
window.addEventListener("load", main);
// declare necessary variables
let crc2: CanvasRenderingContext2D;


// main function
function main(_event: Event): void {
    console.log("Kasimir sagt Hal");
    createCanvas(990, 880);
    drawBackground();



    
    for (let index: number = 0; index < 109; index++) {

        console.log("Zeichne Rechteck " + index);

        crc2.strokeStyle = "black";
        crc2.strokeRect(4 * index, 4 * index, 988 - 8 * index, 878 - 8 * index);
    }

    /*
    crc2.fillStyle = "lightblue";
    crc2.fillRect(1, 1, 988, 878);

    crc2.fillStyle = "lightgreen";
    crc2.fillRect(2, 2, 986, 876);

    crc2.fillStyle = "orange";
    crc2.fillRect(3, 3, 984, 874);

    crc2.fillStyle = "red";
    crc2.fillRect(4, 4, 982, 872);
    */

    //animate();
}

// create a canvas element, append it to the html-document and store the rendering-api as crc2
function createCanvas(_width: number, _height: number): void {
    let canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = _width;
    canvas.height = _height;
    document.body.appendChild(canvas);
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
}

// draw the background image
function drawBackground(): void {
    crc2.fillStyle = "cyan";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
}

// the animation loop. Installs a timeout-listener, that calls animate again after a given amount of milliseconds
function animate(): void {

}