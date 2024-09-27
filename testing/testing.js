import { Playlib } from '../bin/playlib.js'

let ScreenSize = new Playlib.Vec2(window.innerWidth - 20, window.innerHeight - 20);


let config = {
    game_name: "Testing",
    game_version: "1.0_ test-dev",
    parent_element: "body",
    style: "border: 1px solid black; background-color: white;",
    useOwnCanvas: false
    //canvas: canvas,
}

/*
class MyScene extends Playlib.Scene {
    colors = ["#FFFFFF", "#C0C0C0", "#FF00FF", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"];
    colorcount = 0;

    square = new Playlib.Rect(new Playlib.Vec2(200, 200), new Playlib.Vec2(45, 50), ScreenSize);
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

*/



// class TestScene extends Playlib.Scene
// {
//     square = new Playlib.Sprite("../assets/Black_Circle.png", new Playlib.Vec2(200, 200), ScreenSize);
//     speed = 200

//     constructor(canvas, ClearScreen) {
//         super(canvas, ClearScreen);
//         //this.ClearScreen = true;


//     }

//     async create(ctx) {
//         await this.square.init();

//         console.log(this)
//         // await this.square.draw(ctx, new Playlib.Vec2(20, 25));
//     }


//     async update(ctx, deltaTime) {
//         if (Playlib.Input.KeyPressed(Playlib.Keys.Space)) {
//             this.clear()
//         }

//         if (Playlib.Input.KeyPressed(Playlib.Keys.Up))
//             this.square.position.y -= this.speed * deltaTime;

//         if (Playlib.Input.KeyPressed(Playlib.Keys.Down))
//             this.square.position.y += this.speed * deltaTime;

//         if (Playlib.Input.KeyPressed(Playlib.Keys.Left))
//             this.square.position.x -= this.speed * deltaTime;

//         if (Playlib.Input.KeyPressed(Playlib.Keys.Right))
//             this.square.position.x += this.speed * deltaTime;

//         await this.square.draw(ctx, new Playlib.Vec2(16, 16), new Playlib.Vec2(16, 16), new Playlib.Vec2(32, 32));
//     }

// }


// let game = new Playlib.Game(config, [new TestScene()]);


// //game.showFPS(false);
// game.run();

class TestScene extends Playlib.Scene {
    square = new Playlib.Rect(new Playlib.Vec2(200, 200), new Playlib.Vec2(32, 32), ScreenSize, "black");
    speed = 200;
    white = false;

    constructor(canvas, ClearScreen) {
        super(canvas, ClearScreen);
        //this.ClearScreen = true;
    }

    async create(ctx) {
        console.log(this.square)
        // await this.square.draw(ctx, new Playlib.Vec2(20, 25));
    }


    async update(ctx, deltaTime) {
        if (Playlib.Input.KeyPressed(Playlib.Keys.Space)) {
            this.white = !this.white;
            this.square.color = this.white ? "white" : "black";
        }

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


let game = new Playlib.Game(config, [new TestScene()]);

//game.showFPS(false);
game.run();
