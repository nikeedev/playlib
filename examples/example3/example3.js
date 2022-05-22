
import { GameEngine } from '../../GameEngine.js'


/** 
 * @author nikeedev
 * 
 * @license MIT
 * @type {HTMLCanvasElement} 
 * 
 * 
*/


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new GameEngine.Size(canvas.width, canvas.height);



// Example 3: Game3 variable: a Rect that moves after your mouse ( both x and y). If holding mouse down (any button) it will stop clearing the screen and leave the mark until mouse buttons get released


var config = {
    game_name: "Example 3",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas,
    context: ctx
}


var game = new GameEngine.Game(config);



var game3 = new GameEngine.Graphics.Rect(new GameEngine.Vector2(ScreenSize.width/2, ScreenSize.height/2), new GameEngine.Size(20, 20), ScreenSize);


let isDrawing = false;


canvas.addEventListener('mousedown', e => {
    game3.position.x = e.clientX-10;
    game3.position.y = e.clientY-15;
    isDrawing = true;
});
  
canvas.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        game3.position.x = e.clientX-10;
        game3.position.y = e.clientY-15;

        game3.draw(ctx, false);
    }
});
  
window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        game3.position.x = -game3.size.width;
        game3.position.y = -game3.size.height;
        game3.draw(ctx, false);
        isDrawing = false;
    }
});

game.update(() => {
    if (GameEngine.Input.GetKeyDown(GameEngine.Keys.Space)) {
        ctx.clearRect(0, 0, ScreenSize.width, ScreenSize.height);
    }
})

/*

*/

