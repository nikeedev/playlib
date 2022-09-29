import { Vector2 } from "../math/Vector2.js"
import { Size } from "../math/Size.js"
import { GameObject } from "./GameObject.js"


class Shape extends GameObject {
    declare position: Vector2;
    size: Size;
    declare protected screenSize: Size;
    protected shape: string;

    constructor(shape: string, position: Vector2, size: Size, screenSize: Size) {
        super(position, screenSize);
        this.shape = shape;
        this.size = size;
        
    }

    color = "#ffffff";

    
    draw(ctx: any) {
        ctx.fillStyle = this.color;
        
        if (this.shape.toLowerCase().trim() == "rect" && this.shape.toLowerCase().trim() == "rectangle")
            ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        
    }
}

export { Shape }
