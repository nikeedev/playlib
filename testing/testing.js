import { Playlib } from '../bin/playlib.js'

const ScreenSize = new Playlib.Size(window.innerWidth - 30, window.innerHeight - 30);


var config = {
    game_name: "Testing",
    game_version: "1.5.5-dev",
    parent_element: "body",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: false
    //canvas: canvas,
}

class MainScene extends Playlib.Scene
{
    square = new Playlib.Rect(new Playlib.Vector2(200, 200), new Playlib.Size(17, 50), ScreenSize);
    square2 = new Playlib.Rect(new Playlib.Vector2(208.5, 200), new Playlib.Size(17, 50), ScreenSize);
    
    constructor(canvas, ClearScreen)
    {
        super(canvas, ClearScreen);
        this.ClearScreen = true;

        this.square.color = "#000000"
        this.square2.color = "#00EE34"
    }

    create(ctx)
    {
        this.square.draw(ctx);
        this.square2.draw(ctx);
        //game.current_scene = 2
    
    }

    update(ctx)
    {
        this.square.draw(ctx);
        this.square2.draw(ctx);
    }
}    

class SecondScene extends Playlib.Scene
{
    square2 = new Playlib.Rect(new Playlib.Vector2(200, 200), new Playlib.Size(17, 50), ScreenSize);
    
    constructor(canvas, ClearScreen)
    {
        super(canvas, ClearScreen);
        this.ClearScreen = true;

        this.square2.color = "#545454"
    }

    create(ctx)
    {
         
        this.square2.draw(ctx);
 
    }

    update(ctx)
    {
        this.square2.draw(ctx);
    }
}    



var game = new Playlib.Game(config, [new MainScene(), new SecondScene()]);

game.showFPS(true);

game.update();

