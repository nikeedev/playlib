

import { Vector2, Size, Sprite, Input, Keys } from '../../GameEngine.js'



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 40;



const ScreenSize = new Size(canvas.width, canvas.height);

// Example 6: Using InputManager to control a block:


var game = new Sprite("../../assets/Black_Square.png", new Vector2(120, 120), ScreenSize);


await game.init();
   


game.update(ctx, () => {
    
    if (Input.GetKeyDown(Keys.ArrowRight)) 
    {
        game.position.x += 0.9;
    }

    else if (Input.GetKeyDown(Keys.ArrowLeft)) 
    {
        game.position.x -= 0.9;
    } 
    
    else if (Input.GetKeyDown(Keys.ArrowDown)) 
    {
        game.position.y += 0.9;
    }
    
    else if (Input.GetKeyDown(Keys.ArrowUp)) 
    {
        game.position.y -= 0.9;
    }
    

}, true);

/*

*/

