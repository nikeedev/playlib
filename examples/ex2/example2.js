
import { Playlib } from '../../bin/playlib.js'


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

canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
const ScreenSize = new Playlib.Vec2(canvas.width, canvas.height);


let config = {
    game_name: "Example 2",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas,

}

class MainScene extends Playlib.Scene {


    rect = new Playlib.Rect(new Playlib.Vec2(0, 0), new Playlib.Vec2(20, 20), ScreenSize)

    colors = ["#FFFFFF", "#C0C0C0", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"]

    colorcount = 0;
    ActivateUp = false;
    ActivateDown = false;

    constructor(canvas, ClearScreen) {
        super(canvas, ClearScreen);
        this.ClearScreen = false;
    }

    // Example 2: Canvas painting of rainbow rectangles that move around.

    create() {

    }

    update(ctx, ts) {
        this.rect.draw(ctx);

        if (this.ActivateUp == false && canvas.height <= this.rect.position.y) {
            this.ActivateUp = true;
        }
        if (this.ActivateDown == false && -2 >= this.rect.position.y) {
            this.ActivateDown = true;
            this.ActivateUp = false;
        }

        if (this.ActivateUp) {
            this.rect.position.x += 1;
            this.rect.position.y -= 1;
            this.rect.size.width -= 0.1;
            this.rect.size.height -= 0.1;


            this.rect.color = this.colors[this.colorcount];
            this.colorcount--;
            if (this.colorcount < 0) this.colorcount = this.colors.length;
        }
        else if (this.ActivateDown && this.rect.position.x >= 0) {

            this.rect.position.x -= 1;

            this.rect.color = colors[colorcount];
            this.colorcount++;
            if (this.colorcount > this.colors.length) this.colorcount = 0;

        }
        else {
            this.rect.position.x += 1;
            this.rect.position.y += 1;
            this.rect.size.width += 0.1;
            this.rect.size.height += 0.1;



            this.rect.color = this.colors[this.colorcount];
            this.colorcount++;
            if (this.colorcount > this.colors.length) this.colorcount = 0;
        }

    }
}

let game = new Playlib.Game(config, [new MainScene()]);

game.run();

