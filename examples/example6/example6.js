

import { GameEngine } from '../../GameEngine.js';



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 40;


const ScreenSize = new GameEngine.Size(canvas.width, canvas.height);

// Example 6: Using InputManager to control a block:


var config = {
    game_name: "Example 6",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas,
    context: ctx
}


var game = new GameEngine.Game(config);


var spirit = new GameEngine.Graphics.Sprite("../../assets/Black_Square.png", new GameEngine.Vector2(120, 120), ScreenSize);


await spirit.init();
   

game.update( () => {
    
    spirit.draw(ctx);
    
    if (GameEngine.Input.GetKeyDown(GameEngine.Keys.ArrowRight)) 
    {
        spirit.position.x += 0.9;
    }

    else if (GameEngine.Input.GetKeyDown(GameEngine.Keys.ArrowLeft)) 
    {
        spirit.position.x -= 0.9;
    } 
    
    else if (GameEngine.Input.GetKeyDown(GameEngine.Keys.ArrowDown)) 
    {
        spirit.position.y += 0.9;
    }
    
    else if (GameEngine.Input.GetKeyDown(GameEngine.Keys.ArrowUp)) 
    {
        spirit.position.y -= 0.9;
    }
    

});

/*

*/

