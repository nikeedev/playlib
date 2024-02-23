import { Playlib } from '../../bin/playlib.js'



const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;


const ScreenSize = new Playlib.Vec2(canvas.width, canvas.height);

// Example 4: Drawing a using Sprite class: Black Circle


var config = {
    game_name: "Example 3",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas,
    
}


var game = new Playlib.Game(config);


var spirit = new Playlib.Sprite("../../assets/Black_Square.png", new Playlib.Vec2(120, 120), ScreenSize);


await spirit.init();
   
game.update((ctx) => {

    spirit.draw(ctx)

    spirit.position.x += 1;
})
