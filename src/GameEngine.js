import { Player } from './modules/Player.js';
import { Size } from './modules/Size.js';
import { Text } from './modules/Text.js';


/** @type {HTMLCanvasElement} */


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 565;
const ScreenSize = new Size(canvas.width, canvas.height);

const colors = ["#FFFFFF", "#C0C0C0", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"]


var x = 30;
var y = 38;

var colorcount1 = 0;
var colorcount2 = 0;

/*

var words = new Text("Hello", x, y);


words.update(ctx, ()=>{
    words.color = colors[colorcount1];
    colorcount1++;
    if (colorcount1 > colors.length) colorcount1 = 0;
}, 100);


var game = new Player(13, 13, 35, ScreenSize.width, ScreenSize.height)


game.update(ctx, () => {
    if (game.x < 93) { 

        game.x += 1;

        game.color = colors[colorcount2];
        colorcount2++;
        if (colorcount2 > colors.length) colorcount2 = 0;
    }
    else {
        game.x += 0;
        game.color = "#ffffff"
    }
}, false, 100);

var game2 = new Player(0, 0, 20, ScreenSize.width, ScreenSize.height)


game2.update(ctx, () => {

    game2.x += 1;
    game2.y += 1.2;

    game2.size += 0.1;

    game2.color = colors[colorcount2];
    colorcount2++;
    if (colorcount2 > colors.length) colorcount2 = 0;
}, false, 0);

*/

var game3 = new Player(ScreenSize.width/2, ScreenSize.height/2, 20, ScreenSize.width, ScreenSize.height);


game3.update(ctx, () => {
    
    canvas.addEventListener('mousemove', setmousepos);
    if (!mouseDown) {
        game3.draw(ctx)
    }

}, 0);


function setmousepos(e) {
    game3.x = e.clientX-15;
    game3.y = e.clientY-20;
}

var mouseDown = 0;

document.body.onmousedown = function() { 
    ++mouseDown;
}

document.body.onmouseup = function() {
    --mouseDown;
}
