

import { Vector2, Keys, Input, Size, Rect, Text, Sprite, Screen } from '../../dist/GameEngine.js';

/*

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;

*/


let scr = new Screen(200, 200);

scr.init();

scr.setScreenMode("max");



const ScreenSize = new Size(scr.CanvasSize.width, scr.CanvasSize.height);

// Example 4: Drawing a sprite: Black Circle


var game = new Sprite("../../sprites/Black_Square.png", new Vector2(120, 120), ScreenSize);


await game.init();
   


game.update(scr.ctx, () => {

    if (Input.GetKeyDown(Keys.ArrowRight)) 
    {
        game.position.x += 0.1;
    }
    

}, true);

/*

*/

/*

var game = new Sprite("../../sprites/Black_Circle.png", new Vector2(120, 120), ScreenSize);

await game.init();
   
game.draw(ctx, false);

/*

*/
