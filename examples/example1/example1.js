
import { GameEngine } from '../../GameEngine.js'


/** 
 * @author nikeedev
 * 
 * @license MIT
 * @type {HTMLCanvasElement} 
 * 
 * 
 * 
*/


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new GameEngine.Size(canvas.width, canvas.height);

const colors = ["#FFFFFF", "#C0C0C0", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"]


var colorcount1 = 0;
var colorcount2 = 0;


// Example 1: Game and Words variable: Rainbow text and rainbow box moving Rect. 

var config = {
    game_name: "Example 1",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas,
    context: ctx
}


var game = new GameEngine.Game(config);


var words = new GameEngine.Graphics.Text("Hello", new GameEngine.Vector2(30, 38), ScreenSize);

var square = new GameEngine.Graphics.Rect(new GameEngine.Vector2(13, 13), new GameEngine.Size(35, 35), ScreenSize);
    




game.update(() => {
    words.draw(ctx, false)
    words.color = colors[colorcount1];
    colorcount1++;
    if (colorcount1 > colors.length) colorcount1 = 0;

    square.draw(ctx, false);
    if (square.position.x < 93) { 

        square.position.x += 1;

        square.color = colors[colorcount2];
        colorcount2++;
        if (colorcount2 > colors.length) colorcount2 = 0;
    }
    else {
        square.color = "#ffffff"
    }
});


