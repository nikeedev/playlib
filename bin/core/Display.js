import * as gameengine from './Info.js';
class Display {
    canvas;
    ctx;
    CanvasSize;
    version;
    constructor(SetSize) {
        this.CanvasSize = SetSize;
    }
    init() {
        this.version = document.createElement("p");
        this.version.innerHTML = "GameEngine.js v" + gameengine.version;
        this.canvas = document.createElement("canvas");
        this.canvas.style = "border: 1px solid black;";
        document.body.appendChild(this.canvas);
        document.body.appendChild(this.version);
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = this.CanvasSize.width;
        this.canvas.height = this.CanvasSize.height;
    }
    setScreenMode(mode) {
        if (mode == "max") {
            this.CanvasSize.width = window.innerWidth - 40;
            this.CanvasSize.height = window.innerHeight - 50;
            this.canvas.width = this.CanvasSize.width;
            this.canvas.height = this.CanvasSize.height;
        }
        else {
            return;
        }
    }
}
export { Display };
