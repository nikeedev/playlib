import { Vec2 } from '../math/Vec2.js';
import { GameObject } from './GameObject.js';



class Text extends GameObject {
    text: string;
    declare position: Vec2;
    declare protected screenSize: Vec2;
    
    color = "#ffffff";
    font = "20px Arial";
    
    constructor(text: string, position: Vec2, screenSize: Vec2) {
        super(position, screenSize);
        this.text = text;
    }
    
    draw(ctx: any) {
        ctx.font = this.font
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.position.x, this.position.y);
    }
    
}


export { Text }; 