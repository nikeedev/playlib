import { Vector2, Size, Rect, Text, Sprite, Screen, Object } from '../../GameEngine.js'



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new Size(canvas.width, canvas.height);

var line = new Rect(new Vector2(60, 60), new Size(5, 5), ScreenSize);

line.update(ctx, ()=>{
    
    line.position += line.position.lerp(line.position, line.position+new Vector2(20, 20), 10);
}, false);


