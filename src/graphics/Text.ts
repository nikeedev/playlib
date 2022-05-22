

import { Size } from '../math/Size.js';
import { Vector2 } from '../math/Vector2.js';

class Text {
    text: string;
    position: Vector2;
    private screenSize: Size;
    constructor(text: string, position: Vector2, screenSize: Size) {
        this.text = text;
        this.position = position;
        this.screenSize = screenSize;
    }
    color = "#000000";
    font = "20px Arial";
    private ClearScreen: boolean | undefined;
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