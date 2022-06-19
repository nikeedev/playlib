/** @description This is the testing page for modules and is used by the main page (index.html) */


import { PlayLib } from './bin/PlayLib.js'


document.getElementById("version").innerHTML = PlayLib.version;

const one_second = 1000;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.outerWidth;
canvas.height = window.outerHeight;
const ScreenSize = new PlayLib.Size(canvas.width, canvas.height);

var config = {
    game_name: "Main",
    style: "background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas,
    context: ctx
}


var game = new PlayLib.Game(config);


const colors = ["#FFFFFF", "#C0C0C0", "#FF00FF", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"]

var colorcount = 0;

var ActivateDown = false

var square = new PlayLib.Rect(new PlayLib.Vector2(1, 1), new PlayLib.Size(20, 20), ScreenSize);


game.update(()=>{
    

    square.draw(ctx, false);

    square.color = colors[colorcount];
    colorcount++;
    if (colorcount > colors.length) colorcount = 0;
    
    if (square.position.y >= ScreenSize.height && ActivateDown) {
        square.position = new PlayLib.Vector2(1, 1);
        ActivateDown = false;
        ctx.clearRect(0, 0, ScreenSize.width, ScreenSize.height);
    } 
    else if (square.position.y >= ScreenSize.height) {
        ActivateDown = true;
        square.position = new PlayLib.Vector2(ScreenSize.width, 0);
    }
    else if (ActivateDown) {
        square.position.y += 10;
        square.position.x -= 10;
    }
    
    else {
        square.position.x += 10;
        square.position.y += 10;
    }

})



