import { PlayLib } from '../../bin/PlayLib.js'



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;


const ScreenSize = new PlayLib.Size(canvas.width, canvas.height);

// Example 4: Drawing a using Sprite class: Black Circle


var config = {
    game_name: "Example 3",
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
   
game.update(() => {

    spirit.draw(ctx)

    spirit.position.x += 1;
})
