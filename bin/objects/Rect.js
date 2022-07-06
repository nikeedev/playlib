import { GameObject } from './GameObject.js';
class Rect extends GameObject {
    size;
    constructor(position, size, screenSize) {
        super(position, screenSize);
        this.size = size;
        this.color = "#ffffff";
    }
    color = "#ffffff";
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
}
export { Rect };
