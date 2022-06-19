import { GameObject } from './GameObject.js';
class Rect extends GameObject {
    size;
    constructor(position, size, screenSize) {
        super(position, screenSize);
        this.size = size;
        this.color = "#ffffff";
    }
    color = "#ffffff";
    draw(ctx, ClearScreen = true) {
        ClearScreen = typeof ClearScreen == 'boolean' ? ClearScreen : true;
        ctx.fillStyle = this.color;
        if (ClearScreen)
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
}
export { Rect };
