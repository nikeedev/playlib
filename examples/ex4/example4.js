import { Playlib } from '../../bin/playlib.js';


var config = {
    game_name: "Example 5",
    style: "border: 1px solid black; background-color: white;",
    parent_element: "#root"
}    


class MainScene extends Playlib.Scene
{

    constructor(canvas, ClearScreen) {
        super(canvas, ClearScreen);
        
        this.ClearScreen = false;

    }

    
    spirit = new Playlib.Sprite("../../assets/Black_Square.png", new Playlib.Vec2(120, 120), ScreenSize);


    // Example 4: Use Sprite class to draw a moving black square

    async create(ctx)
    {
        await this.spirit.init();
        await this.spirit.draw(ctx);
    }
    
    async update(ctx, ts)
    {   
        if (Playlib.Input.KeyPressed(Playlib.Keys.Space)) 
            this.spirit.position.x += 100 *ts;
            await this.spirit.draw(ctx);

        // await this.spirit.draw(ctx);
    }


}


let game = new Playlib.Game(config, [new MainScene()]);

var ScreenSize = new Playlib.Vec2(game.width, game.height);


game.run();

/*

*/


