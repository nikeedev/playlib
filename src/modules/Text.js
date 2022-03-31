/** @type {HTMLCanvasElement} */
import { Size } from "./Size.js";


class Text {
    constructor(text, x, y, screenSize) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.screenSize = screenSize
    }
    color = "#000000";
    font = "20px Arial";
    draw(ctx) {
        ctx.font = this.font
        ctx.fillStyle = this.color;
        ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.fillText(this.text, this.x, this.y);
    }
    update(ctx, func, frames) {
        setInterval(() => {
            ctx.font = this.font;
            ctx.fillStyle = this.color;
            func();
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
            ctx.fillText(this.text, this.x, this.y);
        }, frames);    
    }
}


export { Text }; 