/** @type {HTMLCanvasElement} */


import { Size } from './src/modules/Size.js';
import { Rect } from './src/modules/Rect.js';
import { Vector2 } from './src/modules/Vector2.js';
import { Text } from './src/modules/Text.js'; 
import { Sprite } from './src/modules/Sprite.js'
import * as packagen from './src/modules/Info.js';


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new Size(canvas.width, canvas.height);


packagen.info();

/*

var words = new Text("Simon", new Vector2(10, 120), ScreenSize);

words.update(ctx, () => {
    words.position.x += 0.8;
}, true, true);

/*

*/

/*

var game = new Rect(new Vector2(40, 40), new Size(20, 20), ScreenSize);

*/

/*
game.draw(ctx, false)




game.update(ctx, ()=>{
    game.size.width += 0.65;
}, true, true);

/*

*/

var game = new Sprite("src/sprites/Black_Circle.png", new Vector2(120, 120), ScreenSize);

await game.init();
   
game.draw(ctx, false);


/*

*/