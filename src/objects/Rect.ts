import { Vec2 } from '../math/Vec2.js';
import { GameObject } from './GameObject.js';


class Rect extends GameObject {
    declare position: Vec2;
    size: Vec2;
    declare protected screenSize: Vec2;
    color = "#ffffff";
    
    constructor(position: Vec2, size: Vec2, screenSize: Vec2, color?: string) {
        super(position, screenSize); 
        this.size = size;
    }
    

    draw(ctx: any) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
    
}


export { Rect }; 