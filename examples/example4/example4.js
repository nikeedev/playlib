import { Rect } from '../../modules/Rect.js';
import { Size } from '../../modules/Size.js';
import { Text } from '../../modules/Text.js';
import { Vector2 } from '../../modules/Vector2.js';
import { Sprite } from '../../modules/Sprite.js';

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


var game = new Sprite("../../sprites/Black_Square.png", new Vector2(120, 120), ScreenSize);

await game.init();
   
game.update(ctx, () => {
    
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
