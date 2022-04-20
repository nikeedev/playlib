import { Size } from './Size.js'
import * as gameengine from './Info.js'


class Screen {
    canvas: any;
    ctx: any;
    CanvasSize: Size;
    version: any;
    constructor(CanvasSize: Size) {
        this.CanvasSize = CanvasSize;
    }
    init() {
        this.version = document.createElement("p");
        this.version.innerHTML= "GameEngine.js v" + gameengine.version; 
        this.canvas = document.createElement("canvas");
        this.canvas.style = "border: 1px solid black;";
        document.body.appendChild(this.canvas);
        document.body.appendChild(document.createElement("br"));
        document.body.appendChild(this.version);
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = this.CanvasSize.width;
        this.canvas.height = this.CanvasSize.height;
    }
    setScreenMode(mode: string) {
        if (mode == "max") {
            this.canvas.width = window.innerWidth - 40;
            this.canvas.height = window.innerHeight - 20;
        } else {
            return;
        }
    }
    
}

export { Screen }