/** @type {HTMLCanvasElement} */
import { Size } from "./Size.js";

class Rect {
    constructor(x, y, size, screenSize) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.screenSize = screenSize
    }
    color = "#000000";
    font = "20px Arial";
    draw(ctx) {
        ctx.font = this.font
        ctx.fillStyle = this.color;
        ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.fillRect(this.x, this.y, this.size.width, this.size.height);
    }
    update(ctx, func, ClearScreen, looping = true) {  
        this.looping = typeof looping == 'boolean'? looping : true;       
        const updateMethod = () => {
            ctx.font = this.font
            ctx.fillStyle = this.color;
            func();
            if (ClearScreen) 
                ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
            ctx.fillRect(this.x, this.y, this.size.width, this.size.height);
            if (this.looping) requestAnimationFrame(updateMethod);
        };
        
        requestAnimationFrame(updateMethod);  
    }
}


export { Rect }; 