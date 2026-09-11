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

window.onkeydown = (event: KeyboardEvent) => {

    if (event.key == "s") {
        sPressed = true;
    }

    if (event.key == "x") {
        xPressed = true;
    }


    if (event.key == "ArrowUp") {
        upPressed = true;
    }

    if (event.key == "ArrowDown") {
        downPressed = true;
    }
};

window.onkeyup = (event: KeyboardEvent) => {

    if (event.key == "s") {
        sPressed = false;
    }

    if (event.key == "x") {
        xPressed = false;
    }


    if (event.key == "ArrowUp") {
        upPressed = false;
    }
    
    if (event.key == " ") {
        gameRunning = true
    }


    if (event.key == "ArrowDown") {
        downPressed = false;
    }
};

let xBall: number = 495;
let yBall: number = 440;


let xBallSpeed: number = 10;
let yBallSpeed: number = 5;

let yBat: number = 440;

let yBatSpeed: number = 10;


let sPressed: boolean = false;
let xPressed: boolean = false;

let upPressed: boolean = false;
let downPressed: boolean = false;

let yBat2: number = 440;

let gameRunning: boolean = false



// the animation loop. Installs a timeout-listener, that calls animate again after a given amount of milliseconds
function animate(): void {

    drawBackground();

    //Ball bewegen
   if (gameRunning) {xBall = xBall + xBallSpeed;
    yBall = yBall + yBallSpeed;}


    //Linken Bat steuern
    if (sPressed) {
        yBat = yBat - yBatSpeed;
    }
    if (xPressed) {
        yBat = yBat + yBatSpeed;
    }
    //rechterBat
    if (upPressed) {
        yBat2 = yBat2 - yBatSpeed;
    }
    if (downPressed) {
        yBat2 = yBat2 + yBatSpeed
    }



    //Bat zeichnen links
    crc2.fillStyle = "blue";
    crc2.fillRect(40, yBat, 20, 100);

    crc2.fillStyle = "blue";
    crc2.fillRect(930, yBat2, 20, 100);


    //von linkem schläger abprallen
    if (xBall < 60 && yBall > yBat && yBall < yBat + 100) {
        xBallSpeed = xBallSpeed * -1
    }

    if (xBall > 930 && yBall > yBat2 && yBall < yBat2 + 100) {
        xBallSpeed = xBallSpeed * -1
    }

    //Ball zeichnen
    drawBall(xBall, yBall);


    //Von Wänden abprallen

    if (yBall > 880) {
        yBallSpeed = yBallSpeed * -1;
    }

    if (xBall > 990) {
        player2Lost();
    }

    if (yBall < 0) {
        yBallSpeed = yBallSpeed * -1;
    }

    if (xBall < 0) {
        player1Lost();
    }

    requestAnimationFrame(animate)
}



function drawBall(x: number, y: number) {
    crc2.fillStyle = "blue";
    crc2.beginPath();
    crc2.arc(x, y, 15, 0, 2 * Math.PI);
    crc2.fill();
}

function player1Lost() {
    alert("spieler 1 hat verloren")

    throw new Error("A player has lost");
}

function player2Lost() {
    
    alert("spieler 2 hat verloren")

    throw new Error("A player has lost");
}