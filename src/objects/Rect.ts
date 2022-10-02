import { Size } from '../math/Size';
import { Vector2 } from '../math/Vector2.js';
import { GameObject } from './GameObject.js'


class Rect extends GameObject {
    declare position: Vector2;
    size: Size;
    declare protected screenSize: Size;
    color = "#ffffff";
    
    constructor(position: Vector2, size: Size, screenSize: Size, color?: string) {
        super(position, screenSize); 
        this.size = size;
    }
    

    draw(ctx: any) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
    
}


export { Rect }; 