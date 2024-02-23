
import { Playlib } from "../../bin/playlib.js";


/** 
 * @author nikeedev
 * 
 * @license MIT
 * @type {HTMLCanvasElement} 
 * 
 * 
 * 
*/

const canvas = document.getElementById("canvas");


const ScreenSize = new Playlib.Vec2(window.innerWidth - 30, window.innerHeight - 30);

let config = {
    game_name: "Example 1",
    style: "border: 1px solid black; background-color: white;",
    useOwnCanvas: true,
    canvas: canvas,
    width: ScreenSize.width,
    height: ScreenSize.height,
}

class MainScene extends Playlib.Scene {

    constructor(canvas, ClearScreen) {
        super(canvas, ClearScreen);

        //this.ClearScreen = true;

    }

    colors = ["#FFFFFF", "#C0C0C0", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"]


    colorcount1 = 0;
    colorcount2 = 0;


    // Example 1: Game and Words variable: Rainbow text and rainbow box moving Rect. 


    words = new Playlib.Text("Hello", new Playlib.Vec2(60, 88), ScreenSize);

    square = new Playlib.Rect(new Playlib.Vec2(43, 43), new Playlib.Vec2(65, 65), ScreenSize);

    create() {

    }

    update(ctx, ts) {
        this.words.draw(ctx)
        this.words.color = this.colors[this.colorcount1];
        this.colorcount1++;
        if (this.colorcount1 > this.colors.length) this.colorcount1 = 0;

        this.square.draw(ctx);
        if (this.square.position.x < 167) {

            this.square.position.x += 1;

            this.square.color = this.colors[this.colorcount2];
            this.colorcount2++;
            if (this.colorcount2 > this.colors.length) this.colorcount2 = 0;
        }
        else {
            this.square.color = "#ffffff"
        }
    }


}

let game = new Playlib.Game(config, [new MainScene()]);

game.run();
