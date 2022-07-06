/** @description This is the testing page for modules and is used by the main page (index.html) */


import { Playlib } from './bin/playlib.js'


document.getElementById("version").innerHTML = Playlib.version;

const one_second = 1000;
const canvas = document.getElementById("canvas");
canvas.width = window.outerWidth;
canvas.height = window.outerHeight;
const ScreenSize = new Playlib.Size(canvas.width, canvas.height);

var config = {
    style: "background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas
}


var game = new Playlib.Game(config);


const colors = ["#FFFFFF", "#C0C0C0", "#FF00FF", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"]

var colorcount = 0;

var ActivateDown = false


var square = new Playlib.Rect(new Playlib.Vector2(1, 1), new Playlib.Size(20, 20), ScreenSize);


game.update((ctx)=>{
    

    square.draw(ctx);

    square.color = colors[colorcount];
    colorcount++;
    if (colorcount > colors.length) colorcount = 0;
    
    if (square.position.y >= ScreenSize.height && ActivateDown) {
        square.position = new Playlib.Vector2(1, 1);
        ActivateDown = false;
        ctx.clearRect(0, 0, ScreenSize.width, ScreenSize.height);
    } 
    else if (square.position.y >= ScreenSize.height) {
        ActivateDown = true;
        square.position = new Playlib.Vector2(ScreenSize.width, 0);
    }
    else if (ActivateDown) {
        square.position.y += 10;
        square.position.x -= 10;
    }
    
    else {
        square.position.x += 10;
        square.position.y += 10;
    }

}, false)



