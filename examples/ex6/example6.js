import { Playlib } from '../../bin/playlib.js'

const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new Playlib.Vec2(canvas.width, canvas.height);



let config = {
    game_name: "Example 6",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas,
}

class MainScene extends Playlib.Scene {
    square = new Playlib.Rect(new Playlib.Vec2(30, 30), new Playlib.Vec2(20, 20), ScreenSize)
    music = new Playlib.Sound("../../assets/pickupCoin.wav")

    constructor(canvas, ClearScreen) {
        super(canvas, ClearScreen);
    }

    async create(ctx) {
        this.square.color = "#000000";
        // music.init("https://samplelib.com/lib/preview/mp3/sample-15s.mp3");
        this.music.init();

        this.music.loop = false;
    }

    async update(ctx) {

        this.square.draw(ctx);
        this.music.play();
        this.square.position.x += 1;
        
    }
}

let game = new Playlib.Game(config, [new MainScene()]);

game.run();
