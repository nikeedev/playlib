

import { PlayLib } from '../../bin/PlayLib.js';



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 40;


const ScreenSize = new PlayLib.Size(canvas.width, canvas.height);

// Example 6: Using InputManager to control a block:


var config = {
    game_name: "Example 5",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas,
    context: ctx
}


var game = new PlayLib.Game(config);


var spirit = new PlayLib.Sprite("../../assets/Black_Square.png", new PlayLib.Vector2(120, 120), ScreenSize);


await spirit.init();
   

game.update( () => {
    
    spirit.draw(ctx);
    
    if (PlayLib.Event.KeyPressed(PlayLib.Keys.ArrowRight)) 
    {
        spirit.position.x += 0.9;
    }

    else if (PlayLib.Event.KeyPressed(PlayLib.Keys.ArrowLeft)) 
    {
        spirit.position.x -= 0.9;
    } 
    
    else if (PlayLib.Event.KeyPressed(PlayLib.Keys.ArrowDown)) 
    {
        spirit.position.y += 0.9;
    }
    
    else if (PlayLib.Event.KeyPressed(PlayLib.Keys.ArrowUp)) 
    {
        spirit.position.y -= 0.9;
    }
    

});

/*

*/

