/** @type {HTMLCanvasElement} */
import { Size } from "./Size.js";

class Player {
    constructor(x, y, size, screenWidth, screenHeight) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
    }
    draw(ctx) {
        ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
    update(ctx, func) {
        setInterval(() => {
            func();
            ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }, 500);    
    }
}


export { Player }; 