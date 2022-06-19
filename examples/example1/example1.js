
import { PlayLib } from '../../bin/PlayLib.js'


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
const ScreenSize = new PlayLib.Size(canvas.width, canvas.height);

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


var game = new PlayLib.Game(config);


var words = new PlayLib.Text("Hello", new PlayLib.Vector2(60, 88), ScreenSize);

var square = new PlayLib.Rect(new PlayLib.Vector2(43, 43), new PlayLib.Size(65, 65), ScreenSize);

console.log(words.font)
words.font = "40px Arial"
console.log(words.font)


game.update(() => {
    words.draw(ctx, false)
    words.color = colors[colorcount1];
    colorcount1++;
    if (colorcount1 > colors.length) colorcount1 = 0;

    square.draw(ctx, false);
    if (square.position.x < 167) { 

        square.position.x += 1;

        square.color = colors[colorcount2];
        colorcount2++;
        if (colorcount2 > colors.length) colorcount2 = 0;
    }
    else {
        square.color = "#ffffff"
    }
});


