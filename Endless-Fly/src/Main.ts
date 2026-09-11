// listen to the load-event, indicating that the browser has finished loading, then call main
window.addEventListener("load", main);
// declare necessary variables
let crc2: CanvasRenderingContext2D;


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


window.onkeyup = (event: KeyboardEvent) => {

    if (event.key == " ") {
        ySpaceShipSpeed = ySpaceShipSpeed * -1
    }



};

let xEnemySpeed: number = 10;

let ySpaceShipSpeed: number = 5;

let ySpaceShip: number = 440;

let xEnemy: number = 980

let xDistance: number;

let yDistance: number;

let totalDistance: number;

let enemySize: number = 300

// the animation loop. Installs a timeout-listener, that calls animate again after a given amount of milliseconds
function animate(): void {

    drawBackground();

    drawSpaceShip();

    crc2.beginPath();
    crc2.fillStyle = "red";
    crc2.arc(xEnemy, 440, enemySize, 0, 2 * Math.PI)
    crc2.fill();

    //Wenn SpaceShip Rand von Enemy berührt, verlieren
    xDistance = xEnemy - 100;

    yDistance = 440 - ySpaceShip;

    totalDistance = Math.sqrt(xDistance ** 2 + yDistance ** 2);

    if (totalDistance < enemySize) {
        youarelost();
    }

    // Verlieren bei Wände berühren 
    if (ySpaceShip < 0) {
        youarelost();
    }

    if (ySpaceShip > 880) {
        youarelost();
    }

    //ySpaceShip = ySpaceShip + ySpaceShipSpeed
    ySpaceShip += ySpaceShipSpeed

    xEnemy -= xEnemySpeed

    requestAnimationFrame(animate)
}

function drawSpaceShip() {
    crc2.beginPath();
    crc2.fillStyle = "blue";
    crc2.arc(100, ySpaceShip, 15, 0, 2 * Math.PI);
    crc2.fill();
}

function youarelost() {


    alert("du bist schlech in diesem spiel")
    throw new Error("youarelost");
}
