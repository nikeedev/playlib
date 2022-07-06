import { Playlib } from '../bin/playlib.js'

const ScreenSize = new Playlib.Size(window.innerWidth - 30, window.innerHeight - 30);


var config = {
    game_name: "Testing",
    game_version: "1.5.2-dev",
    parent_element: "body",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: false
    //canvas: canvas,
}


var game = new Playlib.Game(config);

var sheesh = new Playlib.Text("sheesh", new Playlib.Vector2(100, 100), ScreenSize);

sheesh.color = "#000000"

var square2 = new Playlib.Rect(new Playlib.Vector2(200, 200), new Playlib.Size(17, 50), ScreenSize);

square2.color = "#000000"

game.showFPS(true)

game.create((ctx)=>{
    
    
    square2.draw(ctx)
    sheesh.draw(ctx)
}, false)


game.update((ctx) => {
 
    sheesh.position.x += 1.12;
    square2.position.x += 1;
    
    square2.draw(ctx);
    sheesh.draw(ctx);
    square2.draw(ctx);
})


