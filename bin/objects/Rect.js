import { GameObject } from './GameObject.js';
class Rect extends GameObject {
    size;
    color = "#ffffff";
    constructor(position, size, screenSize, color) {
        super(position, screenSize);
        this.size = size;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
}
export { Rect };
