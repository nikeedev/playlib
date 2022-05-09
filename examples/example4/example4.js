import GameEngine from '../../GameEngine.js'



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;


const ScreenSize = new GameEngine.Size(canvas.width, canvas.height);

// Example 4: Drawing a using Sprite class: Black Circle


var game = new GameEngine.Graphics.Sprite("../../sprites/Black_Square.png", new GameEngine.Vector2(120, 120), ScreenSize);


await game.init();
   


game.update(ctx, () => {

    game.position.x += 1;

}, true);

/*

*/

/*

var game = new GameEngine.Graphics.Sprite("../../sprites/Black_Circle.png", new GameEngine.Vector2(120, 120), ScreenSize);

await game.init();
   
game.draw(ctx, false);

/*

*/
