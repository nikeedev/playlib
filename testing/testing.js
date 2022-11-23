
import { Playlib } from '../bin/playlib.js'

var ScreenSize = new Playlib.Size(window.innerWidth - 20, window.innerHeight - 20);


var config = {
    game_name: "Testing",
    game_version: "1.0_test-dev",
    parent_element: "body",
    style: "border: 1px solid black; background-color: white;",
    useOwnCanvas: false
    //canvas: canvas,
}

class MyScene extends Playlib.Scene {
    colors = ["#FFFFFF", "#C0C0C0", "#FF00FF", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"];
    colorcount = 0;

    square = new Playlib.Rect(new Playlib.Vector2(200, 200), new Playlib.Size(45, 50), ScreenSize);
    speed = 200

    constructor(canvas, ClearScreen) {
        super(canvas, ClearScreen);
        //this.ClearScreen = true;

        this.square.color = "#545454"
    }

    create(ctx) {
        console.log(this)
        this.square.draw(ctx);
    }


    update(ctx, deltaTime) {
        this.square.color = this.colors[this.colorcount];
        this.colorcount++;

        if (this.colorcount > this.colors.length + 2) this.colorcount = 0;

        if (Playlib.Input.KeyPressed(Playlib.Keys.Up))
            this.square.position.y -= this.speed * deltaTime;

        if (Playlib.Input.KeyPressed(Playlib.Keys.Down))
            this.square.position.y += this.speed * deltaTime;

        if (Playlib.Input.KeyPressed(Playlib.Keys.Left))
            this.square.position.x -= this.speed * deltaTime;

        if (Playlib.Input.KeyPressed(Playlib.Keys.Right))
            this.square.position.x += this.speed * deltaTime;

        this.square.draw(ctx);
    }

}



var game = new Playlib.Game(config, [new MyScene()]);


//game.showFPS(false);
game.run();

