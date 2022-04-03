import { Rect } from './Rect.js';
import { Size } from './Size.js';
import { Text } from './Text.js';
import { Vector2 } from './Vector2.js';
import { Player } from './Player.js';

/** 
 * @author nikeedev
 * 
 * @license MIT
 * @type {HTMLCanvasElement} 
 * 
 * 
 * 
*/


const canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new Size(canvas.width, canvas.height);

const colors = ["#FFFFFF", "#C0C0C0", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"]


var colorcount1 = 0;
var colorcount2 = 0;

var ActivateUp = false;
var ActivateDown = false;



/*
// Game and Words variable: Rainbow text and rainbox moving Rect. 

var words = new Text("Hello", 30, 38, ScreenSize);


words.update(ctx, ()=>{
    words.color = colors[colorcount1];
    colorcount1++;
    if (colorcount1 > colors.length) colorcount1 = 0;
}, false, true);


var game = new Rect(13, 13, new Size(35, 35), ScreenSize)


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
}, false, true);


/*

*/



// Game2: Canvas painting of rainbow rectangles that move around.
var game2 = new Rect(new Vector2(0, 0), new Size(1, 1), ScreenSize)


game2.update(ctx, () => {


    if (ActivateUp == false && canvas.height <= game2.position.y) {
        ActivateUp = true;
    }
    if (ActivateDown == false && -2 >= game2.position.y) {
        ActivateDown = true;
        ActivateUp = false;
    }

    if (ActivateUp) {
        game2.position.x += 1;
        game2.position.y -= 1;
        game2.size.width -= 0.1;
        game2.size.height -= 0.1;


        game2.color = colors[colorcount2];
        colorcount2--;
        if (colorcount2 < 0) colorcount2 = colors.length;
    }
    else if (ActivateDown && game2.position.x >= 0) {
    
        game2.position.x -= 1;

        

        game2.color = colors[colorcount2];
        colorcount2++;
        if (colorcount2 > colors.length) colorcount2 = 0;

    }
    else {
        game2.position.x += 1;
        game2.position.y += 1;
        game2.size.width += 0.1;
        game2.size.height += 0.1;



        game2.color = colors[colorcount2];
        colorcount2++;
        if (colorcount2 > colors.length) colorcount2 = 0;
    }
    


}, false, true);


/*

*/

// Game3 variable: a Rect that moves after your mouse ( both x and y). If holding mouse down (any button) it will stop clearing the screen and leave the mark untill mouse buttons get released


var game3 = new Rect(new Vector2(ScreenSize.width/2, ScreenSize.height/2), new Size(20, 20), ScreenSize);


let isDrawing = false;


canvas.addEventListener('mousedown', e => {
    game3.position.x = e.clientX-10;
    game3.position.y = e.clientY-15;
    isDrawing = true;
});
  
canvas.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        game3.position.x = e.clientX-10;
        game3.position.y = e.clientY-15;

        game3.draw(ctx, false);
    }
});
  
window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        game3.position.x = -game3.size.width;
        game3.position.y = -game3.size.height;
        game3.draw(ctx, false);
        isDrawing = false;
    }
});

/*

*/

