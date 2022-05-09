import GameEngine from '../../GameEngine.js'



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new GameEngine.Size(canvas.width, canvas.height);

var line = new GameEngine.Graphics.Rect(new GameEngine.Vector2(60, 60), new GameEngine.Size(5, 5), ScreenSize);

line.update(ctx, ()=>{
    
    line.position += line.position.lerp(line.position, line.position  +new GameEngine.Vector2(20, 20), 10);
    
}, false);


