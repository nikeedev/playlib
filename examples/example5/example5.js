

import { Playlib } from '../../bin/playlib.js';



const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 40;


const ScreenSize = new Playlib.Size(canvas.width, canvas.height);

// Example 6: Using InputManager to control a block:


var config = {
    game_name: "Example 5",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas,
    
}


var game = new Playlib.Game(config);


var spirit = new Playlib.Sprite("../../assets/Black_Square.png", new Playlib.Vector2(120, 120), ScreenSize);


await spirit.init();
   

game.update((ctx) => {
    
    spirit.draw(ctx);
    
    if (Playlib.Event.KeyPressed(Playlib.Keys.ArrowRight)) 
    {
        spirit.position.x += 0.9;
    }

    else if (Playlib.Event.KeyPressed(Playlib.Keys.ArrowLeft)) 
    {
        spirit.position.x -= 0.9;
    } 
    
    else if (Playlib.Event.KeyPressed(Playlib.Keys.ArrowDown)) 
    {
        spirit.position.y += 0.9;
    }
    
    else if (Playlib.Event.KeyPressed(Playlib.Keys.ArrowUp)) 
    {
        spirit.position.y -= 0.9;
    }
    

});

/*

*/

