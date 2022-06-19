import { PlayLib } from '../../bin/PlayLib.js'



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new PlayLib.Size(canvas.width, canvas.height);



var config = {
    game_name: "Example 6",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas,
    context: ctx
}


var game = new PlayLib.Game(config);


var square = new PlayLib.Rect(new PlayLib.Vector2(30, 30), new PlayLib.Size(20, 20), ScreenSize);

var music = new PlayLib.Sound("../../assets/pickupCoin.wav");

//music.init("https://samplelib.com/lib/preview/mp3/sample-15s.mp3");
music.init();

music.loop = false;

game.update(() => {

    square.draw(ctx);
    music.play();
    square.position.x += 1;
    
});