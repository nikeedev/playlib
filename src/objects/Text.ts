import { Vector2 } from '../math/Vector2.js';
import { GameObject } from './GameObject.js';



class Text extends GameObject {
    text: string;
    declare position: Vector2;
    declare protected screenSize: Vector2;
    
    color = "#ffffff";
    font = "20px Arial";
    
    constructor(text: string, position: Vector2, screenSize: Vector2) {
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