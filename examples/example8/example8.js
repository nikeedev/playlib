import { Sound, Vector2, Size, Rect, Text, Sprite, Screen, Keys, Input } from '../../GameEngine.js'



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new Size(canvas.width, canvas.height);

var square = new Rect(new Vector2(30, 30), new Size(20, 20), ScreenSize);

var music = new Sound();

music.init("https://samplelib.com/lib/preview/mp3/sample-15s.mp3");

music.loop = false;

square.update(ctx, ()=>{
    music.play();
    square.position.x += 1;
    
}, true);