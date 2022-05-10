

import GameEngine from '../../GameEngine.js'



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 40;



const ScreenSize = new GameEngine.Size(canvas.width, canvas.height);

// Example 6: Using InputManager to control a block:


var game = new GameEngine.Graphics.Sprite("../../assets/Black_Square.png", new GameEngine.Vector2(120, 120), ScreenSize);


await game.init();
   


game.update(ctx, () => {
    
    if (GameEngine.Input.GetKeyDown(GameEngine.Keys.ArrowRight)) 
    {
        game.position.x += 0.9;
    }

    else if (GameEngine.Input.GetKeyDown(GameEngine.Keys.ArrowLeft)) 
    {
        game.position.x -= 0.9;
    } 
    
    else if (GameEngine.Input.GetKeyDown(GameEngine.Keys.ArrowDown)) 
    {
        game.position.y += 0.9;
    }
    
    else if (GameEngine.Input.GetKeyDown(GameEngine.Keys.ArrowUp)) 
    {
        game.position.y -= 0.9;
    }
    

}, true);

/*

*/

