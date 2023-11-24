import { Vector2 } from '../math/Vector2.js';
import { GameObject } from './GameObject.js';


class Rect extends GameObject {
    declare position: Vector2;
    size: Vector2;
    declare protected screenSize: Vector2;
    color = "#ffffff";
    
    constructor(position: Vector2, size: Vector2, screenSize: Vector2, color?: string) {
        super(position, screenSize); 
        this.size = size;
    }
    

    draw(ctx: any) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
    
}


export { Rect }; 