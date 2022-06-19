import { PlayLib} from '../../bin/PlayLib.js'


/*
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 20;
*/

// Example 5: Use Screen class to create canvas element for you:



var config = {
    game_name: "Example 4",
    style: "border: 1px solid black; background-color: white;",
    parent_element: "body",
    width: 800,
    height: 800,
    useOwnCanvas: false,
    /*
    canvas: canvas,
    context: ctx
    */
}


var game = new PlayLib.Game(config);



const ScreenSize = new PlayLib.Size(game.canvas.width, game.canvas.height);


var spirit = new PlayLib.Sprite("../../assets/Black_Square.png", new PlayLib.Vector2(120, 120), ScreenSize);


await spirit.init();

game.update(() => {

    spirit.draw(game.context);

    spirit.position.x += 1;

});


