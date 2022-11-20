
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
game.start();

