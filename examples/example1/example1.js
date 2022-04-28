
import { Vector2, Size, Rect, Text } from '../../GameEngine.js'


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
const ScreenSize = new Size(canvas.width, canvas.height);

const colors = ["#FFFFFF", "#C0C0C0", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"]


var colorcount1 = 0;
var colorcount2 = 0;


// Example 1: Game and Words variable: Rainbow text and rainbow box moving Rect. 


var words = new Text("Hello", new Vector2(30, 38), ScreenSize);


words.update(ctx, ()=>{
    words.color = colors[colorcount1];
    colorcount1++;
    if (colorcount1 > colors.length) colorcount1 = 0;
}, false, true);


var game = new Rect(new Vector2(13, 13), new Size(35, 35), ScreenSize);



game.update(ctx, () => {
    if (game.position.x < 93) { 

        game.position.x += 1;

        game.color = colors[colorcount2];
        colorcount2++;
        if (colorcount2 > colors.length) colorcount2 = 0;
    }
    else {
        game.color = "#ffffff"
    }
}, false, true);


