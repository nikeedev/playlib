/** @type {HTMLCanvasElement} */
import { Size } from "./Size.js";

class Rect {
    constructor(x, y, size, screenWidth, screenHeight) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
    }
    color = "#000000";
    font = "20px Arial";
    draw(ctx) {
        ctx.font = this.font
        ctx.fillStyle = this.color;
        ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
    update(ctx, func, ClearScreen, frames) {
        setInterval(() => {
            ctx.font = this.font
            ctx.fillStyle = this.color;
            func();
            if (ClearScreen) 
                ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }, frames);    
    }
}


export { Rect }; 