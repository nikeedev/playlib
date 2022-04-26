/** @description This is the testing page for modules and is used by the main page (index.html) */

/*
import { Size } from './dist/Size.js';
import { Rect } from './dist/Rect.js';
import { Vector2 } from './dist/Vector2.js';
import { Text } from './dist/Text.js'; 
import { Sprite } from './dist/Sprite.js'
*/

import * as packagen from './dist/Info.js';
import { Vector2, Size, Rect, Text, Sprite, Screen, Object } from './dist/GameEngine.js';

document.getElementById("version").innerHTML = packagen.version;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new Size(canvas.width, canvas.height);

var object = new Object("./moving.gameengine-obj");

object.load()

const colors = ["#FFFFFF", "#C0C0C0", "#FF00FF", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"]

var colorcount = 0;

var ActivateDown = false

var square = new Rect(new Vector2(1, 1), new Size(20, 20), ScreenSize);


square.update(ctx, () => {

    
    square.color = colors[colorcount];
    colorcount++;
    if (colorcount > colors.length) colorcount = 0;
    
    if (square.position.y >= ScreenSize.height && ActivateDown) {
        square.position = new Vector2(1, 1);
        ActivateDown = false;
        ctx.clearRect(0, 0, ScreenSize.width, ScreenSize.height);
    } 
    else if (square.position.y >= ScreenSize.height) {
        ActivateDown = true;
        square.position = new Vector2(ScreenSize.width, 0);
    }
    else if (ActivateDown) {
        square.position.y += 10;
        square.position.x -= 10;
    }
    
    else {
        square.position.x += 10;
        square.position.y += 10;
    }

    

}, false);




/*

var words = new Text("Simon", new Vector2(10, 120), ScreenSize);

words.update(ctx, () => {
    words.position.x += 0.8;
}, true, true);

/*

*/

/*

var game = new Rect(new Vector2(1500, 1500), new Size(20, 20), ScreenSize);

*/

/*
game.draw(ctx, false)




game.update(ctx, ()=>{
    game.size.width += 0.65;
}, true, true);

/*

*/

