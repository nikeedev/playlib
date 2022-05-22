import { GameEngine } from '../../GameEngine.js'



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;


const ScreenSize = new GameEngine.Size(canvas.width, canvas.height);

// Example 4: Drawing a using Sprite class: Black Circle


var config = {
    game_name: "Example 4",
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
   
game.update(() => {

    spirit.draw(ctx)

    spirit.position.x += 1;
})
