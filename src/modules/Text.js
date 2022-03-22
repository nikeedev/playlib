/** @type {HTMLCanvasElement} */
import { Size } from "./Size.js";

const colors = ["#FFFFFF", "#C0C0C0", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"]


class Text {
    constructor(text, x, y, screenWidth, screenHeight) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
    }
    color = "#000000";
    font = "20px Arial";
    draw(ctx) {
        ctx.font = this.font
        ctx.fillStyle = this.color;
        ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
        ctx.fillText(this.text, this.x, this.y);
    }
    update(ctx, func) {
        setInterval(() => {
            ctx.font = this.font;
            ctx.fillStyle = this.color;
            func();
            ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
            ctx.fillText(this.text, this.x, this.y);
        }, 100);    
    }
}


export { Text, colors }; 