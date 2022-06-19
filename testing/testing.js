import { PlayLib } from '../bin/PlayLib.js'

const ScreenSize = new PlayLib.Size(window.innerWidth - 30, window.innerHeight - 30);


var config = {
    game_name: "Testing",
    game_version: "1.0.0",
    parent_element: "body",
    style: "border: 1px solid black;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: false,
    /*canvas: canvas,
    context: ctx*/
}


var game = new PlayLib.Game(config);

const sheesh = new PlayLib.Text("sheesh", new PlayLib.Vector2(100, 100), ScreenSize);


game.create(()=>{
    game.showFPS(true)
    
    sheesh.draw(game.context, true)
})

game.update(() => {
    sheesh.position.x += 1;
    sheesh.draw(game.context)
})


