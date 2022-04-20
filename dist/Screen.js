class Screen {
    modes = {
        max: "max"
    };
    canvas;
    ctx;
    CanvasSize;
    constructor(CanvasSize) {
        this.CanvasSize = CanvasSize;
        this.canvas = document.createElement("canvas");
        this.canvas.style = "border: 1px solid black;";
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = CanvasSize.width;
        this.canvas.height = CanvasSize.height;
    }
    setScreenSize(ScreenSize) {
        this.canvas.width = ScreenSize.width;
        this.canvas.height = ScreenSize.height;
        this.canvas.width = this.CanvasSize.width;
        this.canvas.height = this.CanvasSize.height;
    }
    setScreenMode(mode) {
        if (mode == this.modes.max) {
            this.canvas.width = window.innerWidth - 40;
            this.canvas.height = window.innerHeight - 20;
        }
    }
}
export { Screen };
