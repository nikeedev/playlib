

import { Vector2, Screen, Size, Sprite } from '../../GameEngine.js'


/*
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
*/

// Example 5: Use Screen class to create canvas element for you:


let scr = new Screen(new Size(200, 200));

scr.init();
 
scr.setScreenMode("max");


const ScreenSize = new Size(scr.CanvasSize.width, scr.CanvasSize.height);



var game = new Sprite("../../sprites/Black_Square.png", new Vector2(120, 120), ScreenSize);


await game.init();
   


game.update(scr.ctx, () => {

    game.position.x += 1;

}, true);


/*

*/

