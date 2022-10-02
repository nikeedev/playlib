import { GameObject } from "./GameObject.js";
class Shape extends GameObject {
    size;
    shape;
    constructor(shape, position, size, screenSize) {
        super(position, screenSize);
        this.shape = shape;
        this.size = size;
    }
    color = "#ffffff";
    draw(ctx) {
        ctx.fillStyle = this.color;
        if (this.shape.toLowerCase().trim() == "rect" && this.shape.toLowerCase().trim() == "rectangle")
            ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
}
export { Shape };
