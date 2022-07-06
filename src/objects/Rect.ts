import { Size } from '../math/Size';
import { Vector2 } from '../math/Vector2.js';
import { GameObject } from './GameObject.js'


class Rect extends GameObject {
    declare position: Vector2;
    size: Size;
    declare protected screenSize: Size;
    
    constructor(position: Vector2, size: Size, screenSize: Size) {
        super(position, screenSize); 
        this.size = size;
        this.color = "#ffffff";
    }
    color = "#ffffff";
    

    draw(ctx: any) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
    
}


export { Rect }; 