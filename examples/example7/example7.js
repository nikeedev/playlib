import { GameEngine } from '../../GameEngine.js'



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new GameEngine.Size(canvas.width, canvas.height);



var config = {
    game_name: "Example 7",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas,
    context: ctx
}


var game = new GameEngine.Game(config);


var square = new GameEngine.Graphics.Rect(new GameEngine.Vector2(30, 30), new GameEngine.Size(20, 20), ScreenSize);

var music = new GameEngine.Sound();

//music.init("https://samplelib.com/lib/preview/mp3/sample-15s.mp3");
music.init("../../assets/pickupCoin.wav")

music.loop = false;

game.update(() => {

    square.draw(ctx);
    music.play();
    square.position.x += 1;
    
}, true);