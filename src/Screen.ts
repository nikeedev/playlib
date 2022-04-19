import { Size } from './Size.js'

enum modes {
    max = "max"
}

class Screen {
    canvas: any;
    ctx: any;
    CanvasSize: Size;
    constructor(CanvasSize: Size) {
        this.CanvasSize = CanvasSize;
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = CanvasSize.width;
        this.canvas.height = CanvasSize.height;
    }
    setScreenSize(ScreenSize: Size) {
        this.canvas.width = ScreenSize.width;
        this.canvas.height = ScreenSize.height;
    }
    setScreenMode(mode: modes) {
        if (mode == modes.max) {
            this.canvas.width = window.innerWidth - 30;
            this.canvas.height = window.innerHeight - 20;
        }
    }
    
}

export { Screen }