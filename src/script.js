import { Player } from './Player.js';

/** @type {HTMLCanvasElement} */


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 40;
canvas.height = window.innerHeight - 20;
const screenWidth = canvas.width;
const screenHeight = canvas.height;


var x = 20
var y = 20

var game = new Player(x, y, 20, screenWidth, screenHeight)

/*
game.update(ctx, () => {
    game.x += 1;
});
*/
game.draw(ctx);



