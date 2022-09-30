import { Playlib } from '../../bin/playlib.js'



const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new Playlib.Size(canvas.width, canvas.height);



var config = {
    game_name: "Example 6",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas,
    
}


var game = new Playlib.Game(config);


var square = new Playlib.Rect(new Playlib.Vector2(30, 30), new Playlib.Size(20, 20), ScreenSize);

square.color = "#000000"

var music = new Playlib.Sound("../../assets/pickupCoin.wav");

//music.init("https://samplelib.com/lib/preview/mp3/sample-15s.mp3");
music.init();

music.loop = false;

game.update((ctx) => {

    square.draw(ctx);
    music.play();
    square.position.x += 1;
    
});