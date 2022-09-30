import { Playlib } from '../../bin/playlib.js'


/*
const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
*/

// Example 5: Use Screen class to create canvas element for you:



var config = {
    game_name: "Example 4",
    style: "border: 1px solid black; background-color: white;",
    parent_element: "body",
    width: 800,
    height: 800,
    useOwnCanvas: false,
    /*
    canvas: canvas,
    
    */
}


var game = new Playlib.Game(config);



const ScreenSize = new Playlib.Size(game.canvas.width, game.canvas.height);


var spirit = new Playlib.Sprite("../../assets/Black_Square.png", new Playlib.Vector2(120, 120), ScreenSize);


await spirit.init();

game.update((ctx) => {

    spirit.draw(ctx);

    spirit.position.x += 1;

});


