/** @description This is the testing page for modules and is used by the main page (index.html) */


import { Playlib } from './bin/playlib.js'


document.getElementById("version").innerHTML = Playlib.version;

const one_second = 1000;
const canvas = document.getElementById("canvas");
canvas.width = window.outerWidth;
canvas.height = window.outerHeight;
const ScreenSize = new Playlib.Size(canvas.width, canvas.height);

var config = {
    style: "background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas
}


class MainScene extends Playlib.Scene
{
    colors = ["#FFFFFF", "#C0C0C0", "#FF00FF", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"];
    colorcount = 0;

    ActivateDown = false
    
    square = new Playlib.Rect(new Playlib.Vector2(1, 1), new Playlib.Size(20, 20), ScreenSize);

    constructor(canvas, ClearScreen)
    {
        super(canvas, ClearScreen);
        this.ClearScreen = false;

        this.square.color = "#545454"
    }
    
    create(ctx)
    {}
    
    update(ctx, deltaTime)
    {
        
        this.square.draw(ctx);

        w
        
        if (this.square.position.y >= ScreenSize.height && this.ActivateDown) {
            this.square.position = new Playlib.Vector2(1, 1);
            this.ActivateDown = false;
            ctx.clearRect(0, 0, ScreenSize.width, ScreenSize.height);
        } 
        else if (this.square.position.y >= ScreenSize.height) {
            this.ActivateDown = true;
            this.square.position = new Playlib.Vector2(ScreenSize.width, 0);
        }
        else if (this.ActivateDown) {
            this.square.position.y += 10;
            this.square.position.x -= 10;
        }
        
        else {
            this.square.position.x += 10;
            this.square.position.y += 10;
        }

    }
}

var game = new Playlib.Game(config, [new MainScene()]);


game.run();



