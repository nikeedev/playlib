
import { Vector2, Size, Rect, Text, Sprite, Screen } from '../../dist/GameEngine.js';

/** 
 * @author nikeedev
 * 
 * @license MIT
 * @type {HTMLCanvasElement} 
 * 
 * 
 * 
*/
/*

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;

*/

let skjerm = new Screen()

skjerm.SetScreenMode("max")

const ScreenSize = new Size(skjerm.CanvasSize.width, skjerm.CanvasSize.height);

// Example 4: Drawing a sprite: Black Circle


var game = new Sprite("../../sprites/Black_Square.png", new Vector2(120, 120), ScreenSize);


await game.init();
   
game.update(skjerm.ctx, () => {
    
    game.position.x += 1;

}, true);

/*

*/

/*

var game = new Sprite("../../sprites/Black_Circle.png", new Vector2(120, 120), ScreenSize);

await game.init();
   
game.draw(ctx, false);

/*

*/
