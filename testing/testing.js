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


var game = new Playlib.Game(config);

var square2 = new Playlib.Rect(new Playlib.Vector2(200, 200), new Playlib.Size(17, 50), ScreenSize);
square2.color = "#000000"


game.showFPS(true);




