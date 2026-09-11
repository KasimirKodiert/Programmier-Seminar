// listen to the load-event, indicating that the browser has finished loading, then call main
window.addEventListener("load", main);
// declare necessary variables
let crc2: CanvasRenderingContext2D;

let counter: number = 0;

// main function
function main(_event: Event): void {

    createCanvas(990, 880);

    drawBackground();

    animate();
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
    crc2.fillStyle = "black";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
}

let xBall: number = 0;
let yBall: number = 0;


let xBallSpeed: number = 10;
let yBallSpeed: number = 5;




// the animation loop. Installs a timeout-listener, that calls animate again after a given amount of milliseconds
function animate(): void {
    
    //drawBackground();
    
    xBall = xBall + xBallSpeed;

    yBall = yBall + yBallSpeed;
 
    
    drawBall(xBall, yBall);

    if (yBall > 880) {
        yBallSpeed = yBallSpeed * -1;
    }

    if (xBall > 990) {xBallSpeed = xBallSpeed * -1;
    }
    
    if (yBall < 0) {yBallSpeed = yBallSpeed * -1;
    }
        
    if (xBall < 0) {xBallSpeed = xBallSpeed * -1;
    }
        

    counter++
    requestAnimationFrame(animate)
}


function drawBall(x: number, y: number) {
    crc2.fillStyle = "blue";
    crc2.fillRect(x, y, 30, 30);
}

