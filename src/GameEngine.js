import { Player } from './modules/Player.js';
import { Size } from './modules/Size.js';
import { colors, Text } from './modules/Text.js';

/** @type {HTMLCanvasElement} */


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 40;
canvas.height = window.innerHeight - 20;
const ScreenSize = new Size(canvas.width, canvas.height);



var x = 30;
var y = 38;

var colorcount = 0;

var words = new Text("Hello", x, y);


words.update(ctx, ()=>{
    words.color = colors[colorcount];
    colorcount++;
    if (colorcount > colors.length) colorcount = 0;
});


var game = new Player(20, 20, 20, ScreenSize.width, ScreenSize.height)


game.update(ctx, () => {
    game.x += 1;
}, false);


game.draw(ctx);



