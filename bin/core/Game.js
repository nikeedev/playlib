import { math } from '../math/Funcs.js';
/**
 * @description Creates new game
 * @since 0.4.0
 */
var Game = /** @class */ (function () {
    function Game(config, scenes, current_scene) {
        if (current_scene === void 0) { current_scene = 1; }
        this.fps_on = false;
        this.current_scene = 0;
        this.game_name = config.game_name != null ? config.game_name : null;
        this.game_version = config.game_version != null ? config.game_version : null;
        this.style = config.style;
        this.width = config.width != null ? config.width : window.innerWidth - 30;
        this.height = config.height != null ? config.height : window.innerHeight - 30;
        this.canvas = config.canvas;
        document.title = this.game_name != null ? this.game_name : document.title;
        document.title += this.game_version != null ? (" - v" + this.game_version) : "";
        this.scenes = scenes;
        this.current_scene = current_scene - 1;
        /*
        if (config.game_type == "canvas" || config.game_type == "dom") {
            this.game_type = config.game_type;
        } else {
            Logging.error(`${this.game_type} is not a valid game_type`)
            Logging.warn("Setting game_type to \"canvas\"");
            this.game_type = "canvas"
        }
        */
        if (this.canvas !== undefined) {
            console.log("Using defined canvas");
            this.parent_element = config.canvas.parentElement;
            this.canvas.style = "background-color: black;" + this.style;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
        }
        else {
            this.parent_element = config.parent_element;
            this.canvas = document.createElement('canvas');
            this.canvas.style = ("background-color: black;" + this.style);
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            document.querySelector(this.parent_element).append(this.canvas);
        }
        /*

        let powered_by_playlib = document.createElement("span")
        powered_by_playlib.style.fontFamily = 'arial';
        powered_by_playlib.style.fontSize = "16px";
        powered_by_playlib.innerText = "PlayLib";

        let powered_holder = document.createElement("p");
        powered_holder.style.fontFamily = 'arial';
        powered_holder.style.fontSize = "13px";
        powered_holder.innerHTML = "Powered by ";
        powered_holder.appendChild(powered_by_playlib);
        document.body.appendChild(powered_holder);
        
        */
    }
    Game.prototype.run = function () {
        var _this = this;
        var context = this.canvas.getContext('2d');
        /*
        console.log(this.scenes);
        console.log(all_scenes);
        */
        if (this.scenes[this.current_scene] === undefined) {
            console.log("%cCurrent scene was not found or is invalid; Resetting to scene before this one, if available", "font-size: 20px; color: rgb(220, 10, 10)");
            this.current_scene--;
        }
        var currentScene = this.scenes[this.current_scene];
        currentScene.canvas = this.canvas;
        // console.log(currentScene)
        // console.log(currentScene.create)
        currentScene.create(context);
        // console.log(currentScene.ClearScreen)
        // console.log(currentScene.update)
        var FPSDeltaTime;
        var MoveDeltaTime;
        var gameLoop = function (timeStamp) {
            window.addEventListener("resize", function () {
                _this.width = window.innerWidth - 21.5;
                _this.height = window.innerHeight - 21.5;
                _this.canvas.width = _this.width;
                _this.canvas.height = _this.height;
            });
            // Calculate the number of seconds passed since the last frame
            FPSDeltaTime = 1000 / (timeStamp - _this.oldTimeStamp);
            MoveDeltaTime = (timeStamp - _this.oldTimeStamp) / 1000;
            _this.oldTimeStamp = timeStamp;
            // Calculate fps
            _this.fps = math.floor(FPSDeltaTime);
            if (currentScene.ClearScreen) {
                // console.log("Cleared the screen");
                _this.scenes[_this.current_scene].clear(_this.canvas);
            }
            currentScene.update(context, MoveDeltaTime);
            // Draw number to the screen
            if (_this.fps_on) {
                context.fillStyle = 'white';
                context.fillRect(0, 0, 105, 42.5);
                context.font = '18px Arial';
                context.fillStyle = 'black';
                context.fillText("FPS: " + _this.fps, 10, 30);
            }
            // The loop function has reached it's end. Keep requesting new frames
            window.requestAnimationFrame(gameLoop);
        };
        window.requestAnimationFrame(gameLoop);
    };
    Game.prototype.showFPS = function (is_on) {
        this.fps_on = is_on;
    };
    return Game;
}());
export { Game };
//# sourceMappingURL=Game.js.map