//initializing GLOBAL variables to create a canvas
let canvasDiv;
let canvas;
let ctx;
let WIDTH = 1080;
let HEIGHT = 1080;
let initialized = false;

// Mouse position and mouse click
let mouseX = 0;
let mouseY = 0;
let mousePos = {
    x: 0,
    y: 0
};
let mouseClick = {
    x: 0,
    y: 0
};
let mouseClickX = 0;
let mouseClickY = 0;

// Creating canvas
function init() {
    canvasDiv = document.createElement("div");
    canvasDiv.id = "gamescreen";
    canvas = document.createElement('canvas');
    canvasDiv.appendChild(canvas);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(canvasDiv, currentDiv);
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    document.getElementById("gamescreen").style.width = canvas.WIDTH + 'px';
    document.getElementById("gamescreen").style.height = canvas.HEIGHT + 'px';
    ctx = canvas.getContext('2d');
    initialized = true;
}

// Creating the square 
class Square {
    constructor(w, h, x, y, c) {
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.color = c;
        this.spliced = false;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
}

let Square = (WIDTH/3,HEIGHT/3,x,y,"red")

// Mouseclick position and getting the mouseclick position
addEventListener('mousedown', mouseClick);

function mouseClick() {
    console.log(`Screen X/Y: ${e.screenX}, ${e.screenY}, Client X/Y: ${e.clientX}, ${e.clientY}`);
    mouseClickX = e.clientX;
    mouseClickY = e.clientY;
    mouseClicks = {
        x: mouseClickX,
        y: mouseClickY
    };
}

// Draws text on canvas
function drawText(color, font, align, base, text, x, y) {
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.textAlign = align;
    ctx.textBaseline = base;
    ctx.fillText(text, x, y);
}

// Updates
function update(); {
    if (enemy == mouseClickX && mouseClickY);
    Square.spliced = true;
    // add +1 to scoreboard
}

// Sets timer that constantly makes square appear and disappear (3000 = 3 secs)
// https://www.w3schools.com/js/js_timing.asp
// enemy, 3000
var squareAppearing = setInterval(() => {
    enemy,
    3000
}, interval);

// Random square position
function enemy(); {

}

// Set up scoreboard
function scoreboard() {
    drawText('black', "24px Helvetica", "left", "top", "mouseclick: " + mouseClickX + " " + mouseClickY, 0, 32);
    drawText('black', "24px Helvetica", "left", "top", "Score:" + "[Points]");
}

function main() {
    now = performance.now();
    delta = now - then;
    gDelta = (Math.min(delta, 17));
    fps = Math.ceil(1000 / gDelta);
    if (initialized) {
        update(gDelta);
        draw();
    }
    then = now;
    requestAnimationFrame(main);
}