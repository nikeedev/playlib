import { Player } from './Player.js';
import { Size } from './Size.js';

/** @type {HTMLCanvasElement} */


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 40;
canvas.height = window.innerHeight - 20;
const ScreenSize = new Size(canvas.width, canvas.height);


var x = 20;
var y = 20;

var game = new Player(x, y, 20, ScreenSize.width, ScreenSize.height)

/*
game.update(ctx, () => {
    game.x += 1;
});
*/
game.draw(ctx);



