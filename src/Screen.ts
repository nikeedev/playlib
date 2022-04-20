import { Size } from './Size.js'



class Screen {
    modes = {
        max: "max"
    }
    canvas: any;
    ctx: CanvasRenderingContext2D;
    CanvasSize: Size;
    constructor(CanvasSize: Size) {
        this.CanvasSize = CanvasSize;
        this.canvas = document.createElement("canvas");
        this.canvas.style = "border: 1px solid black;";
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = CanvasSize.width;
        this.canvas.height = CanvasSize.height;
    }
    setScreenSize(ScreenSize: Size) {
        this.canvas.width = ScreenSize.width;
        this.canvas.height = ScreenSize.height;
        this.canvas.width = this.CanvasSize.width;
        this.canvas.height = this.CanvasSize.height;
    }
    setScreenMode(mode: string) {
        if (mode == this.modes.max) {
            this.canvas.width = window.innerWidth - 40;
            this.canvas.height = window.innerHeight - 20;
        }
    }
    
}

export { Screen }