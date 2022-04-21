

import { Vector2, Size, Sprite, Input, Keys } from '../../dist/GameEngine.js';



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;



let scr = new Screen(200, 200);

scr.init();

scr.setScreenMode("max");



const ScreenSize = new Size(scr.CanvasSize.width, scr.CanvasSize.height);

// Example 6: Using InputManager to control a block:


var game = new Sprite("../../sprites/Black_Square.png", new Vector2(120, 120), ScreenSize);


await game.init();
   


game.update(ctx, () => {

    if (Input.GetKeyDown(Keys.ArrowRight)) 
    {
        game.position.x += 0.5;
    }

    else if (Input.GetKeyDown(Keys.ArrowLeft)) 
    {
        game.position.x -= 0.5;
    } 
    
    else if (Input.GetKeyDown(Keys.ArrowDown)) 
    {
        game.position.y += 0.5;
    }
    
    else if (Input.GetKeyDown(Keys.ArrowUp)) 
    {
        game.position.y -= 0.5;
    }
    

}, true);

/*

*/

