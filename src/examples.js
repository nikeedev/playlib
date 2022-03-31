import { Rect } from './modules/Rect.js';
import { Size } from './modules/Size.js';
import { Text } from './modules/Text.js';
import { Player } from './modules/Player.js';

/** @type {HTMLCanvasElement} */


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new Size(canvas.width, canvas.height);

const colors = ["#FFFFFF", "#C0C0C0", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"]


var x = 30;
var y = 38;

var colorcount1 = 0;
var colorcount2 = 0;

var ActivateUp = false;
var ActivateDown = false;

/*


// Game and Words variable: Rainbow text and rainbox moving Rect. 

var words = new Text("Hello", x, y, ScreenSize);


words.update(ctx, ()=>{
    words.color = colors[colorcount1];
    colorcount1++;
    if (colorcount1 > colors.length) colorcount1 = 0;
}, 100);


var game = new Rect(13, 13, 35, ScreenSize)


game.update(ctx, () => {
    if (game.x < 93) { 

        game.x += 1;

        game.color = colors[colorcount2];
        colorcount2++;
        if (colorcount2 > colors.length) colorcount2 = 0;
    }
    else {
        game.color = "#ffffff"
    }
}, false, 100);



/*
// Game2: Canvas painting of rainbow rectangles that move around.
var game2 = new Rect(0, 0, 1, ScreenSize)


game2.update(ctx, () => {


    if (ActivateUp == false && canvas.height <= game2.y) {
        ActivateUp = true;
    }
    if (ActivateDown == false && -2 >= game2.y) {
        ActivateDown = true;
        ActivateUp = false;
    }

    if (ActivateUp) {
        game2.x += 1;
        game2.y -= 1;
        game2.size.width -= 0.1;
        game2.size.height -= 0.1;


        game2.color = colors[colorcount2];
        colorcount2--;
        if (colorcount2 < 0) colorcount2 = colors.length;
    }
    else if (ActivateDown && game2.x >= 0) {
    
        game2.x -= 1;

        

        game2.color = colors[colorcount2];
        colorcount2++;
        if (colorcount2 > colors.length) colorcount2 = 0;

    }
    else {
        game2.x += 1;
        game2.y += 1;
        game2.size.width += 0.1;
        game2.size.height += 0.1;



        game2.color = colors[colorcount2];
        colorcount2++;
        if (colorcount2 > colors.length) colorcount2 = 0;
    }
    


}, false);

*/


// Game3 variable: a Rect that moves after your mouse ( both x and y). If holding mouse down (any button) it will stop clearing the screen and leave the mark untill mouse buttons get released

var game3 = new Rect(ScreenSize.width/2, ScreenSize.height/2, new Size(20, 20), ScreenSize);


let buffer = document.createElement('canvas');
buffer.width = canvas.width;
buffer.height = canvas.height;

let bufferCtx = buffer.getContext('2d');

canvas.addEventListener('mousemove', setmousepos);
game3.update(ctx, () => {
    ctx.clearRect(0, 0, ScreenSize.width, ScreenSize.height);
    if (!mouseDown) {
        game3.draw(ctx);
    } else {
        game3.update(bufferCtx, ()=>{}, false, false);
    }
    ctx.drawImage(buffer, 0, 0);
}, false, true);


function setmousepos(e) {
    game3.x = e.clientX-15;
    game3.y = e.clientY-20;
}

var mouseDown = false;

document.body.onmousedown = function(e) {
    if (e.button == 2) { // Right mouse button
        game3.loop = false; // Stop sketch
    } else {
        mouseDown = true;
    } 
}

document.body.onmouseup = function() {
    mouseDown = false;
}

/*

*/

