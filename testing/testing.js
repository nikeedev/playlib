import { GameEngine } from '../GameEngine.js'
import { Logging } from '../bin/utils/Logging.js'


/*
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
*/

const ScreenSize = new GameEngine.Size(window.innerWidth - 30, window.innerHeight - 20);


var config = {
    game_name: "Example 8",
    parent_element: "body",
    style: "border: 1px solid black;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: false,
    /*canvas: canvas,
    context: ctx,*/
}


var game = new GameEngine.Game(config);

const sheesh = new GameEngine.Graphics.Text("sheesh", new GameEngine.Vector2(100, 100), ScreenSize);


game.create(()=>{
    sheesh.color = "white";    
})

game.update(() => {
    sheesh.draw(game.context)
    sheesh.position.x += 1;
})

