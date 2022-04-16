import { Rect } from '../../src/modules/Rect.js';
import { Size } from '../../src/modules/Size.js';
import { Text } from '../../src/modules/Text.js';
import { Vector2 } from '../../src/modules/Vector2.js';


/** 
 * @author nikeedev
 * 
 * @license MIT
 * @type {HTMLCanvasElement} 
 * 
 * 
 * 
*/


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new Size(canvas.width, canvas.height);



// Example 4: Drawing a sprite: Black Circle


var game = new Sprite("../../src/sprites/Black_Square.png", new Vector2(120, 120), ScreenSize);

await game.init();
   
game.draw(ctx, false);

/*

var game = new Sprite("src/sprites/Black_Circle.png", new Vector2(120, 120), ScreenSize);

await game.init();
   
game.draw(ctx, false);

/*

*/
