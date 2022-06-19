import { Size } from '../math/Size.js';
import { Vector2 } from '../math/Vector2.js';
import { GameObject } from './GameObject.js';



class Text extends GameObject {
    text: string;
    declare position: Vector2;
    declare protected screenSize: Size;
    constructor(text: string, position: Vector2, screenSize: Size) {
        super(position, screenSize);
        this.text = text;
    }
    color = "#ffffff";
    font = "20px Arial";
    declare protected ClearScreen: boolean | undefined;
    draw(ctx: any, ClearScreen: boolean = true) {
        ClearScreen = typeof ClearScreen == 'boolean'? ClearScreen : true;
        ctx.font = this.font
        ctx.fillStyle = this.color;
        if (ClearScreen) 
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.fillText(this.text, this.position.x, this.position.y);
    }
    
}


export { Text }; 