import { GameObject } from './GameObject.js';
class Text extends GameObject {
    text;
    constructor(text, position, screenSize) {
        super(position, screenSize);
        this.text = text;
    }
    color = "#ffffff";
    font = "20px Arial";
    draw(ctx) {
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.position.x, this.position.y);
    }
}
export { Text };
