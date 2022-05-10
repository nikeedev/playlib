

import GameEngine from '../../GameEngine.js'


/*
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
*/

// Example 5: Use Screen class to create canvas element for you:


let scr = new GameEngine.Display(new GameEngine.Size(200, 200));

scr.init();
 
scr.setScreenMode("max");


const ScreenSize = new GameEngine.Size(scr.CanvasSize.width, scr.CanvasSize.height);



var game = new GameEngine.Graphics.Sprite("../../assets/Black_Square.png", new GameEngine.Vector2(120, 120), ScreenSize);


await game.init();
   


game.update(scr.ctx, () => {

    game.position.x += 1;

}, true);


/*

*/

