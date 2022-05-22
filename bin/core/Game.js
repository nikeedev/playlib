/**
 * @description Creates new game
 * @since 0.4.0
 */
class Game {
    game_name;
    game_version;
    parent_element;
    style;
    width;
    height;
    useOwnCanvas;
    canvas;
    context;
    constructor(config) {
        this.game_name = typeof this.game_name == 'string' ? config.game_name : null;
        this.game_version = typeof this.game_version == 'string' ? config.game_version : null;
        this.style = config.style;
        this.width = config.width;
        this.height = config.height;
        this.useOwnCanvas = config.useOwnCanvas;
        if (this.useOwnCanvas) {
            this.parent_element = "";
            this.canvas = config.canvas;
            this.canvas.style = "background-color: black;" + this.style;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.context = this.canvas.getContext('2d');
        }
        else {
            this.parent_element = config.parent_element;
            this.canvas = document.createElement('canvas');
            this.canvas.style = ("background-color: black;" + this.style);
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            document.querySelector(this.parent_element).append(this.canvas);
            this.context = this.canvas.getContext('2d');
        }
    }
    create(func) {
        func();
    }
    update(func) {
        const updateFunc = () => {
            func();
            requestAnimationFrame(updateFunc);
        };
        requestAnimationFrame(updateFunc);
    }
    setScreenMode(mode) {
        if (mode == "max") {
            this.canvas.width = window.innerWidth - 40;
            this.canvas.height = window.innerHeight - 50;
        }
        else {
            return;
        }
    }
    clear(ctx) {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
export { Game };
