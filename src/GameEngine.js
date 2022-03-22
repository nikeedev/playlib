import { Player } from './modules/Player.js';
import { Size } from './modules/Size.js';
import { Text } from './modules/Text.js';

/** @type {HTMLCanvasElement} */


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 40;
canvas.height = window.innerHeight - 20;
const ScreenSize = new Size(canvas.width, canvas.height);

const colors = ["#FFFFFF", "#C0C0C0", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"]


var x = 30;
var y = 38;

var colorcount1 = 0;
var colorcount2 = 0;



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


game.draw(ctx);



