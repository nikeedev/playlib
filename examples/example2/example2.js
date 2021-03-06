
import { Playlib } from '../../bin/playlib.js'


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

canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new Playlib.Size(canvas.width, canvas.height);

const colors = ["#FFFFFF", "#C0C0C0", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"]

var colorcount = 0;
var ActivateUp = false; 
var ActivateDown = false;


// Example 2: Canvas painting of rainbow rectangles that move around.

var config = {
    game_name: "Example 2",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas,
    
}


var game = new Playlib.Game(config);



var game2 = new Playlib.Rect(new Playlib.Vector2(0, 0), new Playlib.Size(1, 1), ScreenSize)


game.update((ctx) => { 
    game2.draw(ctx);

    if (ActivateUp == false && canvas.height <= game2.position.y) {
        ActivateUp = true;
    }
    if (ActivateDown == false && -2 >= game2.position.y) {
        ActivateDown = true;
        ActivateUp = false;
    }

    if (ActivateUp) {
        game2.position.x += 1;
        game2.position.y -= 1;
        game2.size.width -= 0.1;
        game2.size.height -= 0.1;


        game2.color = colors[colorcount];
        colorcount--;
        if (colorcount < 0) colorcount = colors.length;
    }
    else if (ActivateDown && game2.position.x >= 0) {
    
        game2.position.x -= 1;

        

        game2.color = colors[colorcount];
        colorcount++;
        if (colorcount > colors.length) colorcount = 0;

    }
    else {
        game2.position.x += 1;
        game2.position.y += 1;
        game2.size.width += 0.1;
        game2.size.height += 0.1;



        game2.color = colors[colorcount];
        colorcount++;
        if (colorcount > colors.length) colorcount = 0;
    }
    
}, false);


