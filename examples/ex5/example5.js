import { Playlib } from '../../bin/playlib.js';


let canvas = document.getElementById("canvas");


console.log(canvas);
var config = {
    game_name: "Example 5",
    style: "border: 1px solid black; background-color: white;",
    canvas: canvas,
}    


class MainScene extends Playlib.Scene
{
    spirit = new Playlib.Sprite("../../assets/Black_Square.png", new Playlib.Vector2(120, 120), ScreenSize);

    constructor(canvas, ClearScreen) {
        super(canvas, ClearScreen);
        
        this.ClearScreen = true;

    }

    // Example 5: Using Input to control a sprite:

    async create()
    {
        await this.spirit.init();
    }

    async update(ctx, ts)
    {
        await this.spirit.draw(ctx);
    
        if (Playlib.Input.KeyPressed(Playlib.Keys.Right)) 
        {
            this.spirit.position.x += 0.9;
        }
    
        else if (Playlib.Input.KeyPressed(Playlib.Keys.Left)) 
        {
            this.spirit.position.x -= 0.9;
        } 
        
        else if (Playlib.Input.KeyPressed(Playlib.Keys.Down)) 
        {
            this.spirit.position.y += 0.9;
        }
        
        else if (Playlib.Input.KeyPressed(Playlib.Keys.Up)) 
        {
            spirit.position.y -= 0.9;
        }    
    }


}


let game = new Playlib.Game(config, [new MainScene()]);

var ScreenSize = new Playlib.Vector2(game.width, game.height);


game.run();

/*

*/

