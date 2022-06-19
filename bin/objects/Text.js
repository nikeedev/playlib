import { GameObject } from './GameObject.js';
class Text extends GameObject {
    text;
    constructor(text, position, screenSize) {
        super(position, screenSize);
        this.text = text;
    }
    color = "#ffffff";
    font = "20px Arial";
    draw(ctx, ClearScreen = true) {
        ClearScreen = typeof ClearScreen == 'boolean' ? ClearScreen : true;
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        if (ClearScreen)
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.fillText(this.text, this.position.x, this.position.y);
    }
}
export { Text };
