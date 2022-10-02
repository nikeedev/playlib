import { GameObject } from './GameObject.js';
class Text extends GameObject {
    text;
    color = "#ffffff";
    font = "20px Arial";
    constructor(text, position, screenSize) {
        super(position, screenSize);
        this.text = text;
    }
    draw(ctx) {
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.position.x, this.position.y);
    }
}
export { Text };
